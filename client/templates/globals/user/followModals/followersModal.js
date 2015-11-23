
Template.followersModal.onCreated(function() {

  let self = this;
  self.subs = new SubsManager({
    // maximum number of cache subscriptions
    cacheLimit: 10,
    // any subscription will be expire after 5 minute, if it's not subscribed again
    expireIn: 5
  });

  //self.autorun(function() {

  if (this.data) {
    self.subs.subscribe('user', this.data.data.userId);
    this.data.data.followers.forEach(function(userId){
      self.subs.subscribe('user', userId);
    });
  }

  //});
});


Template.followersModal.helpers({

  userFollowersArray: function() {
    //return this.data.followers;
    let followersArray = Meteor.users.findOne(this.data.userId).profile.followers;
    if (followersArray) {
      return followersArray
    }
  },

  userData: function() {
    let userId = this.toString(); //TBD
    console.log("$$$$$$$$$ this is " + userId);
    let user = Meteor.users.findOne(userId);
    if (user) {
      return user
    }

    //let userId = this;
    ////let user;
    //
    //Tracker.autorun(function() {
    //  return Meteor.users.findOne(userId);
    //
    //  //if (user) {
    //  //  return user
    //  //}
    //
    //});



  }


});


Template.followersModal.events({

  'click #exitBtn': function(){
    Modal.hide('followersModal');
  }

});
