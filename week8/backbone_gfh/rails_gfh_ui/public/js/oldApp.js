console.log("I'm working");

// Notes - model = single viewn (ie Dish), collection = group of views (ie Dishes)

var DishItemView = Backbone.View.extend({

  tagName: 'div', // optional because default is <div>
  className: 'dish',

  events: {
    "click .fa-star": "incrementStarCount"
  },

  initialize: function() {
    // if model changes redraw my component
    this.listenTo(this.model, 'change', this.render);

  },

  incrementStarCount: function() {

    // console.log("Clicking star");
    // var id = this.model.id;
    // console.log(id);
    $.ajax({
      url: 'http://localhost:3000/stars',
      type: 'post',
    //   //data: { star: { dish_id: this.model.id } },
    //   // data: { "star": { "dish_id": id }},
      data: { star: { dish_id: this.model.id } },
      context: this
    }).done(function(response) {
      this.model.set('star_count', response.star_count);
    //   console.log(response.star_count);
    //   console.log(this.$el);
    //   this.$el.find('.dish-stars').html('Stars: ' + response.star_count);
    //   //$(this).closest('.dish').find('.dish-stars').html('Stars: ' + response.star_count);
    });

  },

  render: function() {
    var source = $('#dish-item-template').html();
    var template = Handlebars.compile(source);
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this; // so we can use .render() in line 37

    // Moved this and changed into html
    // var $div = $('<div class="dish">')
    // .append($('<img>').attr('src', "#"))
    // .append($('<p class="dish-name">').html("Dish name"))
    // .append($('<p class="dish-venue">').html("Venue name"))
    // .append($('<p class="dish-stars">').html("Stars: "))
    // .append($('<i class="fa fa-star"></i>'));

    // this.$el.html($div.html());


  }

});

var DishListView = Backbone.View.extend({

  el: '#container',

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.empty(); // empty before append, come back to this
    this.collection.each(function(dish) {
      var view = new DishItemView({ model: dish });
      this.$el.append(view.render().el);
    }, this );
    // var dishModel = new Dish({ name: 'Bacon bacon' });
    // var view = new DishItemView({ model: dishModel });
    // this.$el.html(view.render().el);
  }
  // Not required now - for later when optimising
  // addDish: function(dish) {
  //   var view = new DishItemView({ model: dish });
  //   this.$el.append(view.render().el);
  // }

});

var Dish = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/dishes'
});

var Dishes = Backbone.Collection.extend({
  model: Dish,
  url: 'http://localhost:3000/dishes'
});

var dishes = new Dishes();
dishes.fetch();
var view = new DishListView({ collection: dishes });
view.render();

// dishes.fetch().done(function() {
//   dishes.each(function(dish) {
//     console.log(dish.get('name'));
//     var view = new DishItemView({ model: dish });
//     $('#container').append(view.render().el);
//   });
// });

$('button').on('click', function(event) {
  event.preventDefault();
  //console.log("Button clicked");
  //console.log(event);
  var dishName = $('#input-dish-name').val();
  var dishUrl = $('#input-dish-url').val();

  var data = {
    dish: {
      name: dishName,
      image_url: dishUrl
    }
  }

  // dishes.create(data);
});



  // Below being replaced by above

  // $('button').on('click', function(event) {
  //   event.preventDefault();
  //   //console.log("Button clicked");
  //   //console.log(event);
  //   var dishName = $('#input-dish-name').val();
  //   var dishUrl = $('#input-dish-url').val();
  //   //console.log('Name: ' + dishName + ' Url: ' + dishUrl);
  //   $.ajax({
  //     url: 'http://localhost:3000/dishes',
  //     type: 'post',
  //     data: { dish: { name: dishName, image_url: dishUrl } },
  //     context: this
  //   }).done(function(response) {
  //     var dishModel = new Dish(response);
  //     var view = new DishItemView({ model: dishModel });
  //     $('#container').append(view.render().el);
  //   });
  // });

// Not needed due to 63 - 80
  // $.ajax({
  //   url: 'http://localhost:3000/dishes',
  //   type: 'get'
  // }).done(function(dishes){
  //   dishes.forEach(function(dish){
  //     var dishModel = new Dish(dish);
  //     var view = new DishItemView({ model: dishModel });
  //     $('#container').append(view.render().el);
  //   })
  // });


/* Old code before using Backbone

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

*/
