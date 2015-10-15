'use strict';

var data = require('./stubData.js'),
    _ = require('lodash');

var mongoStub = {
  login: function(args, callback) {
    args = args || {};

    var result = _.findIndex(data.users, function(user) {
      return user.email === args.email && user.password === args.password;
    });

    if (result >= 0) {
      var token = data.users[result]._id; // just push userid into sessions for now
      data.sessions.push(token);
      return callback(undefined, {token: token});
    }

    callback('not authorized');
  }
};

module.exports = mongoStub;
