_data = {};
Template.feed.onCreated(function(){
  var self = this;
  self.autorun(function(){
    if(Meteor.userId()){
      self.subscribe('user', Meteor.userId());
      if (Meteor.user().profile.feedDotz){
        self.subscribe('smartRefToUsersCursor', Meteor.user().profile.feedDotz);
        self.subscribe('smartRefToDotzCursor', Meteor.user().profile.feedDotz);
      }
    }
   _data.user = Meteor.users.findOne(Meteor.userId());
  });
});
Template.feed.helpers({
  feedDotz: function(){
    if (_data.user.profile.feedDotz){
      return Modules.both.Dotz.smartRefToDataObject(_data.user.profile.feedDotz);
    }

  }
});
