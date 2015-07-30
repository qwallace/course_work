console.log("We're doing jQuery");

var completeItem = document.getElementById("todos").getElementsByTagName("li");

var completedList = document.getElementById("completed");

var todosList = document.getElementById("todos");

var completedItems = completedList.getElementsByTagName("li");

var counter = [0];

var toggleComplete = function(event) {
  console.log(event.target.innerHTML);

  if (ev.target.tagName === 'LI') {

  if (event.target.className === "done") {
    event.target.className = "";

    for (var i = 0; i < completedItems.length; i++) {
      if (completedItems[i].innerHTML === event.target.innerHTML) {
        completedList.removeChild(completedItems[i]);
      }
    }
    // var oldItem = document.createElement('li');
    // var oldContentNode = document.createTextNode(event.target.innerHTML);
    // oldItem.appendChild(oldContentNode);

    // todosList.appendChild(oldItem);

  } else {

  event.target.className = "done";

  var newItem = document.createElement('li'); // creates <li></li> to append
  var contentNode = document.createTextNode(event.target.innerHTML); // gets text to add to <li>
  newItem.appendChild(contentNode); // adds text to inside of <li></li> eg <li>text</li>

  completedList.appendChild(newItem); // appends <li>text</li> to completedList

  }

}

// for (var i = 0; i < completeItem.length; i++) {
//   completeItem[i].addEventListener("click", toggleComplete);
// }

//response.innerHTML = "Heating";

completedList.addEventListener("click", toggleComplete);

var newTodoBtn = document.getElementById("new-todo");

newTodoBtn.addEventListener("click", function() {
  var userInput = document.getElementById('new-todo-input').value;

  var newListItem = document.createElement('li');
  newListItem.appendChild(document.createTextNode(userInput));
  todosList.appendChild(newListItem);
});