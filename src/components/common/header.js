'use strict';

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="app" className="navbar-brand">
            <img src="images/logo.png" />
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="app">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
