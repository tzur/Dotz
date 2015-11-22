/**
 * Created by avivhatzir on 22/11/2015.
 */
Template.findUsersToFollowModal.onCreated(function(){
  let self = this;
  self.autorun(function(){
    self.subscribe('featuredUsersDoc');
    self.subscribe('featuredUsers');

  })
});

Template.findUsersToFollowModal.helpers({
  usersList: function(){
    let usersArray = Tools.findOne({name: "featuredUsers"});
    if(usersArray){
      return Meteor.users.find({_id:{$in: usersArray.featuredUsers  }})
    }
  }
});

Template.findUsersToFollowModal.events({
  'click #exitBtn': function(){
    Modal.hide()
  }
});
