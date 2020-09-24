const chai = require('chai');

const expect = chai.expect;
const setup = require('utils/setup');

describe('Validate Setup', () => {
    it('Should return a config with expected fields', () => {
        const config = setup.getConfigs();

        expect(config).to.have.property('server');
        expect(config).to.have.property('service');
        expect(config.service).to.have.property('name');
        expect(config.server).to.have.property('host');
        expect(config.server).to.have.property('port');
    });
});
