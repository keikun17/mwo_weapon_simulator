define(function(require){
  var
  //library deps
  $ = require('jquery'),
  _ = require('underscore'),
  React = require('react'),
  backbone = require('backbone'),
  Router = require('router');

  var AppRouter = Backbone.Router.extend({
    routes: {
      '/': 'showMech'
    }
  })

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('showMech', function(){
      var equipped_weapon_list_view = new EquippedWeaponListView;
      equipped_weapon_list_view.render();
    });
  }

})

