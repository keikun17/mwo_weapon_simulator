$(document).ready(function(){
  Hello = React.createClass({
    render: function(){
      return (
        React.DOM.div({
          className: 'test',
          children: 'Reactor Online..'
        })
      )
    }
  });

  React.renderComponent(
    Hello({}), document.getElementById('content')
  );

})
