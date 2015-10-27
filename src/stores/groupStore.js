'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    ActionTypes = require('../constants/actionTypes.js'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    _ = require('lodash'),
    CHANGE_EVENT = 'change';

var _groups = [];

var GroupStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getAllGroups: function() {
    return _groups;
  },

  getGroupById: function(id) {
    return _.find(_groups, {_id: id});
  }
});

GroupStore.dispatchToken = Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.INITIALIZE:
      GroupStore.emitChange();
      break;
    case ActionTypes.LOGIN_ADMIN:
      _groups = action.groups;
      GroupStore.emitChange();
      break;
    case ActionTypes.CREATE_GROUP:
      _groups.push(action.group);
      GroupStore.emitChange();
      break;
    case ActionTypes.UPDATE_GROUP:
      var existingGroup = _.find(_groups, {_id: action.group._id}),
          existingGroupIndex = _.indexOf(_groups, existingGroup);
      _groups.splice(existingGroupIndex, 1, action.group);
      GroupStore.emitChange();
      break;
    case ActionTypes.DELETE_GROUP:
      _.remove(_groups, function(group) {
        return group.id === group.id;
      });
      GroupStore.emitChange();
      break;
    default:
      // nothing to do
      break;
  }
});

module.exports = GroupStore;
