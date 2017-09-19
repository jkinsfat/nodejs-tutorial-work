var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("printName()", function() {
    it("should print the last name first", function() {
        let results = tools.printName({first: "Cody", last: "Banks"});
        expect(results).to.equal("Banks, Cody");
    });
});
