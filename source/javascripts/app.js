define(function(require){
  var
  // library deps
  $ = require('jquery'),
  _ = require('underscore'),
  React = require('react'),
  Backbone = require('backbone'),
  Router = require('router')

  var initialize = function(){
    console.log("output here");
    Router.initialize();
  }

  return {initialize: initialize}
})
