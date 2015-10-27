'use strict';

var React = require('react'),
    Router = require('react-router'),
    GroupForm = require('./groupForm.js'),
    GroupActions = require('../../actions/groupActions.js'),
    GroupStore = require('../../stores/groupStore.js'),
    toastr = require('toastr');

var ManageGroupPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom: function(transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },

  getInitialState: function() {
    return {
      group: { _id: '', name: '', enabled: false, subnets: []},
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    var groupId = this.props.params.id; // from the path 'group/:id'

    if (groupId) {
      this.setState({group: GroupStore.getGroupById(groupId)});
    }
  },

  setGroupState: function(event) {
    this.setState({dirty: true});

    var field = event.target.name,
        value = event.target.value;

    this.state.author[field] = value;
    return this.setState({group: this.state.group});
  },

  groupFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; // clear any previous errors

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  saveGroup: function(event) {
    event.preventDefault();
    if (!this.groupFormIsValid()) {
      return;
    }

    if (this.state.group._id) {
      GroupActions.updateGroup(this.state.group);
    } else {
      GroupActions.createGroup(this.state.group);
    }

    this.setState({dirty: false});

    toastr.success('Group saved.');
    this.transitionTo('app');
  },

  render: function() {
    return (
      <GroupForm
        author={this.state.group}
        onChange={this.setGroupState}
        onSave={this.saveGroup}
        errors={this.state.errors} />
    );
  }
});

module.exports = ManageGroupPage;
