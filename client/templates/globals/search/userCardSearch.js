/**
 * Created by avivhatzir on 18/11/2015.
 */

Template.userCardSearch.helpers({
  followersCounter: function(){
    return ("(" + this.profile.followers.length + ")")
  },

  myFollow: function(){
    return (  Meteor.user().profile.following &&
      Meteor.user().profile.following.indexOf(this._id) > -1)
  },

  profileDescription: function() {
    return s.prune(this.profile.description, 140);
  },

  isNotMe: function(){
    return (Meteor.userId() != this._id)
  }

});

Template.userCardSearch.events({
  'click .follow': function(){
    if(Meteor.user()) {
      Modules.both.Dotz.followUser(Meteor.userId(), this._id);
    }
    else{
      Modal.show('signUpModal');
    }
  },
  'click .unFollow': function(){
    Modules.both.Dotz.unFollowUser (Meteor.userId(), this._id);
  }

});

