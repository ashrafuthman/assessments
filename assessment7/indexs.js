// object literal syntax
// Create an object representing a circle with properties for radius and location, and a method to draw
const circle = {
  radius: 5,
  location: {
    x: 1,
    y: 2 
  },
  draw: function() {
    console.log('draw');
  }
};

// Factory function to create a circle object
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw2');
    }
  };
}
const circle1 = createCircle(1);
circle1.draw();


// Define a constructor function for creating circle objects
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw3');
  };
}
const circle2 = new Circle(1);
circle2.draw();