'use strict';

var React = require('react');

var Home = React.createClass({
  componentWillMount: function() {

  },

  render: function() {
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <p>React, React Router, and Flux for ultra-responsive web apps.</p>
      </div>
    );
  }
});

module.exports = Home;
