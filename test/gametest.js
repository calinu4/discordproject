var assert = require('assert');
var RockGame = require("../structures/RockGame");
rockgame = new RockGame();

describe("Rockgame Tests", function () {
    describe("Constructor Check", function () {
        it("The number of played games should be zero", function () {
           var r=rockgame.getCount();
            assert.equal(0,r);
        });
    });
     describe("Check for win function", function () {
        it("Total number of games should be 1 now", function () {
            rockgame.displayRes("rock");
            assert.equal(1,rockgame.getCount());
        });
    });

});