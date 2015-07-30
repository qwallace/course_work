console.log("Working on nested loops.");

// Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration
// of the for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier
// from 1 to 10 (100 results total).

for (var i = 0; i <= 10; i++) {
  console.log(i + " * 9 = " + i * 9);
}

// Bonus exercise

for (var i = 0; i <= 10; i++) {
  for (var j = 0; j <= 10; j++) {
  console.log(i + " * " + j + " = " + i * j);
  }
}

// The Grade Assigner

// Write a function named assignGrade that:

// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".

// Call that function for a few different scores and log the result to make sure it works.

// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value
// from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

var scores = ["A", "B", "C", "D", "F"];

var assignGrade = function(score) {
  var grade;
  if (score >= 90 && score <= 100) {
    // grade = scores[0];
    return console.log("For " + score + ", you got an " + scores[0]);
  } else if (score >= 80 && score <= 89) {
    grade = scores[1];
  } else if (score >= 70 && score <= 79) {
    grade = scores[2];
  } else if (score >= 60 && score <= 69) {
    grade = scores[3];
  } else {
    grade = scores[4];
  }
  console.log("For " + score + ", you got a " + grade + ".");
}

assignGrade(91);
assignGrade(81);
assignGrade(71);
assignGrade(61);
assignGrade(51);

// Grade Assigner DT example

var assignGrade = function(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 60) {
    return "D";
  } else {
    return "F";
  }
}

var testScore = 0;

while (testScore <= 100) {
  console.log(testScore, assignGrade(testScore));
  testScore +=1;
}

// Nested loops

// Times table example

for (var i = 0; i <= 10; i++) {
  console.log("i: ", i); // passing actual value
  for (var j = 0; j <= 10; j++) {
  console.log(i + " * " + j + " = " + i * j);
  }
}

