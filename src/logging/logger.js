const winston = require('winston');

const dateUtils = require('utils/dateUtils');

class Logger {
    constructor(serviceName) {
        this.logger = winston.createLogger({
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({
                    filename: `./logs/${serviceName}-${dateUtils.formatDateString(
                        new Date(),
                    )}-log.log`,
                }),
            ],
        });
    }

    info(message) {
        this.logger.info(this.formatMessage(message));
    }

    error(message) {
        this.logger.error(this.formatMessage(message));
    }

    formatMessage(message) {
        return `${message}-[Timestamp: ${dateUtils.formatTimeString(
            new Date(),
        )}]`;
    }
}

module.exports = {
    Logger,
};
