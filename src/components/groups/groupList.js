'use strict';

var React = require('react'),
    Router = require('react-router'),
    GroupActions = require('../../actions/groupActions.js'),
    toastr = require('toastr'),
    Link = Router.Link;

var GroupList = React.createClass({

  propTypes: {
    groups: React.PropTypes.array.isRequired
  },

  deleteGroup: function(id, event) {
    event.preventDefault();
    GroupActions.deleteGroup(id);
    toastr.success('Group Deleted');
  },

  render: function() {
    var createGroupRow = function(group) {
      return (
        <tr key={group._id}>
          <td><a href='#' onClick={this.deleteGroup.bind(this, group._id)}>Delete</a></td>
          <td><Link to='manageGroup' params={{id: group._id}}>{group._id}</Link></td>
          <td>{group.name}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className='table'>
          <thead>
            <th></th>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.props.groups.map(createGroupRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = GroupList;
