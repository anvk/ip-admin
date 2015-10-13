'use strict';

var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    NotFoundRoute = Router.NotFoundRoute,
    Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app.js')}>
    <DefaultRoute handler={require('./components/homePage/homePage.js')} />

    <Route name="about" handler={require('./components/aboutPage/aboutPage.js')} />

    <NotFoundRoute handler={require('./components/notFoundPage/notFoundPage.js')} />
  </Route>
);

module.exports = routes;
