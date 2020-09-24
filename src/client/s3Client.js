const AWS = require('aws-sdk');

const Logger = require('logging/logger').Logger;

const logger = new Logger();

module.exports = {
    get(config, fileName) {
        return new Promise((resolve, reject) => {
            try {
                const s3 = new AWS.S3(config.setup);
                const params = {
                    Bucket: config.buckets.default,
                    Key: fileName,
                };

                s3.getObject(params, (err, data) => {
                    if (err) {
                        logger.error(JSON.stringify(err));
                        reject(err);
                    } else {
                        resolve(data.Body);
                    }

                    resolve(null);
                });
            } catch (err) {
                logger.error(JSON.stringify(err));
                reject(err);
            }
        });
    },

    put(config, fileName, fileBuffer) {
        return new Promise((resolve, reject) => {
            try {
                const s3 = new AWS.S3(config.setup);
                const params = {
                    Bucket: config.buckets.default,
                    Key: fileName,
                    Body: fileBuffer,
                };

                s3.upload(params, (err) => {
                    if (err) {
                        logger.error(JSON.stringify(err));
                        reject(err);
                    } else {
                        resolve(200);
                    }
                });
            } catch (err) {
                logger.error(JSON.stringify(err));
                reject(err);
            }
        });
    },
};
