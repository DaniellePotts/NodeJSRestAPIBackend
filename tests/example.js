const should = require("should");
const SchemaValidator = require("../src/utils/schemaValidator").SchemaValidator;

describe("Array", () => {
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", () => {
      should.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Validate Schema", () => {
  it("Should validate address schema", () => {
    const address = {
      lines: ["test"],
      zip: "123",
      city: "the best city on earth",
      country: "lol country",
    };
  
    const validated = SchemaValidator.validateSchema(address, require("../src/schemas/addressSchema"));
    should.equal(validated, true);
  });
});
