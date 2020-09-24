const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const setup = require('./utils/setup');

const config = setup.getConfigs();
const port = config.server.port;

const Logger = require('./logging/logger').Logger;

const logger = new Logger(config.service.name);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

app.use('/helloWorld', require('./routes/helloWorld'));

app.listen(port, () => {
    logger.info(`${config.service.name} app listening @ ${config.server.host}:${port}`);
});
