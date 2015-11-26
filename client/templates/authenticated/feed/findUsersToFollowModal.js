/**
 * Created by avivhatzir on 22/11/2015.
 */
Template.findUsersToFollowModal.onCreated(function(){
  let self = this;
  Session.set('spinnerOn', false);
  self.autorun(function(){
    self.subscribe('featuredUsersDoc');
    self.subscribe('featuredUsers');

    let dotz = Meteor.users.findOne({"profile.userSlug": "dotz"});
    if(dotz && !Meteor.user().profile.feedDotz){
      Modules.both.Dotz.followUser(Meteor.userId(), dotz._id)
    }

    let telAvivGlobal = Meteor.users.findOne({"profile.userSlug": "telavivglobal"});
    if(telAvivGlobal && !Meteor.user().profile.feedDotz){
      Modules.both.Dotz.followUser(Meteor.userId(), telAvivGlobal._id)
    }
  });
});

Template.findUsersToFollowModal.helpers({
  usersList: function(){
    let usersIdArray = Tools.findOne({name: "featuredUsers"});
    if(usersIdArray) {
      return usersIdArray.featuredUsers
    }
  },
  userData: function() {
    let userId = this.toString(); //TBD
    console.log("$$$$$$$$$ this is " + userId);
    let user = Meteor.users.findOne(userId);
    if (user) {
      return user
    }
  },

  numberOfUsersToFollow: function(){
    let followingLength = Meteor.user().profile.following.length;
    if(followingLength > 0){
      return ("Follow " + followingLength + " & Continue")
    }
    else {
      return "Continue"
    }
  },

  isUserAlreadySelectedAll: function(){
    let usersIdArray = Tools.findOne({name: "featuredUsers"});
    if(usersIdArray){
      return (Meteor.user().profile.following.length === usersIdArray.featuredUsers.length)
    }
  }


});

Template.findUsersToFollowModal.events({
  'click #continueBtn': function(){
    Modal.hide();
  },

  'click #selectAllUsersToFollow': function(){
    let usersIdToFollow = Tools.findOne({name: "featuredUsers"}).featuredUsers;
    usersIdToFollow.forEach(function(userId){
      Modules.both.Dotz.followUser(Meteor.userId(), userId)
    })
  },

  'click #deSelectAllUsersToFollow': function(){
    let usersIdToUnFollow = Tools.findOne({name: "featuredUsers"}).featuredUsers;
    if(usersIdToUnFollow){
      usersIdToUnFollow.forEach(function(userId){
        Modules.both.Dotz.unFollowUser(Meteor.userId(), userId)
      })
    }
  }


});
