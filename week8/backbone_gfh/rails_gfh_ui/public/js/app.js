var app = app || {};

console.log("I'm working");

app.dishes = new app.Dishes();
app.dishes.fetch();

var view = new app.DishListView({ collection: app.dishes });
view.render();

$('button').on('click', function(event) {
  event.preventDefault();
  var dishName = $('#input-dish-name').val();
  var dishUrl = $('#input-dish-url').val();

  var data = {
    dish: {
      name: dishName,
      image_url: dishUrl
    }
  }

  app.dishes.create(data);
  $('#input-dish-name').val('');
  $('#input-dish-url').val('');
});

app.router = new app.Router();
Backbone.history.start();
