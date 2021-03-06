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
    //This sub is being used in:
    // 1. redirectSession with the parent Dot
    self.subscribe('createByUserDotz');
  });

});

Template.createToOneOfMyLists.onRendered(function(){

  // spinner
  $(function(){
    $('a, button').click(function() {
      $(this).toggleClass('active');
    });
  });

});

Template.createToOneOfMyLists.helpers({

  userProfileListsArray: function() {
    let _createdByUserLists = Meteor.user().profile.createdByUserLists;
    return Dotz.find({_id: {$in: _createdByUserLists }}, {sort: {title: 1}});
  },
  isSpinnerOn: function(){
    return Session.get('spinnerOn');
  }

});

Template.createToOneOfMyLists.events({
  'click #publishToListButton': function () {
    //let parentInfo = {slug: this.dotSlug, title: this.title, coverImage: this.coverImageUrl};
    //Session.set('lastPath', parentInfo);
    Session.set('parentDot', this._id);
    $('#publishButton').trigger('click');
  }
});
