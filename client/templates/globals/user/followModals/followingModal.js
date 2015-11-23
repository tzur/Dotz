
Template.followingModal.onCreated(function() {

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
          this.data.data.following.forEach(function(userId){
            self.subs.subscribe('user', userId);
          });
      }

  //});
});


Template.followingModal.helpers({

  userFollowingArray: function() {
    //return this.data.following;
    let followingArray = Meteor.users.findOne(this.data.userId).profile.following;
    if (followingArray) {
      return followingArray
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


Template.followingModal.events({

  'click #exitBtn': function(){
    Modal.hide('followingModal');
  }

});
