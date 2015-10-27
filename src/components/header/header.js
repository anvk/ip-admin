'use strict';

var React = require('react'),
    Router = require('react-router'),
    UserLinks = require('./userLinks.js'),
    Link = Router.Link;

var Header = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <Link to='app' className='navbar-brand'>
            <img src='images/logo.png' />
          </Link>
          <ul className='nav navbar-nav'>
            <li><Link to='app'>Home</Link></li>
            { this.props.user.admin ? <li><Link to='groups'>Manage Groups</Link></li> : ''}
            <li><Link to='about'>About</Link></li>
          </ul>
          <UserLinks
            user = {this.props.user} />
        </div>
      </nav>
    );
  }
});

module.exports = Header;
