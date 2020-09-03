const validate = require('jsonschema').validate;

class SchemaValidator {
    static validateSchema(object, schema) {
        return validate(object, schema).errors.length === 0;
    }
}

module.exports = {
    SchemaValidator,
};
