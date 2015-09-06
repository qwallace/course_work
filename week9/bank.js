
// function carMaker(speed) {
//   var speed = speed;
//
//   var publicInterface = {
//     accelerate: function() {
//       speed += 10;
//     },
//     setSpeed: function(speed) {
//       speed = speed;
//     }
//   }
//   return publicInterface;
// }
//
// var car = carMaker();
// var car2 = carMaker();
// car.accelerate();


// var savingsAccount = accountMaker();
// var checkingAccount = accountMaker();
//
// savingsAccount.deposit(20);
// savingsAccount.deposit(10);
// savingsAccount.getBalance();  // 30

// function accountMaker(amount) {
//
//   var balance = amount;
//
//   function getBalance() {
//     console.log(balance);
//   }
//
//   function deposit(amount) {
//     balance += amount;
//   }
//
//   return {
//     getBalance: getBalance,
//     deposit: deposit
//   };
// }
//
// var a1 = accountMaker(500);
//
// a1.getBalance();
// a1.deposit(20);
// a1.getBalance();

// Alternative structure

function accountMaker(amount) {
  var balance = amount;
  return {
    getBalance: function() {
      console.log(balance);
    },
    deposit: function(amount) {
      balance += amount;
    }
  }
}

var a1 = accountMaker(500);

a1.getBalance();
a1.deposit(20);
a1.getBalance();
