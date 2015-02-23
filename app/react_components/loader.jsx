/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="loader">
        <i className="fa fa-circle-o-notch fa-spin"></i>
      </div>
    );
  }
});