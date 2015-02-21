/** @jsx React.DOM */

var React  = require('react');
var List = require('./list.jsx')

module.exports = React.createClass({
  cleanName: function (name) {
    return name.replace(/\_/g,' ');
  },
  render: function () {
    var self = this;

    var numbers = Object.keys(this.props.numbers).map(function (number, i) {
      return (
        <List item={self.props.numbers} key={i}>
          {self.props.numbers[number]}
          <div className="list__subtitle">{self.cleanName(number)}</div>
        </List>
      );
    });

    return (
      <div className="totals">
        <div className="inner">
          <div className="left text--center">
            <div className="totals__huge">{this.props.total}</div>
            <div className="totals__big">movies</div>
          </div>
          <div className="right">
            <ul className="totals__list">
              {numbers}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});