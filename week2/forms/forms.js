
window.onload = function() {

  console.log("We're doing forms!");

  var title = document.getElementsByTagName("h1")[0];

  console.log(title.innerHTML);

  var submitButton = document.getElementsByTagName("button")[0];

  submitButton.onclick = function(event) {
    event.preventDefault();
    console.log(event);
    console.log("Has been submitted.");

    var queryInput = document.getElementById("query");
    console.log(queryInput.value);

    var h2 = document.createElement("h2"); // builds the <h2>
    var headingText = document.createTextNode(queryInput.value); // Gets text to put in h2
    h2.appendChild(headingText); // Appends/injects the text into the h2

    // document.body.appendChild(h2); // Appends the h2 (with text inside) to page/body.

    var testDiv = document.getElementById("testDiv"); // search and define testDiv

    testDiv.appendChild(h2); // Appends the h2 (with text inside) to the testDiv div.

  }

  // Use below instead of .onclick except for IE 7.
  // .onclick can't be used on multiple functions.
  // submitButton.addEventListener("click", function() {
  //  function code
  //});

// or

// submitButton.addEventListener("clic", functionName);




}
