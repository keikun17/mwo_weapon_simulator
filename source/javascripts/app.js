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
    defaults: {
      name: 'WEAPON NAME',
      damage: 0,
      cooldown: 0,
      heat: 0,
      heatgroup: "HEAT GROUP"
    },
    initialize: function(){
      console.log("Initializing weapon");
    }
  });

  // Component
  var weaponComponent = react.createClass({

    handleClick: function(){
      alert('weapon clicked!');
    },

    render: function(){
      console.log("props are ");
      console.log(this.props);
      return(
        /** @jsx React.DOM */
        react.DOM.a({ href: '#', className: 'btn btn-primary', onClick: this.handleClick }, this.props.name)
        // <a href="#" onClick={this.handleClick}>Medium Laser</a>'
      )
    }

  });

  // View
  var WeaponView = Backbone.View.extend({
    initialize: function(){
      console.log("This model is");
      console.log(this.model);
      console.log("JSON of the model is");
      console.log(this.model.toJSON())
      this.render();
    },

    render: function(){
      console.log("rendering weapon");
      weapon_attrs = this.model.toJSON();
      react.renderComponent(new weaponComponent({
        name: weapon_attrs.name,
        handleClick: this.clickHandler.bind(this)
      }), document.getElementById('weaponselect'));
      return this
    },

    clickHandler: function() {
      alert("Weapon click overridden by view");
    }

  })


  // TODO: Should be rendered by a collectionview
  // var medium_laser_view = new weaponView({weapon_name: 'Medium Laser'});
  // var medium_laser_view = new weaponView({weapon_name: 'Medium Laser'});
  // var medium_laser_view = new weaponView({weapon_name: 'Medium Laser'});

  // Collection
  var EquippedWeaponsCollection = Backbone.Collection.extend({
    model: Weapon
  })

  // CollectionViews
  var EquippedWeaponsCollectionView = Backbone.View.extend({

    initialize: function(){
      console.log("The collection is");
      console.log(this.collection);

    },

    render: function(){
      // Should loop through all weapons in the collection and render them
      // on the equipped weapons container

      // so we don't lost context of the instance once we go to the loop
      this.collection.each(function(weapon){
        console.log('rendering weapon : ');
        console.log(weapon);

        var weaponView = new WeaponView({model: weapon})
      });
      return this
    }
  });

  var small_laser = {
    name: "Small Laser",
    damage: "5",
    cooldown: "3",
    heat: "2",
    heatgroup: "lasers"
  };

  var medium_laser = {
    name: "Medium Laser",
    damage: "5",
    cooldown: "3",
    heat: "2",
    heatgroup: "lasers"
  };

  var large_laser = {
    name: "Large Laser",
    damage: "5",
    cooldown: "3",
    heat: "2",
    heatgroup: "lasers"
  };

  console.log("initializing collection");
  var equippedWeaponsCollection = new EquippedWeaponsCollection([small_laser, medium_laser, large_laser]);

  console.log("pass collection to collection view");
  var equippedWeaponsCollectionView = new EquippedWeaponsCollectionView({collection: equippedWeaponsCollection})
  equippedWeaponsCollectionView.render();

  // Always at the end
  Backbone.history.start();
})

