/**
 * Created by avivhatzir on 22/11/2015.
 */
Template.findUsersToFollowModal.onCreated(function(){
  let self = this;
  self.autorun(function(){
    self.subscribe('featuredUsersDoc');
    self.subscribe('featuredUsers');

  });
  if(Meteor.user().profile.userSlug != "dotz"){
    let dotz = Meteor.users.findOne({"profile.userSlug": "dotz"});
    if(dotz){
      Modules.both.Dotz.followUser(Meteor.userId(), dotz._id)
    }
  }

  if(Meteor.user().profile.userSlug != "telavivglobal"){
    let telAvivGlobal = Meteor.users.findOne({"profile.userSlug": "telavivglobal"});
    if(telAvivGlobal){
      Modules.both.Dotz.followUser(Meteor.userId(), telAvivGlobal._id)
    }
  }

});

Template.findUsersToFollowModal.helpers({
  usersList: function(){
    let usersIdArray = Tools.findOne({name: "featuredUsers"});
    if(usersIdArray){
      let usersArray =  Meteor.users.find({$and: [{_id: {$in: usersIdArray.featuredUsers }}, {_id: {$ne: Meteor.userId()}} ] })
      if(usersArray){
        return usersArray;
      }
    }
  },


});

Template.findUsersToFollowModal.events({
  'click #exitBtn': function(){
    Modal.hide()
  }
});
