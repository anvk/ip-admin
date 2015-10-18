'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    ActionTypes = require('../constants/actionTypes.js'),
    UserStore = require('./userStore.js'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change';

var _loginData = {};

var LoginStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  isLoggedIn: function() {
    return !!_loginData.token;
  },

  getError: function() {
    return _loginData.error;
  }
});

LoginStore.dispatchToken = Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.LOGIN_GOOD:
      // wait for UserStore to fire first
      Dispatcher.waitFor([UserStore.dispatchToken]);
      debugger;
      _loginData = {
        token: action.token
      };
      LoginStore.emitChange();
      break;
    case ActionTypes.LOGIN_ERROR:
      _loginData = {
        error: action.error
      };
      LoginStore.emitChange();
      break;
    case ActionTypes.LOGOUT:
      _loginData = {};
      LoginStore.emitChange();
      break;
    default:
      // nothing to do
      break;
  }
});

module.exports = LoginStore;
