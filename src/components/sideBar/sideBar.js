'use strict';

var React = require('react');

var SideBar = React.createClass({
  render: function() {
    return (
      <div className='sideBar'>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
});

module.exports = SideBar;
