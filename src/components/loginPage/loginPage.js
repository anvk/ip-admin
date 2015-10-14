'use strict';

var React = require('react');

var LoginPage = React.createClass({
  // log in example is taken from http://getbootstrap.com/examples/signin/
  render: function() {
    return (
      <form className="form-login">
        <h2 className="form-login-heading">Please sign in</h2>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" type="email"></input>
        <label for="inputPassword" className="sr-only">Password</label>
        <input id="inputPassword" className="form-control" placeholder="Password" required="" type="password"></input>
        <div className="checkbox">
          <label>
            <input value="remember-me" type="checkbox"></input> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  }
});

module.exports = LoginPage;



