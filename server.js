const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const fileUpload = require('express-fileupload');

require('dotenv').config({ path: path.resolve(__dirname, `./env/${process.env.ENV_FILE}`) });

const logger = require('./src/utils/logger');
const apiRouter = require('./src/routes');

const app = express();

// Middlewares
app.use(compression());

// Security
if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}
if (process.env.NODE_ENV !== 'development') {
  const corsOptions = {
    origin: [/\.netlify\.app$/, /\.netlify\.com$/],
  };
  app.use(cors(corsOptions));
}
// file user are uploading should go to s3
app.use(fileUpload());
app.use('/tmp', express.static(`${__dirname}/tmp`));

app.use(
  '/api',
  bodyParser.urlencoded({ extended: false, limit: '10mb' }),
  bodyParser.json({ limit: '10mb' }),
  apiRouter,
);

app.listen(process.env.PORT, () => {
  logger.info(`Leaderboard backend running on port ${process.env.PORT}. Node.js version: ${process.version}`);
});
