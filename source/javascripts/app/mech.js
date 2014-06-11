define(function(require){
  var
  // 3rd party deps
  $ = require('jquery'),
  _ = require('underscore'),
  react = require('react'),


  mechBase = {
    weapons: require('./weapons')
  }

  return mechBase;
})


// $(document).ready(function(){
//   Hello = React.createClass({
//     render: function(){
//       return (
//         React.DOM.div({
//           className: 'test',
//           children: 'Reactor Online..'
//         })
//       )
//     }
//   });
//
//   React.renderComponent(
//     Hello({}), document.getElementById('content')
//   );
//
// })
