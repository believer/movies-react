/** @jsx React.DOM */

var React = require('react');
window.React = React; 

var Movies = require('./app.jsx');
React.render(<Movies/>, document.body);