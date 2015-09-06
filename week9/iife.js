
// iife - immediately invoked function expression

// makes function private so variable etc only available within function
// more private than closure as nothing outside the function

(function() {
  var a;
  var my_name = 'dt';
  window.string = 'foo'; // exposes it to outside the function
})();
