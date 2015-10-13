/* eslint-disable strict */ // Disable check because we can't run strict mode. Need global vars.

$ = jQuery = require('jquery');

var React = require('react'),
    Header = require('./common/header.js'),
    RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
