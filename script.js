function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed)   
 {
  // Call the Car constructor to inherit properties
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Set SportsCar prototype to inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset the constructor property (optional but recommended)
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar   
 = SportsCar;