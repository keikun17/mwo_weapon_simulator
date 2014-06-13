// Configuration
require.config({
  paths: {
    "jquery": "./../components/jquery/dist/jquery",
    "react": "./../components/react/react",
    "underscore": "./../components/underscore/underscore",
    "backbone": "./../components/backbone/backbone"
  },
  shims: {
    "backbone": {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    "jquery": {
      "exports": "$"
    },
    "underscore": {
      "exports": "_"
    }
  }
});


define(function(require){
  var
  // library deps
  $ = require('jquery'),
  _ = require('underscore'),
  react = require('react'),
  backbone = require('backbone')

  // initialize mech
  mech = require('./app/mech');

  mech.weapons.fire();
  window.mech = mech;

  var Router = Backbone.Router.extend({
    routes: {
      "": "goHome"
    }
  });

  // Router

  var app_router = new Router;

  app_router.on('route:goHome', function(){
    console.log("welcome");
  });


  // Component
  var weaponComponent = react.createClass({
    handleClick: function(){
      alert('weapon clicked!');
    },
    render: function(){
      return(
        // <a href="#" onClick={this.handleClick}>Medium Laser</a>'
        react.DOM.a({href: '#'}, "Medium Las")
      )
    }
  });

  // View
  var weaponView = Backbone.View.extend({
    initialize: function(){
      this.render();
    },

    render: function(){
      console.log("rendering weapon");
      console.log(this.$el)
      return this
    }
  })

  var medium_laser = new weaponView({el: '#equipped-weapons'});
  medium_laser.render();

  // Always at the end
  Backbone.history.start();
})

