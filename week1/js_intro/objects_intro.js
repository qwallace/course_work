console.log("We're working on objects.");

// var object {
//   key1: value1,
//   key2: value2
// };

// Arbitrary order. No ordering.

// function accelerate() {

// }

var car = {
  colour: "black",
  make: "Ford",
  engine: "v8",
  speed: 0,
  accelerate: function() {
    console.log("We're going faster!");
  }
};

// for (var key in car) {
//   console.log('Yes');
// }

// Neve use below for array only objects!

for (var key in car) {
  console.log(key + ": " +car[key]);
}

