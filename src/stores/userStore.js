'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    ActionTypes = require('../constants/actionTypes.js'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change';

var _user = {};

var UserStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getUser: function() {
    return _user;
  }
});

UserStore.dispatchToken = Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.LOGIN_GOOD:
      _user = action.user;
      UserStore.emitChange();
      break;
    case ActionTypes.LOGOUT:
      _user = {};
      UserStore.emitChange();
      break;
    default:
      // nothing to do
      break;
  }
});

debugger;

module.exports = UserStore;
