// Configuration
require.config({
  paths: {
    "jquery": "./../components/jquery/dist/jquery",
    "react": "./../components/react/react",
    "underscore": "./../components/underscore/underscore"
  }
})


define(function(require){
  var
  // library deps
  $ = require('jquery'),
  _ = require('underscore'),
  react = require('react'),

  // initialize mech
  mech = require('./app/mech');

  mech.weapons.fire();
  window.mech = mech;


})

