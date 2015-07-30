
// Age Calculator

var currentYear = 2015;

var birthYear = 1980;

var age1 = currentYear - birthYear;

var age2 = currentYear - (birthYear + 1);

console.log("They are either " + age1 + " or " + age2 + ".");

// Lifetime Supply Calculator

var currentAge = 35;

var maxAge = 100;

var snackNum = 2;

var howManySnacks = ((maxAge - currentAge) * snackNum) * 365;

console.log("You will need " + howManySnacks + " coffees to last you until the ripe old age of " + maxAge + ".");

// The Geometrizer

var radius = 10;

var diameter = radius * 2;

var calcCirc = diameter * Math.PI;

var calcArea = Math.PI * (radius * radius);

console.log("The circumference is " + calcCirc + "cm");

console.log("The area is " + calcArea + "cm");

// Temperature Converter

var tempC = prompt("Enter a temp that is in C.");

var tempF = prompt("Enter a temp that is in F.")

var calcCtoF = (tempC * 9) / 5 + 32;

var calcFtoC = (tempF - 32) * 5 / 9;

console.log(tempC + "C is " + calcCtoF + "F");

console.log(tempF + "F is " + calcFtoC + "C");


