// Configuration
require.config({
  // CBust cache for every reload
  // TODO : bust cache only for local/development
  urlArgs: "bust=" + (new Date()).getTime(),
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
        /** @jsx React.DOM */
        react.DOM.a({href: '#', className: 'btn btn-primary'}, this.props.name)
        // <a href="#" onClick={this.handleClick}>Medium Laser</a>'
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
      react.renderComponent(new weaponComponent({name: "Medium Laser"}), document.getElementById('weaponselect'));
      return this
    }
  })

  var medium_laser = new weaponView({el: '#equipped-weapons'});
  medium_laser.render();

  // Always at the end
  Backbone.history.start();
})

