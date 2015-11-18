_data = {};

Template.userShow.onCreated(function() {

  let self = this;
  self.subs = new SubsManager({
    // maximum number of cache subscriptions
    cacheLimit: 10,
    // any subscription will be expire after 5 minute, if it's not subscribed again
    expireIn: 5
  });

  //TBD:
  //Tracker.autorun(function() {
  //  if(subs.ready()) {
  //    // all the subscriptions are ready to use.
  //  }
  //});

  self.autorun(function() {

      let userSlug = FlowRouter.getParam('userSlug');
      if (userSlug) {
          self.subs.subscribe('userByUserSlug', userSlug, function(){
              _data.userShow = Meteor.users.findOne( {"profile.userSlug": userSlug});
              var title = _data.userShow.username;
              DocHead.setTitle("Dotz: " + title);
              if (!_data.userShow){
                FlowRouter.go('/');
                Bert.alert('Page does not exist', 'danger');
              }
              else{
                Session.set('userSubscribeFinished', _data.userShow);
              }
          });
      }

      if (Session.get('userSubscribeFinished')) {
          //if (_data.userShow.profile) {
          //    let dotId =_data.userShow.profile.profileDotId;
          let dotId = Session.get('userSubscribeFinished').profile.profileDotId;
          if (dotId) {
            self.subs.subscribe('dotShow', dotId);
            _data.userShowDot = Dotz.findOne(dotId);
            Session.set('dot', _data.userShowDot);
          }
          if (_data.userShowDot) {
            //subscribe all the relevant data for connectedDotzArray:
            self.subs.subscribe('smartRefToDotzCursor', _data.userShowDot.connectedDotzArray);
            self.subs.subscribe('smartRefToUsersCursor', _data.userShowDot.connectedDotzArray);
            //send smartRef to module:
          }
      }
  });
});


Template.userShow.helpers({
  data: function() {
    _data.userShow = Meteor.users.findOne( {"profile.userSlug": FlowRouter.getParam('userSlug')} );
    return _data;
  },

//user counters:
  followingCounter: function(){
    //return _data.userShow.profile.following.length;
    if (_data.userShow) {
      return Meteor.users.findOne(_data.userShow._id).profile.following.length;
    }
  },
  followersCounter: function(){
    //return _data.userShow.profile.followers.length;
    if (_data.userShow) {
      return Meteor.users.findOne(_data.userShow._id).profile.followers.length;
    }
  },
  dotNumCounter:  function(){
    if (_data.userShow) {
      return Meteor.users.findOne(_data.userShow._id).profile.createdByUserDotz.length;
    }
  },
  connectivityNum:  function(){
    if (_data.userShow) {
      return Meteor.users.findOne(_data.userShow._id).profile.userConnections.length;
    }
  },

  myFollow: function(){
    if (_data.userShow && Meteor.user().profile.following &&
      Meteor.user().profile.following.indexOf(_data.userShow._id) > -1){
      return true;
    }
    else{
      return false;
    }
  },
  notMyProfile: function() {

    if (_data.userShow && Meteor.userId() === _data.userShow._id) {
      return false;
    }
    else {
      return true;
    }
  },

  connectedDotzArray: function() {
    let dot = Session.get('dot');
    if ( dot && dot.connectedDotzArray ) {
      return Modules.both.Dotz.smartRefToDataObject(dot.connectedDotzArray);
    }
  },


  //TEST:
  smartRefArray: function() {
    let dot = Session.get('dot');
    if ( dot && dot.connectedDotzArray ) {
      return dot.connectedDotzArray;
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
    if(Meteor.user()) {
      Modules.both.Dotz.followUser(Meteor.userId(), _data.userShow._id);
    }
    else{
      Modal.show('signUpModal');
    }
  },
  'click .unFollow': function(){
   Modules.both.Dotz.unFollowUser(Meteor.userId(), _data.userShow._id);
  },

  'click .editUserAccount-btn': function(){
    Modal.show('editUserAccountModal')
  }

});

