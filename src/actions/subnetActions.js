'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    ActionTypes = require('../constants/actionTypes.js');

var SubnetActions = {
  createSubnet: function(subnet) {
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_SUBNET,
      subnet: subnet
    });
  },
  updateSubnet: function(subnet) {
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_SUBNET,
      subnet: subnet
    });
  },
  deleteSubnet: function(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_SUBNET,
      id: id
    });
  }
};

module.exports = SubnetActions;
