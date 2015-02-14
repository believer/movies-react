/** @jsx React.DOM */

var React     = require('react');
var MovieList = require('./movieList.jsx');
var request   = require('request');
var Sidebar   = require('./sidebar.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  componentWillMount: function() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', this.props.url, true);
    xhr.onload = function() {
      var data = JSON.parse(xhr.responseText);
      this.setState({ data: data.results });
    }.bind(this);
    xhr.send();
  },
  render: function () {
    return (
      <div className="movies">
        <Sidebar />
        <MovieList data={this.state.data} />
      </div>
    );
  }
});