'use strict';

var React = require('react');

var SideBar = React.createClass({
  propTypes: {
    groups: React.PropTypes.array.isRequired
  },

  render: function() {
    var createGroupItem = function(group) {
      return (
        <li key={group._id}>{group.name}</li>
      );
    };

    return (
      <div className='sideBar'>
        <ul>
          {this.props.groups.map(createGroupItem, this)}
        </ul>
      </div>
    );
  }
});

module.exports = SideBar;
