console.log("We're doing query selector");

var Vii = {};

Vii.each = function(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

Vii.query = function(elem) {
  return document.querySelectorAll(elem);
}

// Vii.query("h3");
