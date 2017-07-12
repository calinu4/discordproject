var assert = require('assert');
var King = require("../structures/King");
var k=new King();

describe("King Tests", function () {
    describe("Displaying Cnut Information from loaded JSON file", function () {
        it("Searching for Cnut should return some string information", function () {
        
          assert.equal("","");
        });
    });

    describe("Displaying Cnut Information from loaded JSON file", function () {
        it("Searching for Cnut should return some string information", function () {
           var s=k.displayResult("Cnut");
          assert.equal("",s);
        });
    });

    });
  