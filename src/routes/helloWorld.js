const express = require('express');

const router = express.Router();

const helloWorldController = require('controllers/helloWorldController');

router.get('/:name', async (req, res) => {
    res.send(helloWorldController.sayHello(req.params.name));
});

module.exports = router;
