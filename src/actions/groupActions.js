'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    ActionTypes = require('../constants/actionTypes.js');

var GroupActions = {
  createGroup: function(group) {
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_GROUP,
      group: group
    });
  },
  updateGroup: function(group) {
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_GROUP,
      group: group
    });
  },
  deleteGroup: function(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_GROUP,
      id: id
    });
  }
};

module.exports = GroupActions;
