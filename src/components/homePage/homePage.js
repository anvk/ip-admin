'use strict';

var React = require('react'),
    LoginStore = require('../../stores/loginStore.js');

var Home = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (!LoginStore.isLoggedIn()) {
        transition.redirect('login');
      }

      callback();
    }
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
