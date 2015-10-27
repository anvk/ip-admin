'use strict';

var React = require('react');

var GroupForm = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    group: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form>
        <h1>Manage Group</h1>
        <input type='text' value={this.props.group.name} name='groupName' placeholder='Group Name' onChange={this.props.onChange} />
        <input type='checkbox' checked={this.props.group.enabled} name='groupEnabled' onChange={this.props.onChange} />
        <input type='submit' value='Save' className='btn btn-default' onClick={this.props.onSave} />
      </form>
    );
  }
});

module.exports = GroupForm;
