var app = app || {};


app.DishView = Backbone.View.extend({

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

    $.ajax({
      url: 'http://localhost:3000/stars',
      type: 'post',
      data: { star: { dish_id: this.model.id } },
      context: this
    }).done(function(response) {
      this.model.set('star_count', response.star_count);
    });

  },

  render: function() {
    var source = $('#dish-view-template').html();
    var template = Handlebars.compile(source);
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this; // so we can use .render()
  }

});
