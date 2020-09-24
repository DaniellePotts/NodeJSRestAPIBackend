const helloWorldService = require('services/helloWorldService');

module.exports = {
    sayHello(name) {
        return helloWorldService.sayHello(name);
    },
};
