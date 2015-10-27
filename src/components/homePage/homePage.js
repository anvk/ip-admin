'use strict';

var React = require('react'),
    LoginStore = require('../../stores/loginStore.js'),
    UserStore = require('../../stores/userStore.js'),
    SideBar = require('../sideBar/sideBar.js');

var Home = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (!LoginStore.isLoggedIn()) {
        transition.redirect('login');
      }

      callback();
    }
  },

  getInitialState: function() {
    return {
      groups: []
    };
  },

  componentWillMount: function() {
    LoginStore.addChangeListener(this._onChangeLogin);
  },

  componentWillUnmount: function() {
    LoginStore.removeChangeListener(this._onChangeLogin);
  },

  _onChangeLogin: function() {
    this.setState({
      groups: UserStore.getUser().groups
    });
  },

  render: function() {
    return (
      <div className='container-fluid'>
        <div className='col-md-4'>
          <SideBar
            groups={this.state.groups} />
        </div>
        <div className='col-md-8'>
          Some stuff here
        </div>
      </div>
    );
  }
});

module.exports = Home;
