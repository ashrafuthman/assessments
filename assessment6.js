// Classes and Modules
// Define a JavaScript class for a Vehicle, and extend it with a Car class. The Car class should have a method to display its details.
// Instructions: Convert this prototype-based code into a class-based approach using ES6 classes.


// function Vehicle(make, model) {
//     this.make = make;
//     this.model = model;
//   }
  
//   Vehicle.prototype.display = function() {
//     console.log(this.make + " " + this.model);
//   };
  
//   function Car(make, model) {
//     Vehicle.call(this, make, model);
//   }
  
//   Car.prototype = Object.create(Vehicle.prototype);
//   Car.prototype.constructor = Car;
  
//   var myCar = new Car("Toyota", "Corolla");
//   myCar.display();

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
  
  Vehicle.prototype.display = function() {
    console.log(this.make + " " + this.model);
  };
  
  class Car extends Vehicle {
    constructor(make, model) {
      super(make, model);
    }
  }
  
  const myCar = new Car("Toyota", "Corolla");
  myCar.display();
  