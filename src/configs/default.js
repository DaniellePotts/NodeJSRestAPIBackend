require('dotenv').config();

const config = module.exports = {};

config.service = {
    name: 'baseline',
    config: 'default',
};

config.server = {
    host: 'http://localhost',
    port: process.env.PORT || 3000,
};
