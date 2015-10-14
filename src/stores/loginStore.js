'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    ActionTypes = require('../constants/actionTypes.js'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    _ = require('lodash'),
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
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.LOGIN_GOOD:
      _loginData.token = action.token;
      LoginStore.emitChange();
      break;
    default:
      // nothing to do
      break;
  }
});

module.exports = LoginStore;
