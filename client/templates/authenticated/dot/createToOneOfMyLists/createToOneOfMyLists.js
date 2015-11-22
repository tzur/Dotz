/**
 * Created by avivhatzir on 05/11/2015.
 */
Template.createToOneOfMyLists.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('createByUserLists');

  });
});
Template.createToOneOfMyLists.onCreated(function(){
  let self = this;
  self.autorun(function () {
    self.subscribe('createByUserDotz');
  });

});
Template.createToOneOfMyLists.helpers({

  userProfileListsArray: function() {
    let _createdByUserLists = Meteor.user().profile.createdByUserLists;
    return Dotz.find({_id: {$in: _createdByUserLists }}, {sort: {title: 1}});
  }

});

Template.createToOneOfMyLists.events({
  'click #publishToOneOfMyLists': function () {
    Session.set('parentDot', this._id);
    $('#publishToMyProfile').trigger('click');
  },

  'click .ConnectedByOwnerDotz': function () {
    Session.set('parentDot', this._id);
    $('#publishListToMyProfile').trigger('click');
  }


});
