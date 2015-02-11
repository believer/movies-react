/** @jsx React.DOM */

var React = require('react');
var addons = require('react-addons');

module.exports = React.createClass({
  render: function() {
    var cx = addons.classSet;
    var classes = cx({
      'movie__poster': true,
      'hidden': !this.props.data.poster
    });

    var image = 'http://image.tmdb.org/t/p/w500' + this.props.data.poster;

    return (
      <div className="movie">
        <h2 className="movie__title">
          {this.props.data.title}
        </h2>
        {this.props.data.year} - {this.props.data.genres.join(', ')}
        <p>{this.props.children}</p>
      </div>
    );
  }
});