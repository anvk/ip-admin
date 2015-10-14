'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    stubApi = require('../api/stubApi.js'),
    ActionTypes = require('../constants/actionTypes.js');

var LoginActions = {
  login: function(username, password) {
    var token = stubApi.login(username, password);

    if (!token) {
      return;
    }

    Dispatcher.dispatch({
      actionType: ActionTypes.LOGIN_GOOD,
      token: token
    });
  }
};

module.exports = LoginActions;
