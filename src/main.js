'use strict';

var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes.js'),
    InitializeActions = require('./actions/initializeActions.js');

InitializeActions.initApp();

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
