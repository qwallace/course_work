var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    "": "home",
    "dish/:id": "show"
  },

  home: function() {
    var view = new app.DishListView({ collection: app.dishes });
    view.render();

  },

  show: function(id) {
    var dish = app.dishes.get(id);
    var view = new app.DishView({ model: dish });
    $('#container').html(view.render().el);

  }

});
