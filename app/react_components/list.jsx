/** @jsx React.DOM */

var React  = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <li>
        {this.props.item.name}
        <div className="list__subtitle">
          {this.props.item.movies} {this.props.type}
        </div>
        {this.props.children}
      </li>
    );
  }
});