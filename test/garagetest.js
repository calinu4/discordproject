var assert = require('assert');
var Garage = require("../structures/Garage");
garage = new Garage();

describe("Garage Tests", function () {
    describe("Garage Open Function", function () {
        it("The number of cars after opening the Garage should be 4", function () {
            garage.openGarage();
            assert.equal(4, garage.returnCarsLength());
        });
    });

    describe("Garage CheckIn Function", function () {
        it("The number of cars after adding one car should be 5", function () {
            garage.checkIn("Citroen","GH17JKL","DS3",0,1,1);
            assert.equal(5, garage.returnCarsLength());
        });
    });
    
     describe("Garage Display Function", function () {
        it("The result should not be empty", function () {
            var s=garage.outputCars();
            assert.notEqual("",s);
        });
    });

    describe("Garage CheckOut Function", function () {
        it("The number of cars should be again 4 after removing GH17JKL", function () {
           garage.checkOut("GH17JKL");
            assert.equal(4,garage.returnCarsLength());
        });
    });

    describe("Garage Calculate Bill Function", function () {
        it("The bill for yf10rgh should be 50 £", function () {
           var b=garage.calculateBill("yf10rgh");
            assert.equal('50 £',b);
        });
    });

    describe("Garage Empty Function", function () {
        it("The number of cars should be zero", function () {
           garage.emptyList();
            assert.equal(0,garage.returnCarsLength());
        });
    });





});