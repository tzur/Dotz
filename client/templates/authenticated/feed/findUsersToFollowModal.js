/**
 * Created by avivhatzir on 22/11/2015.
 */
Template.findUsersToFollowModal.onCreated(function(){
  let self = this;
  self.autorun(function(){
    self.subscribe('featuredUsersDoc');
    self.subscribe('featuredUsers');

    let dotz = Meteor.users.findOne({"profile.userSlug": "dotz"});
    if(dotz){
      Modules.both.Dotz.followUser(Meteor.userId(), dotz._id)
    }

    let telAvivGlobal = Meteor.users.findOne({"profile.userSlug": "telavivglobal"});
    if(telAvivGlobal){
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
  }


});

Template.findUsersToFollowModal.events({
  'click #exitBtn': function(){
    Modal.hide()
  }
});
