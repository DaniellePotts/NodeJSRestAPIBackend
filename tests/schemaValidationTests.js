const expect = require('chai').expect;
const schemaValidator = require('../src/utils/schemaValidator');

const addressSchema = require('../src/schemas/addressSchema');

describe('Validate Schema', () => {
    it('Should validate address schema to be valid', () => {
        const address = {
            lines: ['test'],
            zip: '123',
            city: 'the best city on earth',
            country: 'the best country',
        };

        const expected = true;
        const actual = schemaValidator.validateSchema(address, addressSchema);

        expect(expected).to.equal(actual);
    });

    it('Should validate address schema to be invalid', () => {
        const address = {
            lines: ['test'],
            zip: '123',
            city: 'the best city on earth',
        };

        const expected = false;
        const actual = schemaValidator.validateSchema(address, addressSchema);

        expect(expected).to.equal(actual);
    });
});
