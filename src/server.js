const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const Logger = require('./logging/logger').Logger;

const logger = new Logger('baseline');

const Setup = require('./utils/setup').Setup;

const config = Setup.getConfigs();
const port = config.port;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/helloWorld', require('./routes/helloWorld'));

app.listen(port, () => {
    logger.info(`${Setup.getConfigs().service} template app listening @ ${config.host}:${port}`);
});
