define(function(require){
  var
  $ = require('jquery'),
  _ = require('underscore'),
  React = require('react'),
  Backbone = require('backbone');

  var EquippedWeaponListView = Backbone.View.extend({
    initialize: function(){
    },

    render: function(){
      console.log("Render collection")
    }
  })

  return EquippedWeaponListView

})
