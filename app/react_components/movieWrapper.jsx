/** @jsx React.DOM */

var React = require('react');
var MovieList = require('./movieList.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function (data) {
        console.log(data);
        this.setState({ data: data.results });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    return (
      <div className="movies">
        <MovieList data={this.state.data}/>
      </div>
    );
  }
});