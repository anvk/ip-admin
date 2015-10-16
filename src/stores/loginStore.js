'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    ActionTypes = require('../constants/actionTypes.js'),
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
  },

  getUser: function() {
    return _loginData.user;
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.LOGIN_GOOD:
      _loginData.error = undefined;
      _loginData = {
        token: action.token,
        user: action.user
      };
      LoginStore.emitChange();
      break;
    case ActionTypes.LOGIN_ERROR:
      _loginData.error = action.error;
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
