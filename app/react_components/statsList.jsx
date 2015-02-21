/** @jsx React.DOM */

var React  = require('react');
var List = require('./list.jsx')

module.exports = React.createClass({
  render: function () {
    var self = this;

    var items = this.props.items.map(function (item, i) {
      return (
        <List key={i} item={item} type={self.props.type}></List>
      );
    });

    return (
      <div className="list">
        <h3>{this.props.title}</h3>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});