'use strict';

var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    NotFoundRoute = Router.NotFoundRoute,
    Redirect = Router.Redirect;

var routes = (
  <Route name='app' path='/' handler={require('./components/app.js')} >
    <DefaultRoute handler={require('./components/homePage/homePage.js')} />

    <Route name='login' handler={require('./components/loginPage/loginPage.js')} />
    <Route name='about' handler={require('./components/aboutPage/aboutPage.js')} />

    // groups
    <Route name='groups' handler={require('./components/groups/groupPage.js')} />
    <Route name='addGroup' path='group' handler={require('./components/groups/manageGroupPage.js')} />
    <Route name='manageGroup' path='group/:id' handler={require('./components/groups/manageGroupPage.js')} />

    <NotFoundRoute handler={require('./components/notFoundPage/notFoundPage.js')} />
  </Route>
);

module.exports = routes;
