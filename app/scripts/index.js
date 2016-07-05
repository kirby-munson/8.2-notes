var React = require('react');
var ReactDOM = require('react-dom');

var AppComponent = require('./components/app.jsx');

ReactDOM.render(
  React.createElement(AppComponent),
  document.getElementById('container')
);
