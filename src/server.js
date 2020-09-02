const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const logger = require('logger').createLogger('development.log');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/helloWorld", require("./routes/helloWorld"));

app.listen(port, () => {
    logger.debug(`NEPO template app listening @ http://localhost:${port}`);
});


