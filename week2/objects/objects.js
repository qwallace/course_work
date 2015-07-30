
console.log("We're doing objects in JS");

var accounts = {
  checking: {
    balance: 0,
    deposit: function(amount) {
      console.log("Depositing Money");
      accounts.checking.balance += amount;
    },
    withdraw: function(amount) {
      if (amount <= accounts.checking.balance) {
        accounts.checking.balance -= amount;
        return true;
      } else {
        // not enough, hack
        return false;
      }
    }
  }
}


//==============================================

function renderBalance() {
  // redraw balance on the webpage
}

var checkingDepositButton = document.getElementById(" ");

// Can be done like this (below) but better to define function outside
// so you can stop it if you need to

// checkingDepositButton.addEventListener("click", function() {

  // code })

var performDeposit = function() {
  var depositInput = document.getElementById(" ");
  var depositAmount = parseFloat(depositInput.value, 10);

  accounts.checking.deposit(depositAmount);
  renderBalance();
}

checkingDepositButton.addEventListener("click", performDeposit);

