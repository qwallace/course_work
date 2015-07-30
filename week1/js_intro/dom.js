// DOM = Document object model

console.log("We're working on the DOM.")

var theSpecialOne = document.getElementById("theSpecialOne");

theSpecialOne.innerHTML = "Not so special after all.";

var winButton = document.getElementsByTagName("button")[0];

var doSomething = function() {
  console.log("Winning!");
}

winButton.addEventListener("click", doSomething);