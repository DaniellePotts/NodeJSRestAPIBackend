const winston = require("winston");

const DateUtils = require("../utils/dateUtils").DateUtils;
const Setup = require("../utils/setup").Setup;

class Logger {
  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `./logs/${Setup.getConfigs().service}-${DateUtils.formatDateString(
            new Date()
          )}_log.log`,
        }),
      ],
    });
  }

   info(message) {
    this.logger.info(message);
  }

   debug(message) {
    this.logger.debug(message);
  }

   error(message) {
    this.logger.error(message);
  }
}

module.exports = {
  Logger
};
