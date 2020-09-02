const express = require('express');

const router = express.Router();

const HelloWorldController = require('../controllers/helloWorldController').HelloWorldController;

router.get('/:name', async (req, res) => {
    const helloWorldController = new HelloWorldController();

    res.send(helloWorldController.sayHello(req.params.name));
});

module.exports = router;
