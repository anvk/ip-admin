'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    stubApi = require('../api/stubApi.js'),
    ActionTypes = require('../constants/actionTypes.js');

var LoginActions = {
  login: function(args) {
    var token = stubApi.login(args, function(error, data) {
      if (error) {
        Dispatcher.dispatch({
          actionType: ActionTypes.LOGIN_ERROR,
          error: error
        });

        return;
      }

      Dispatcher.dispatch({
        actionType: ActionTypes.LOGIN_GOOD,
        token: data.token
      });
    });
  }
};

module.exports = LoginActions;
