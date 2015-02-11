/** @jsx React.DOM */

var React = require('react');
var Movie = require('./movie.jsx');

module.exports = React.createClass({
  render: function () {
    var movies = this.props.data.map(function (movie) {
      return (
        <Movie data={movie}>
          {movie.desc}
        </Movie>
      );
    });
    return (
      <div className="movies__list">
        {movies}
      </div>
    );
  }
});