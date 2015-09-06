console.log(process.argv);

// var int1 = parseInt(process.argv[2], 10);
//
// var int2 = parseInt(process.argv[3], 10);
//
// console.log(int1 + int2);

// parseInt, Number(), unary +

var total = 0;

for (var i = 2; i < process.argv.length; i++) {
  total += parseInt(process.argv[i], 10);
}

console.log(total);
