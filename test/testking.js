var assert = require('assert');
var King = require("../structures/King");
var k=new King();

describe("King Tests", function () {
      
   
        this.timeout(5000);
        it("Retrieving data from JSON file", function (done) {
          setTimeout(done, 1000);
        });  

        it("Searching for Cnut should return all details for Cnut King", function () {  
           var s=k.displayResult("Cnut");
          assert.equal("Cnut, United Kingdom, House of Denmark, 1016-1035",s);
        
        });


    });
  