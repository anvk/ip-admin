'use strict';

var React = require('react'),
    Router = require('react-router'),
    LoginStore = require('../../stores/loginStore.js');

var AuthorizedPage = {
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (!LoginStore.isLoggedIn()) {
        this.transitionTo('login');
      }
    }
  },

  getInitialState: function() {
    return {
      loggedin: false
    };
  },

  componentWillMount: function() {
    LoginStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    LoginStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ loggedin: LoginStore.isLoggedIn() });
  }
};

module.exports = AuthorizedPage;
