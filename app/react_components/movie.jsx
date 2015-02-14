/** @jsx React.DOM */

var React  = require('react');
var addons = require('react-addons');
var MovieInformation = require('./movieInformation.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      information: false,
      showPoster: false
    };
  },
  setMovie: function () {
    this.setState({ information: !this.state.information });
  },
  showPoster: function () {
    this.setState({ showPoster: !this.state.showPoster })
  },
  calculateRuntime: function (minutes) {
    if (minutes < 60) {
      return minutes > 1 ? minutes + ' minutes' : minutes + ' minute';
    } else if (minutes === 60) {
      return '1 hour';
    } else if (minutes > 60) {
      var hours = Math.floor(minutes / 60);
      var minutes = Math.round(minutes / 60 % 1 * 60);
      minutes = minutes === 1 ? minutes + ' minute' : minutes + ' minutes';
      return hours === 1 ? hours + ' hour ' + minutes : hours + ' hours ' + minutes;
    }
  },
  render: function() {
    var cx = addons.classSet;
    var classes = cx({
      'movie__poster': true,
      'movie__poster--full': this.state.showPoster
    });

    var image = 'http://image.tmdb.org/t/p/w500' + this.props.data.poster;

    return (
      <div className="movie" onClick={this.setMovie}>
        <img src={image} className={classes}/>
        <div className="movie__information">
          {<h2 className="movie__title">
            { this.props.data.title }
          </h2>}
          <div className="movie__runtime">
            { this.calculateRuntime(this.props.data.runtime) }
          </div>
        </div>
      </div>
    );
  }
});