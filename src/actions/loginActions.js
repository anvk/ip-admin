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

      var _ids = data.user.groups || [],
          groups = [],
          index = 0;

      var sendLoginGood = function(groups) {
        data.user.groups = groups;

        Dispatcher.dispatch({
          actionType: ActionTypes.LOGIN_GOOD,
          token: data.token,
          user: data.user
        });

        stubApi.getAllGroups(undefined, function(error, data) {
          Dispatcher.dispatch({
            actionType: ActionTypes.LOGIN_ADMIN,
            groups: data
          });
        });
      };

      _ids.forEach(function(_id) {
        stubApi.getGroup({ _id: _id }, function(error, data) {
          if (error) {
            Dispatcher.dispatch({
              actionType: ActionTypes.LOGIN_ERROR,
              error: error
            });

            return false;
          }

          index += 1;

          groups.push(data);

          if (index === _ids.length) {
            sendLoginGood(groups);
          }
        });
      });
    });
  },

  logout: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGOUT
    });
  }
};

module.exports = LoginActions;
