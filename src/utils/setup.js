require('dotenv').config();
const path = require('path');
const configs = require('require-all')(`${path.join(__dirname, '../')}/configs`);

class Setup {
    static getConfigs() {
        return configs[process.env.NODE_ENV || 'default'];
    }
}

module.exports = {
    Setup,
};
