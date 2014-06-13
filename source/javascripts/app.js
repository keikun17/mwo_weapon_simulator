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

  var app_router = new Router;

  app_router.on('route:goHome', function(){
    console.log("welcome");
  });

  Backbone.history.start();
})

