define(function(require){
  var
  // 3rd party deps
  $ = require('jquery'),
  _ = require('underscore'),
  react = require('react'),


  mechbase = {
    fire: function(){
      console.log("fzzzzz..");
    }
  }

  return mechbase;
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
