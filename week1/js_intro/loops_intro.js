console.log("I'm working.");

// while loop

// var counter = 0;

// // while (counter <= 5) {
// //   console.log("The value of counter is " + counter);
// //   debugger;
// //   counter++;
// // }

// // console.log("Loop done.");

// counter = 1;

// var maxValue = 20;

// while (counter <= maxValue) {
//   if (counter % 3 === 0 && counter % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (counter % 3 === 0) {
//     console.log("fizz");
//   } else if (counter % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(counter);
//   } counter++;
// }

// var secretNum = 42;

// var getNum = prompt("Please enter a number."); // Everything you get from the user is a string.

// while (parseInt(getNum, 10) !== secretNum) {
//   console.log("Please guess again.");
//   getNum = prompt("Please enter a number.");
// }

// console.log("Go viiminds!");

var instruments = ['piano', 'guitar', 'violin'];

var count = 0;

while (count < instruments.length) {
  console.log(instruments[count]);
  count++;
}

// for loop

for (var i = 0; i < instruments.length; i++) {
  console.log("The number " + i + " is " + instruments[i] + ".")
}






















