define(function(require){
  var
  $ = require('jquery'),
  _ = require('underscore'),
  React = require('react'),
  Backbone = require('backbone'),
  EquippedWeaponListView = require('views/equipped_weapons/list');

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'showMech',
    }
  })

  var initialize = function(){
    var app_router = new AppRouter;

    app_router.on('route:showMech', function(){
      console.log('on showMech');
      var equipped_weapon_list_view = new EquippedWeaponListView;
      equipped_weapon_list_view.render();
    });

    app_router.on('defaultAction', function(action){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });

    Backbone.history.start();
  }

  return {initialize: initialize};
})

