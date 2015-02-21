/** @jsx React.DOM */

var React  = require('react');

module.exports = React.createClass({
  render: function () {
    var base = this.props.data.adjustedMinutes / (60 * 24)
    var days = parseInt(base, 10);
    var hours = parseInt(base % 1 * 24, 10);
    var minutes = parseInt((base % 1 * 24) % 1 * 60, 10);

    return (
      <div className="time">
        <div className="time__box">
          <ul className="time__list">
            <li>{days} days</li>
            <li>{hours} {hours === 1 ? 'hour' : 'hours'}</li>
            <li>{minutes} {minutes === 1 ? 'minute' : 'minutes'}</li>
          </ul>
          <div className="time__subtime">... or {this.props.data.adjustedMinutes} minutes with rewatches</div>
        </div>
      </div>
    );
  }
});