const AWS = require('aws-sdk');

const Logger = require('../logging/Logger').Logger;

const logger = new Logger();

class DynamoDBClient {
    constructor(region) {
        try {
            AWS.config.update({
                region,
            });
            this.docClient = new AWS.DynamoDB.DocumentClient();
        } catch (err) {
            logger.error(err);
        }
    }

    async get(query) {
        return new Promise((resolve, reject) => {
            this.docClient.get(query, (err, data) => {
                if (err) {
                    logger.error(err);
                    reject(err);
                } else {
                    resolve(data.Items);
                }
            });
        }).catch((err) => {
            Promise.reject(err);
        });
    }

    async put(params) {
        return new Promise((resolve, reject) => {
            this.docClient.put(params, (err, data) => {
                if (err) {
                    logger.error(err);
                    reject(err, err.stack);
                } else {
                    resolve(data);
                }
            });
        }).catch((err) => {
            Promise.reject(err);
        });
    }
}

module.exports = {
    DynamoDBClient,
};
