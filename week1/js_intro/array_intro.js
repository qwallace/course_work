console.log("hello world");

var languages = ["JavaScript", "Ruby", "Swift", "Python"];

// or another way to declare an array
// var languages = new Array();

// while (i = 0; i < languages.length; i++) {
//   console.log(languages[i]);
// }

languages.splice(2, 1, "Objective C");

console.log(languages);

languages.splice(2, 1);

console.log(languages);

languages.splice(2, 0, "Swift");

console.log(languages);

// shift() and unshift()
// shift removes first item from array and returns shortened array
// unshift add item to front of arry and returnes longer array

// sort()
// sorts array by alpha or numerical order

// indexOf()
// gives you idex of an item in an array

// slice()
// chops up array and gives you everything on right of index position you choose. can pass 2 index numbers
// and it will take everything right of first index (including that index) and everything to lef of second
// index (not including that index).

// join
// puts all the elements of an array into a string. returns single string with commas between elements.

// pop()
// no index, it will remove the last

// push()
// no index, it will add to last
