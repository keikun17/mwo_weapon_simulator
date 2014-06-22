define(function(require){
  var
  // library deps
  $ = require('jquery'),
  _ = require('underscore'),
  React = require('react'),
  backbone = require('backbone'),
  Router = require('router')

  var App = {};

  App.initialize = function(){
    console.log("output here");
    Router.initialize();

  }

  return App
})
