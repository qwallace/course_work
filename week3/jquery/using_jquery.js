

$('#new-todo').on('click', function() {
  
  var userInput = $('#new-todo-input');
  var inputValue = userInput.val();

  // var newListItem = $("<li>" + userInput + "</li>");

  var newListItem = $('<li>').html(inputValue);

  console.log(newListItem);

  $("#todos").append(newListItem);

  userInput.val('');

});

$('#todos').on('click', 'li', function() {

  // magic variable
  // $(this).addClass('done');

  // $(event.target).addClass('done');

  // or $(event.target).toggleClass('done');

  var content = event.target.innerHTML;

  if ( $(event.target).hasClass('done') ) {
    $(event.target).removeClass('done');

    // using underscore
    _.each( $('#completed li'), function(element) {
      console.log(element);
      if (element.innerHTML === content) {
        $(element).remove();
      }
    });

  } else {
    $(event.target).addClass('done');

    var completedValue = $(event.target).val();
    var newCompletedItem = $('<li>').html(content);
    $('#completed').append(newCompletedItem);
  }

});