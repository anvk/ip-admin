'use strict';

var React = require('react'),
    Router = require('react-router'),
    Link = require('react-router').Link,
    GroupStore = require('../../stores/groupStore.js'),
    GroupList = require('./groupList.js');

var GroupPage = React.createClass({
  getInitialState: function() {
    return {
      groups: GroupStore.getAllGroups()
    };
  },

  componentWillMount: function() {
    GroupStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    GroupStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ groups: GroupStore.getAllGroups() });
  },

  render: function() {
    return (
      <div>
        <h1>Groups</h1>
        <Link to='addGroup' className='btn btn-default'>Add Group</Link>
        <GroupList groups={this.state.groups}/>
      </div>
    );
  }
});

module.exports = GroupPage;
