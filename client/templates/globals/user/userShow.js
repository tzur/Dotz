_data = {};
//_data.userShow = {}; //TBD?

Template.userShow.onCreated(function() {

  let self = this;
  self.autorun(function() {

    let username = FlowRouter.getParam('username');
    if (username) {
      self.subscribe('userByUsername', username);
      _data.userShow = Meteor.users.findOne({username: username});
    }

    if (_data.userShow) {

      let dotId = _data.userShow.profile.profileDotId;
      if (dotId) {
        self.subscribe('dotShow', dotId);
        _data.userShowDot = Dotz.findOne(dotId);
      }

      if (_data.userShowDot) {
        //subscribe all the relevant data for dotzConnectedByOwner:
        self.subscribe('smartRefToDotzCursor', _data.userShowDot.dotzConnectedByOwner);
        self.subscribe('smartRefToUsersCursor', _data.userShowDot.dotzConnectedByOwner);
        //send smartRef to module:
      }
    }
  });
});

Template.userShow.helpers({
  data: function() {
    return _data;
  },

//user counters:
  followingCounter: function(){
    //return _data.userShow.profile.following.length;
    return Meteor.users.findOne(_data.userShow._id).profile.following.length;
  },
  followersCounter: function(){
    //return _data.userShow.profile.followers.length;
    return Meteor.users.findOne(_data.userShow._id).profile.followers.length;
  },
  dotNumCounter:  function(){
    return Meteor.users.findOne(_data.userShow._id).profile.createdByUserDotz.length;
  },
  connectivityNum:  function(){
    return Meteor.users.findOne(_data.userShow._id).profile.userConnections.length;
  },

  myFollow: function(){
    if (Meteor.user().profile.following &&
      Meteor.user().profile.following.indexOf(_data.userShow._id) > -1){
      return true;
    }
    else{
      return false;
    }
  },
  notMyProfile: function() {
    if (Meteor.userId() === _data.userShow._id) {
      return false;
    }
    else {
      return true;
    }
  },

  dotzConnectedByOwner: function() {
    if (_data.userShowDot.dotzConnectedByOwner) {
      return Modules.both.Dotz.smartRefToDataObject(_data.userShowDot.dotzConnectedByOwner);
    }
  }

});

Template.userShow.events({
  'click .followersNum': function(){
    var userIds = this.userShow.profile.followers;
    Modal.show('followModal', {
      data:{
        'userIds': userIds
      }
    });
  },
  'click .followingNum': function(){
    var userIds = this.userShow.profile.following;
    Modal.show('followModal', {
      data:{
        'userIds': userIds
      }
    });
  },
  'click .follow': function(){
    Modules.both.Dotz.followUser(Meteor.userId(), _data.userShow._id);
  },
  'click .unFollow': function(){
   Modules.both.Dotz.unFollowUser(Meteor.userId(), _data.userShow._id);
  }
});

