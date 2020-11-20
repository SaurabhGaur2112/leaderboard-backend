const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

require('dotenv').config({ path: path.resolve(__dirname, `./env/${process.env.ENV_FILE}`) });

const logger = require('./src/utils/logger');
const apiRouter = require('./src/routes');

const app = express();

// Middlewares
app.use(compression());

// Security
if (process.env.NODE_ENV !== 'development') {
  // app.use(helmet());

  const corsOptions = {
    origin: [/\.wallnit\.io$/, /\.wallnit\.com$/],
  };
  app.use(cors(corsOptions));
}

app.use(
  '/api',
  bodyParser.urlencoded({ extended: false, limit: '10mb' }),
  bodyParser.json({ limit: '10mb' }),
  apiRouter,
);

app.listen(process.env.PORT, () => {
  logger.info(`Leaderboard backend running on port ${process.env.PORT}. Node.js version: ${process.version}`);
});
