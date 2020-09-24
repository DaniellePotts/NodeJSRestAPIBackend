const validate = require('jsonschema').validate;

module.exports = {
    validateSchema(object, schema) {
        return validate(object, schema).errors.length === 0;
    },
};
