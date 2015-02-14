/** @jsx React.DOM */

var React         = require('react');
var MoviesWrapper = require('./react_components/movieWrapper.jsx')

module.exports = React.createClass({
  render: function () {
    return (
      <MoviesWrapper url="http://api.rickardlaurin.se/movies"/>
    );
  }
});
