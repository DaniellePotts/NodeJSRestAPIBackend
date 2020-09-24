const chai = require('chai');
const path = require('path');

const expect = chai.expect;
const Logger = require('logging/logger').Logger;

const fs = require('fs');

describe('Validate logger', () => {
    before(() => {
        this.dummyServiceNameBase = 'LOGGER-TESTS';
        this.searchFolder = `${path.join(__dirname, '../')}/logs`;

        this.infoLoggerFileName = `${this.dummyServiceNameBase}-info-logger-file`;
        this.errorLoggerFileName = `${this.dummyServiceNameBase}-error-logger-file`;

        this.infoLogger = new Logger(this.infoLoggerFileName);
        this.errorLogger = new Logger(this.errorLoggerFileName);
    });
    it('Should create a logger files', async () => {
        this.infoLogger.info('TEST!');
        const files = await fs.readdirSync(this.searchFolder);

        const foundFile = files.filter((file) => {
            if (file.includes(this.infoLoggerFileName)) {
                return file;
            }
        });

        expect(foundFile).to.exist;
    });
    it('Logger file should have info level', async () => {
        const files = await fs.readdirSync(this.searchFolder);

        const foundFile = files.filter((file) => {
            if (file.includes(this.infoLoggerFileName)) {
                return file;
            }
        });

        const message = JSON.parse(await fs.readFileSync(`${this.searchFolder}/${foundFile}`));

        const expectedLevel = 'info';
        const actualLevel = message.level;

        expect(actualLevel).to.equal(expectedLevel);
    });
    it('Error logger file should exist', async () => {
        this.errorLogger.error('TEST!');
        const files = await fs.readdirSync(this.searchFolder);

        const foundFile = files.filter((file) => {
            if (file.includes(this.errorLoggerFileName)) {
                return file;
            }
        });

        expect(foundFile).to.exist;
    });
    it('Logger file should have error level', async () => {
        const files = await fs.readdirSync(this.searchFolder);

        const foundFile = files.filter((file) => {
            if (file.includes(this.errorLoggerFileName)) {
                return file;
            }
        });

        const message = JSON.parse(await fs.readFileSync(`${this.searchFolder}/${foundFile}`));

        const expectedLevel = 'error';
        const actualLevel = message.level;

        expect(actualLevel).to.equal(expectedLevel);
    });
    it('Logger class should return a message with a timestamp', () => {
        const testMessage = 'Test message';
        const message = this.infoLogger.formatMessage(testMessage);

        const expectedIncludesResponse = true;
        const actualIncludesResponse = message.includes('Timestamp') && message.includes(testMessage);

        expect(actualIncludesResponse).to.equal(expectedIncludesResponse);
    });
    after(async () => {
        const files = await fs.readdirSync(`${path.join(__dirname, '../')}/logs`);

        const foundFiles = files.filter((file) => {
            if (file.includes(this.dummyServiceNameBase)) {
                return file;
            }
        });

        if (!Array.isArray(foundFiles)) {
            await fs.unlinkSync(`${path.join(__dirname, '../')}/logs/${foundFiles}`);
        } else {
            await Promise.all(
                foundFiles.map(async (file) => {
                    await fs.unlinkSync(`${path.join(__dirname, '../')}/logs/${file}`);
                }),
            );
        }
    });
});
