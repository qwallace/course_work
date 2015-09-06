// var count = 0;
//
// var tick = function() {
//   count += 1;
//   console.log(count);
// }

// Without using global variable for count

// var ticker = function() {
//   var count = 0;
//   var innerTicker = function() {
//     count += 1;
//     return count;
//   }
//   innerTick();
// }
//
// var tick = ticker();


// Another exercise

var three_functions = [];

for (var i=0; i<3; i++) {

  var maker = function() {

    var j = i;

    var printIndex = function() {
      console.log(j);
    }
    return printIndex;
  }
  var theActualFunctionWeWant = maker();
  three_functions.push(theActualFunctionWeWant);
}

three_functions[0]();
three_functions[1]();
three_functions[2]();
