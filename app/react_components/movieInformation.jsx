/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="movie__information">
        {this.props.data.year} - {this.props.data.genres.join(', ')}
        <p>{this.props.data.desc}</p>
      </div>
    );
  }
});