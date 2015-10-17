'use strict';

var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
  INITIALIZE: null,

  // login related
  LOGIN_GOOD: null,
  LOGIN_ERROR: null,
  LOGOUT: null,

  // subnet related
  CREATE_SUBNET: null,
  UPDATE_SUBNET: null,
  DELETE_SUBNET: null
});
