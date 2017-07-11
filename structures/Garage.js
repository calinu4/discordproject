const cars = [];
class Garage {
  constructor() {
    
  }

openGarage(){
  this.checkIn("Audi", "yf10rgh", "A6", 0, 1, 1);
    this.checkIn("Bmw", "rf11rth", "5 series", 1, 0, 1);
    this.checkIn("Mercedes", "yf14rgj", "E class", 0, 2, 1);
    this.checkIn("Vauxhall", "yf15rgf", "Insignia", 1, 3, 1);
}


  checkIn(m, r, m1, sf, mf, lf) {
    cars[cars.length] = { make: m, reg: r, model: m1, smallfaults: sf, mediumfaults: mf, largefaults: lf };
    console.log("New car added: " + m + " " + m1);
  }


  checkOut(id) {

    for (var i = 0; i < cars.length; i++) {

      if (id === cars[i].reg) {

        cars.splice(i, 1);
      }
    }

  }

  outputCars() {
    var s = ""
    for (var i = 0; i < cars.length; i++) {
       s=s+cars[i].make+", "+cars[i].model+", "+cars[i].reg+"\n";
    }
    if(s=="")
    return "No cars in the garage!"
    else
    return s;
  }

  calculateBill(registration) {
    var total=0;
    for (var i = 0; i < cars.length; i++) {

      if (registration === cars[i].reg) {
         total = cars[i].smallfaults * 10 + cars[i].mediumfaults * 20 + cars[i].largefaults * 30;
        
        break;
      }
    }
    return total+" £";
    //return "No car found!";
  }

  emptyList() {

    cars.splice(0, cars.length);
  }

}
module.exports = Garage;
