const chai = require('chai');

const expect = chai.expect;
const dateUtils = require('utils/dateUtils');

describe('Validate Date Utils', () => {
    it('Should return a string date', () => {
        const date = new Date();

        const expected = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        const actualDate = dateUtils.formatDateString(date);

        expect(expected).to.equal(actualDate);
    });
    it('Should return a time string', () => {
        const time = new Date();

        const expected = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        const actualTime = dateUtils.formatTimeString(time);

        expect(expected).to.equal(actualTime);
    });
});
