
// Move the above code into a separate JS file!
// Add an event listener to the start button, so that the cat starts moving across the
// screen when its clicked.
// Add an event listener to the stop button, so that the cat stops moving when clicked.
// Add an event listener to the speed button, so that the cat moves faster when it's clicked. 
// When the cat reaches the edge of the screen, have her walk back to the start. Repeat forever.
// Make sure your code works even when the screen is resized (you will need to find the
// window width with Javascript.

window.onload = function() {

  console.log("We're moving cats");

  var startButton = document.getElementById("start-button");

  var stopButton = document.getElementById("stop-button");

  var resetButton = document.getElementById("reset-button");

  var speedButton = document.getElementById("speed-button");

  var slowButton = document.getElementById("slow-button");

  var movePixels = 10;
  var delayMs = 50;
  var catTimer = null;
  var goRight = true;

  function catWalk() {

  // Old code

  // var img = document.getElementsByTagName('img')[0];
  // var currentLeft = parseInt(img.style.left);
  // img.style.left = (currentLeft + movePixels) + 'px';
  // if (currentLeft > (window.innerWidth-img.width)) {
  //   img.style.left = '0px';
  // }


    var img = document.getElementsByTagName('img')[0];
    var currentLeft = parseInt(img.style.left);

    if (goRight) {
      img.style.left = (currentLeft + movePixels) + 'px';
    } else {
      img.style.left = (currentLeft - movePixels) + 'px';
    }

    if (goRight && currentLeft > window.innerWidth-img.width) {
      goRight = false;
      img.style.transform = "scaleX(-1)";
    } else if (goRight === false && currentLeft < 0){
      goRight = true;
      img.style.transform = "scaleX(1)";
    }

    // if (currentLeft > (window.innerWidth-img.width) && direction === "left") {
    //   img.style.left = (currentLeft - movePixels) + "px";
    //   direction = "right";
    // } else if (currentLeft === 0 && direction === "right") {
    //   img.style.left = (currentLeft + movePixels) + 'px';
    //   direction = "left";
    // } else {
    //   img.style.left = (currentLeft + movePixels) + "px";
    // }

    // some if and else if statements to 
    console.log("Walking cat");
  }

  function startCatWalk() {
    if (catTimer !== null) {
      return;
    }
    catTimer = window.setInterval(catWalk, delayMs);
  }

  function stopCatWalk() {
    clearInterval(catTimer);
    catTimer = null;
  }

  function resetCatWalk() {
    stopCatWalk();
    movePixels = 10;
    catTimer = null;
    goRight = true;
    var img = document.getElementsByTagName("img")[0];
    img.style.left = "0px";
    img.style.transform = "scaleX(1)";
  }

  function speedCat() {
    movePixels += 5;
  }

  function slowCat() {
    movePixels -= 5;
  }

startButton.addEventListener("click", startCatWalk);

stopButton.addEventListener("click", stopCatWalk);

resetButton.addEventListener("click", resetCatWalk);

speedButton.addEventListener("click", speedCat);

slowButton.addEventListener("click", slowCat);

}
