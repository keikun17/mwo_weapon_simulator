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

// Load the application
require([
  // Load app module and passit to our definition function
  // 'requiring 'app' loads the 'app.js' in the relative location
  'app',
], function(App){
  App.initialize();
})
