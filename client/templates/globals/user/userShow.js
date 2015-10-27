Template.inbox.onCreated( function() {
  this.subscribe( 'user', this.params.userId );
});

Template.userShow.helpers({
  profileDotz: function(){
    if (this.user) {
      Meteor.call('profileDotz', this.user._id, function (error, result) {
        Session.set('result', result);
      });
    }
    return Session.get('result');
  },
  followingCounter: function(){
    if (this.user){
      if (this.user.profile.following){
        return this.user.profile.following.length;
      }
      else{
        return 0;
      }
    }
  },
  followersCounter: function(){
    if (this.user){

      if (this.user.profile.followers){
        return this.user.profile.followers.length;
      }
      else{
        return 0;
      }
    }
  },
  myFollow: function(){
    if (this.user){
      if (Meteor.user().profile.following &&
        Meteor.user().profile.following.indexOf(this.user._id) > -1){
        return true;
      }
      else{
        return false;
      }
    }
  },
  notMyProfile: function() {
    if (this.user) {
      if (Meteor.userId() === this.user._id) {
        return false;
      }
      else {
        return true;
      }
    }
  },

  followers: function(){
    if(this.user.username === "Tel Aviv Official"){
      return 24;
    }
    else if(Meteor.user().profile.followers) {
      return (Meteor.user().profile.followers.length)
    }
    else{
      return o;
    }
  },

  following: function(){
    if(Meteor.user().profile.following) {
      return (Meteor.user().profile.following.length)
    }
    else{
      return o;
    }
  },

  dotNum:  function(){
    if(this.user.username === "Tel Aviv Official") {
      return 63;
    }
    else if(this.user.username === "Sea Executive Suites") {
      return 19;
    }
    else if(this.user.username === "Evi Gover") {
      return 38;
    }
    else{
      return 87;
    }

  },
  connectivityNum:  function(){
    if(this.user.username === "Tel Aviv Official") {
      return 230;
    }
    else if(this.user.username === "Sea Executive Suites") {
      return 24;
    }
    else if(this.user.username === "Evi Gover") {
      return 93;
    }
    else{
      return 47;
    }

  }
});

Template.userShow.events({
  'click .followersNum': function(){
    var userIds = this.user.profile.followers;
    Modal.show('followModal', {
      data:{
        'userIds': userIds
      }
    });
  },
  'click .followingNum': function(){
    var userIds = this.user.profile.following;
    Modal.show('followModal', {
      data:{
        'userIds': userIds
      }
    });
  },
  'click .follow': function(){
    Meteor.call('followUser', Meteor.userId(), this.user._id)
  },
  'click .unFollow': function(){
    Meteor.call('unFollowUser', Meteor.userId(), this.user._id);
  }
});

