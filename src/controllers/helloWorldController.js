const HelloWorldService = require('../services/helloWorldService.js').HelloWorldService;

class HelloWorldController {
    constructor() {
        this.helloWorldService = new HelloWorldService();
    }

    sayHello(name) {
        return this.helloWorldService.sayHello(name);
    }
}

module.exports = {
    HelloWorldController,
};
