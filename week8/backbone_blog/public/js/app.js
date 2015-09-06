

var HomeView = Backbone.View.extend({

  render: function() {
    var source = $('#home-template').html();
    var template = Handlebars.compile(source);
    var html = template();
    this.$el.html(html);
    $('main').html(this.el);
    return this;
  }

});

var AboutView = Backbone.View.extend({

  render: function() {
    var source = $('#about-template').html();
    var template = Handlebars.compile(source);
    var html = template();
    this.$el.html(html);
    $('main').html(this.el);
    return this;
  }

});

var ContactView = Backbone.View.extend({

  render: function() {
    var source = $('#contact-template').html();
    var template = Handlebars.compile(source);
    var html = template();
    this.$el.html(html);
    $('main').html(this.el);
    return this;
  }

});

var Router = Backbone.Router.extend({

  routes: {
    "home": "goHome",
    "about": "goAbout",
    "contact": "goContact"
  },

  goHome: function() {
    var view = new HomeView();
    view.render();

  },

  goAbout: function() {
    var view = new AboutView();
    view.render();
  },

  goContact: function() {
    var view = new ContactView();
    view.render();
  }

});

var router = new Router();
Backbone.history.start();

// var homeView = new HomeView();
// homeView.render();
