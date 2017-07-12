var assert = require('assert');
var Pokemon = require("../structures/Pokemon");
pokemon = new Pokemon();

describe("Pokemon Tests", function () {
    describe("Calculator Function", function () {
        it("Normal against Fire should return 1", function () {
            var res=pokemon.displayRes("normal","fire");
            assert.equal(1,res);
        });
    });

    describe("Calculator Function", function () {
        it("Water against ice should be 0.5", function () {
            var res=pokemon.displayRes("water","ice");
            assert.equal(0.5, res);
        });
    });

     describe("Calculator Function", function () {
        it("Grass against poison should be 0.5", function () {
            var res=pokemon.displayRes("grass","poison");
            assert.equal(2, res);
        });
    });
    
     
    




});