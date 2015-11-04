_data = {};
Template.feed.onCreated(function(){
  var self = this;
  self.autorun(function(){
    if(Meteor.userId()){
      self.subscribe('user', Meteor.userId());
    }
   _data.user = Meteor.users.find(Meteor.userId());
  });
});
Template.feed.helpers({
  feedDotz: function(){
   // return Modules.both.Dotz.getFeedDotz(_data.user);
  }
});
