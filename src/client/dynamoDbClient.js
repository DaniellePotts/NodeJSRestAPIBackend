const AWS = require("aws-sdk");

class DynamoDBClient {
  constructor(region) {
    try {
      AWS.config.update({
        region: region,
      });
      this.docClient = new AWS.DynamoDB.DocumentClient();
    } catch (err) {
      console.log(err);
    }
  }

  async get(query) {
    return new Promise((resolve, reject) => {
      this.docClient.get(query, function(err, data) {
        if (err) {
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
      this.docClient.put(params, function(err, data) {
        if (err) {
          console.log(err);
          reject(err, err.stack);
        } else resolve(data);
      });
    }).catch((err) => {
      Promise.reject(err);
    });
  }
}

module.exports = {
  DynamoDBClient,
};
