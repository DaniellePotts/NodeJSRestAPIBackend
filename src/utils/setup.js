require('dotenv').config();
const path = require('path');
const configs = require('require-all')(
    `${path.join(__dirname, '../')}/configs`,
);

module.exports = {
    getConfigs() {
        return configs[process.env.NODE_ENV || 'default'];
    },
};
