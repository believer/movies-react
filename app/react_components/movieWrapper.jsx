/** @jsx React.DOM */

var React     = require('react');
var StatsList = require('./statsList.jsx');
var Time      = require('./time.jsx');
var Totals    = require('./totals.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: {
        actors: [],
        directors: [],
        composers: [],
        genres: [],
        production_companies: [],
        languages: [],
        time: {
          adjustedMinutes: 0
        },
        numbers: {}
      }
    };
  },
  componentWillMount: function() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', this.props.url, true);
    xhr.onload = function() {
      var result = JSON.parse(xhr.responseText);
      this.setState({ data: result });
    }.bind(this);
    xhr.send();
  },
  cleanAndCapitalize: function (name) {
    name = name.replace(/\_/g,' ');
    return name.charAt(0).toUpperCase() + name.slice(1);
  },
  render: function () {
    var self = this;
    var lists = [
      'actors',
      'directors',
      'composers',
      'languages',
      'production_companies',
      'genres'
    ];

    var statsLists = lists.map(function (name) {
      return (
        <StatsList
          title={self.cleanAndCapitalize(name)}
          items={self.state.data[name]}
          type="movies"></StatsList>
      );
    })

    return (
      <div className="stats">
        <Time data={this.state.data.time} />
        <Totals numbers={this.state.data.numbers} total={this.state.data.total} />
        <div className="stats__lists">
          {statsLists}
        </div>
      </div>
    );
  }
});