
// Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).

// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.

console.log("Hello World");

var topSports = ["AFL", "football", "golf", "tennis", "cycling"];

// for (i = 0; i < topSports.length; i++) {
//   console.log("My #" + (i + 1) + " sport is " + topSports[i] + ".");
// }

for (i = 0; i < topSports.length; i++) {
  if (i === 0) {
    console.log("My " + (i + 1) + "st sport is " + topSports[i] + ".");
  } else if (i === 1) {
    console.log("My " + (i + 1) + "nd sport is " + topSports[i] + ".");
  } else if (i === 2) {
    console.log("My " + (i + 1) + "rd sport is " + topSports[i] + ".");
  } else {
    console.log("My " + (i + 1) + "th sport is " + topSports[i] + ".");
  }
}
