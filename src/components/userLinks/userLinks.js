'use strict';

var React = require('react'),
    Router = require('react-router'),
    LoginActions = require('../../actions/loginActions.js'),
    Link = Router.Link;

var UserLinks = React.createClass({
  mixins: [
    Router.Navigation
  ],

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  logout: function(event) {
    event.preventDefault();

    if (confirm('Are you sure you want to logout?')) {
      LoginActions.logout();
      this.transitionTo('login');
    }
  },

  render: function() {
    return (
      <ul className='nav navbar-nav navbar-right'>
        <li className='dropdown'>
          <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Dropdown <span className='caret'></span></a>
          <ul className='dropdown-menu'>
            <li className='disabled'><a href='#'>Signed in as {this.props.user.firstName} {this.props.user.lastName}</a></li>
            <li role='separator' className='divider'></li>
            <li><a href='#' onClick={this.logout}>Logout</a></li>
          </ul>
        </li>
      </ul>
    );
  }
});

module.exports = UserLinks;
