
window.onload = function() {

  console.log("Welcome to Valley Bank");

  var savWithdrawButton = document.getElementById("savWithdraw");

  var checkWithdrawButton = document.getElementById("checkWithdraw");

  var savDepositButton = document.getElementById("savDeposit");

  var checkDepositButton = document.getElementById("checkDeposit");

  var savingsInput = document.getElementById("savings");

  var checkingInput = document.getElementById("checking");

  var savingsTotal = 0;

  var checkingTotal = 0;

  var savingsBalance = document.getElementById("savingsBalance");

  var checkingBalance = document.getElementById("checkingBalance");


  var withdrawSavings = function() {
    event.preventDefault();
    savingsTotal -= parseInt(savingsInput.value);
    savingsBalance.innerHTML = "$" + savingsTotal + ".00";
    console.log(savingsTotal);

  }

  var withdrawChecking = function() {
    event.preventDefault();
    checkingTotal -= parseInt(checkingInput.value);
    console.log(checkingTotal);

  }

  var depositSavings = function() {
    event.preventDefault();
    var savingsInput
  }

  var clickWithdraw = function() {
    event.preventDefault();
    console.log("Withdraw!");
  }

  savWithdrawButton.addEventListener("click", withdrawSavings);

  checkWithdrawButton.addEventListener("click", withdrawChecking);






  
}


