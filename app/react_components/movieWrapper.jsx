/** @jsx React.DOM */

var React     = require('react');
var addons = require('react-addons');
var StatsList = require('./statsList.jsx');
var Time      = require('./time.jsx');
var Totals    = require('./totals.jsx');
var Loader = require('./loader.jsx');

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
      },
      isLoaded: false
    };
  },
  componentWillMount: function() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', this.props.url, true);
    xhr.onload = function() {
      var result = JSON.parse(xhr.responseText);
      this.setState({
        data: result,
        isLoaded: true
      });
    }.bind(this);
    xhr.send();
  },
  cleanAndCapitalize: function (name) {
    name = name.replace(/\_/g,' ');
    return name.charAt(0).toUpperCase() + name.slice(1);
  },
  render: function () {
    var self = this;
    var cx = addons.classSet;
    var classes = cx({
      'wrapper': true,
      'wrapper--fadein': this.state.isLoaded
    });
    var lists = [
      'actors',
      'directors',
      'composers',
      'languages',
      'production_companies',
      'genres'
    ];

    var statsLists = lists.map(function (name, i) {
      return (
        <StatsList
          key={i}
          title={self.cleanAndCapitalize(name)}
          items={self.state.data[name]}
          type="movies"></StatsList>
      );
    })

    return (
        <div className={classes}>
          {this.state.isLoaded ?
            <div className="stats">
              <Time data={this.state.data.time} />
              <Totals numbers={this.state.data.numbers} total={this.state.data.total} />
              <div className="stats__lists">
                {statsLists}
              </div>
            </div>
            : <Loader />
          }
        </div>
    );
  }
});