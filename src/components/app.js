/* eslint-disable strict */ // Disable check because we can't run strict mode. Need global vars.

$ = jQuery = require('jquery');

var React = require('react'),
    Header = require('./common/header.js'),
    LoginStore = require('../stores/loginStore.js'),
    LoginPage = require('./loginPage/loginPage.js'),
    RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({

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
  },

  render: function() {
    return (
      <div>
        { this.state.loggedin ? <Header /> : null }
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
