console.log("I'm working");

$(document).ready(function(){


// Functions

  var displayDishes = function(data) {
    console.log('displaying');
    data.forEach(function(dish) { // JS 5 forEach
      var $div = $('<div class="dish">')
      .append($('<img>').attr('src', dish.image_url))
      .append($('<p class="dish-name">').html(dish.name))
      .append($('<p class="dish-venue">').html(dish.venue))
      .append($('<p class="dish-stars">').html("Stars: " + dish.star_count))
      .append($('<i class="fa fa-star"></i>'));
      // $('#container').append($('<div>').attr('class', 'dish-div'));
      // $('#container').append($("<div class='dish-div'").html(dish.name));
      // $('#container').append($('<img>').attr('src', dish.image_url));
      $('#container').append($($div));
    });
  }


// Events

    $.getJSON('http://localhost:4567/dishes.json', displayDishes);

});
