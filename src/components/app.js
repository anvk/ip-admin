/* eslint-disable strict */ // Disable check because we can't run strict mode. Need global vars.

$ = jQuery = require('jquery');

var React = require('react'),
    Header = require('./header/header.js'),
    SideBar = require('./sideBar/sideBar.js'),
    LoginStore = require('../stores/loginStore.js'),
    UserStore = require('../stores/UserStore.js'),
    LoginPage = require('./loginPage/loginPage.js'),
    RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({

  getInitialState: function() {
    return {
      loggedin: false,
      user: {
        firstName: '',
        lastName: ''
      }
    };
  },

  componentWillMount: function() {
    LoginStore.addChangeListener(this._onChangeLogin);
  },

  componentWillUnmount: function() {
    LoginStore.removeChangeListener(this._onChangeLogin);
  },

  _onChangeLogin: function() {
    this.setState({ loggedin: LoginStore.isLoggedIn(), user: UserStore.getUser() });
  },

  render: function() {

    // if user is not loggedin then show basic login page
    if (!this.state.loggedin) {
      return (
        <div>
          <RouteHandler />
        </div>
      );
    }

    return (
      <div>
        <Header user={this.state.user}/>
        <div className='container-fluid'>
          <div className='col-md-4'>
            <SideBar />
          </div>
          <div className='col-md-8'>
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
