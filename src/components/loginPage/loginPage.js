'use strict';

var React = require('react'),
    Router = require('react-router'),
    LoginStore = require('../../stores/loginStore.js'),
    LoginActions = require('../../actions/loginActions.js'),
    toastr = require('toastr');

var LoginPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (LoginStore.isLoggedIn()) {
        transition.redirect('app');
      }

      callback();
    }
  },

  getInitialState: function() {
    return {
      errors: {},
      credentials: {
        inputEmail: 'SarahConnor@gmail.com',
        inputPassword: 'SarahConnor'
      }
    };
  },

  componentWillMount: function() {
    LoginStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    LoginStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    var error = LoginStore.getError();

    if (error) {
      this.setState({
        errors: {
          api: error
        }
      });

      toastr.success('no login for you!');
      return;
    }

    if (LoginStore.isLoggedIn()) {
      this.transitionTo('app');
    }
  },

  setLoginState: function(event) {
    var field = event.target.name,
        value = event.target.value;

    this.state.credentials[field] = value;

    return this.setState({ credentials: this.state.credentials });
  },

  login: function(event) {
    event.preventDefault();
    //if (!this.courseFormIsValid()) {
    //  return;
    //}

    LoginActions.login({
      email: this.state.credentials.inputEmail,
      password: this.state.credentials.inputPassword
    });
  },

  // log in example is taken from http://getbootstrap.com/examples/signin/
  render: function() {
    return (
      <form className="form-login">
        <h2 className="form-login-heading">Please log in</h2>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input id="inputEmail" name="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" type="email" value={this.state.credentials.inputEmail} onChange={this.setLoginState}></input>
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input id="inputPassword" name="inputPassword" className="form-control" placeholder="Password" required="" type="password" value={this.state.credentials.inputPassword} onChange={this.setLoginState}></input>
        <div className="checkbox">
          <label>
            <input value="remember-me" type="checkbox"></input> Remember me
          </label>
        </div>
        <button className='btn btn-lg btn-primary btn-block' type="submit" onClick={this.login}>Log In</button>
      </form>
    );
  }
});

module.exports = LoginPage;



