'use strict';

var data = require('stubData.js'),
    _ = require('lodash');

var mongoStub = {
  login: function(username, password) {
    var result = _.findIndex(data.users, function(user) {
      return user.username === username && user.password === password;
    });

    if (result >= 0) {
      var token = data[result]._id; // just push userid into sessions for now
      data.sessions.push(token);
      return token;
    }

    return;
  }
};

module.exports = mongoStub;
