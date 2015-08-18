console.log("I'm working");

$(document).ready(function(){

// *** Functions ***

// Function to display all dishes on load

  var displayDishes = function(data) {
    console.log('displaying');
    data.forEach(function(dish) { // JS 5 forEach
      // var id = dish.id;
      // var star_count = $.ajax({
      //   url: 'http://localhost:3000/star_count/' + id,
      //   type: 'get'});
      var $div = $('<div class="dish">')
      .attr('data-id', dish.id)
      .append($('<img>').attr('src', dish.image_url))
      .append($('<p class="dish-name">').html(dish.name))
      .append($('<p class="dish-venue">').html(dish.venue))
      .append($('<p class="dish-stars">').html("Stars: " + dish.star_count))
      .append($('<i class="fa fa-star"></i>'));
      $('#container').append($($div));
    });
  }




// *** Events ***

// API call to get all dishes on load

  $.ajax({
    url: 'http://localhost:3000/dishes.json',
    type: 'get'
  }).done(displayDishes).fail(function(){
    console.log('Dishes failed to load');
  });

// API call to add a star to a dish

  $('#container').on('click', 'i', function(event) {
    console.log('This is this:', this);
    event.stopPropagation();
    var id = $(this).closest('.dish').data('id');
    $.ajax({
      url: 'http://localhost:3000/stars',
      type: 'post',
      data: { "star": { "dish_id": id } },
      context: this
    }).done(function(response) {
      console.log(response.star_count);
      $(this).closest('.dish').find('.dish-stars').html('Stars: ' + response.star_count);

    });
  });

});
