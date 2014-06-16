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

  // Model
  var Weapon = Backbone.Model.extend({
    initialize: function(){
      console.log("Initializing weapon");
    }
  });

  var small_laser = new Weapon({
    name: "Small Laser",
    damage: "5",
    cooldown: "3",
    heat: "2",
    heatgroup: "lasers"
  });

  var medium_laser = new Weapon({
    name: "Medium Laser",
    damage: "5",
    cooldown: "3",
    heat: "2",
    heatgroup: "lasers"
  });

  var large_laser = new Weapon({
    name: "Large Laser",
    damage: "5",
    cooldown: "3",
    heat: "2",
    heatgroup: "lasers"
  });

  // Collection
  var weaponCollection = Backbone.Collection.extend({
    model: Weapon
  });

  var InnerSphereWeapons = new weaponCollection([small_laser, medium_laser, large_laser]);

  // Component
  var weaponComponent = react.createClass({
    handleClick: function(){
      alert('weapon clicked!');
    },
    render: function(){
      return(
        /** @jsx React.DOM */
        react.DOM.a({ href: '#', className: 'btn btn-primary', onClick: this.handleClick }, this.props.name)
        // <a href="#" onClick={this.handleClick}>Medium Laser</a>'
      )
    }
  });

  // View
  var weaponView = Backbone.View.extend({
    initialize: function(options){
      this.options = options || {};
      this.render();
    },

    render: function(){
      console.log("rendering weapon");
      console.log(this.$el)
      react.renderComponent(new weaponComponent({
        name: this.options.weapon_name,
        handleClick: this.clickHandler.bind(this)
      }),
      document.getElementById('weaponselect'));
      return this
    },
    clickHandler: function() {
      alert("Weapon click overridden by view");
    }

  })


  var medium_laser = new weaponView({weapon_name: 'Medium Laser'});
  medium_laser.render();

  // Always at the end
  Backbone.history.start();
})

