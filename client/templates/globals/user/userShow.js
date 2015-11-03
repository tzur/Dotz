_data = {};
//_data.userShow = {}; //TBD?

Template.userShow.onCreated(function() {
  let self = this;
  self.autorun(function() {

    let username = FlowRouter.getParam('username');
    self.subscribe('username', username);
    _data.user = Meteor.users.findOne({username: username});

    let dotId = _data.user.profile.profileDotId;

    self.subscribe('dotShow', dotId);

    _data.dot = Dotz.findOne(dotId);

    if (_data.dot) {
      self.subscribe('dotzConnectedByOwner', dotId);
      let getDotzConnectedByOwnerArray = [];
      _data.dot.dotzConnectedByOwner.forEach(function (smartRef) {
        getDotzConnectedByOwnerArray.push(smartRef.dotId);
      });
      _data.dot.dotzConnectedByOwner = Dotz.find({_id: {$in: getDotzConnectedByOwnerArray}});
    }

    //self.subscribe('dotzConnectedByOthers', dotId);

  });
});

Template.userShow.helpers({
  user: function() {
    return _data.user;
  },
  dotzConnectedByOwner: function() {
    console.log("_data.dot.dotzConnectedByOwner[0] " + _data.dot.dotzConnectedByOwner[0])
    return _data.dot.dotzConnectedByOwner;
  },

  followingCounter: function(){
    return _data.user.profile.following.length;
  },
  followersCounter: function(){
        return _data.user.profile.followers.length;
  },
  myFollow: function(){
    if (Meteor.user().profile.following &&
      Meteor.user().profile.following.indexOf(_data.user._id) > -1){
      return true;
    }
    else{
      return false;
    }
  },

  notMyProfile: function() {
    if (Meteor.userId() === _data.user._id) {
      return false;
    }
    else {
      return true;
    }
  },

  dotNum:  function(){
    return 123;
  },

  connectivityNum:  function(){
    return 456;
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

