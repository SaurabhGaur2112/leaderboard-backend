const winston = require('winston');
const _ = require('lodash');

const logger = winston.createLogger({
  format: process.env.LOGGING_IS_JSON === '1' ? winston.format.json() : winston.format.simple(),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: true,
      colorize: true,
      timestamp: true,
    }),
  ],
});

logger.stream = {
  write: (message) => {
    logger.log('info', message);
  },
};

logger.jsonStream = {
  write: (logPayload) => {
    try {
      const log = {
        level: 'info',
        ...(_.isString(logPayload) ? JSON.parse(logPayload) : logPayload),
      };

      logger.log(log);
    } catch (e) {
      logger.error('Failed capturing logs');
    }
  },
};

module.exports = logger;
