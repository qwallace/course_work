
console.log("We're doing our for each");

var util = {

  myForEach: function(arrayToUse, functionToUse) {
     for (var i = 0; i < arrayToUse.length; i++) 
    functionToUse(arrayToUse[i]);
  },

  myForKey: function(objectToUse, functionToUse) {
    for (var key in objectToUse) {
      functionToUse(objectToUse[key]);
    }
  }

}

var food = ['cupcakes', 'muffins', 'gumballs', 'cookies'];

var foods = {cake: "chocolate", meat: "chicken", drink: "milk"}

var callback = function(elem) {
  console.log(elem);
}

// Now put in the util object

// var myForEach = function(arrayToUse, functionToUse) {

//   for (var i = 0; i < arrayToUse.length; i++) {
//     functionToUse(arrayToUse[i]);
//   }

// }

util.myForEach(food, callback);

util.myForKey(foods, callback);

var mySample = function(arrayToUse) {
  var i = Math.floor(Math.random() * arrayToUse.length);
  console.log(arrayToUse[i]);
  return arrayToUse[i];
}

// mySample(food);

var multi = [];

var mySampleMulti = function(arrayToUse, num) {
  //var multi = [];
  for (var i = 0; i < num; i++) {
    var j = Math.floor(Math.random() * arrayToUse.length);
    console.log(arrayToUse[j]);
    multi.push(arrayToUse[j]);
    //return arrayToUse[j]; // push to array
  }
}

mySampleMulti(food, 3);