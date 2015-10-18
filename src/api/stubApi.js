'use strict';

var data = require('./stubData.js'),
    _ = require('lodash');

var mongoStub = {
  login: function(args, callback) {
    args = args || {};

    var result = _.findIndex(data.users, function(user) {
      return user.email === args.email && user.password === args.password &&
        user.enabled;
    });

    if (result >= 0) {
      var token = data.users[result]._id; // just push userid into sessions for now
      data.sessions.push(token);
      return callback(undefined, {token: token, user: data.users[result]});
    }

    callback('not authorized');
  },

  logout: function(args, callback) {
    callback();
  },

  getGroup: function(args, callback) {
    args = args || {};

    return callback(undefined,
      _.findWhere(data.groups, { _id: args._id, enabled: true }));
  }
};

module.exports = mongoStub;
