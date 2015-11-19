Template.feed.onCreated(function(){
});
Template.feed.helpers({
  feedDotz: function(){
    if (Meteor.user().profile.feedDotz){
      return Meteor.user().profile.feedDotz;
    }

  }
});
