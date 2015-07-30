console.log("We're learning about scope.");


// Global scope so not secret because defined outside a function.
var secretPlan = "rob the bank";

// Private scope. Created within a function.
// var bubble = function() {
//   var x = 2;
// }

// Calling x below will not work because it was defined within a function.

// console.log(x);

function outer() {
  var visibleToInner = 1;

  function inner() {
    var hiddenFromOuter = 2;
    console.log();
  }
}

var x = 3;

function getx() {
  var x = 4; // if x = 4 it would change the var defined outside the function
  console.log(x);
}

console.log(x); // x = 3

var x = 5; // Resets x = 5

console.log(x); // x = 5

var y = 1; // declared globally

modify();

var expectedUnmodified = function() { // This is a function expression. It cannot be called before being declared.
  return y === 1;
}

console.log(expectedUnmodified());

function modify() { // This is a function declaration. It can be called before being declared.
  y++;
}



