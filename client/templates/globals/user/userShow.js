Template.userShow.onCreated(function() {

  let self = this;
  //self.subs = new SubsManager({
  //  // maximum number of cache subscriptions
  //  cacheLimit: 10,
  //  // any subscription will be expire after 5 minute, if it's not subscribed again
  //  expireIn: 5
  //});
  self.autorun(function() {
    FlowRouter.watchPathChange();
    let userSlug = FlowRouter.getParam('userSlug');
    if (userSlug) {
        self.subscribe('userByUserSlug', userSlug, function(){
            let user = Meteor.users.findOne( {"profile.userSlug": userSlug});
            DocHead.setTitle("Dotz: " + user.username);
            if (!user){
              FlowRouter.go('/');
              Bert.alert('Page does not exist', 'danger');
            }
            else{
              Session.set('userSubscribeFinished', user);
            }
        });
    }
    if (Session.get('userSubscribeFinished')) {
      let dotId = Session.get('userSubscribeFinished').profile.profileDotId;
      if (dotId) {
        //self.subs.subscribe('dotShow', dotId, function(){
        //  Session.set('profileDot', Dotz.findOne(dotId));
        //});
        self.subscribe('dotShow', dotId);
      }
    }
  });
});
Template.userShow.helpers({
  dataUser: function() {
    return Meteor.users.findOne( {"profile.userSlug": FlowRouter.getParam('userSlug')} );
  },
//user counters:
  followingCounter: function(){
    return this.profile.following.length;

  },
  followersCounter: function(){
    return this.profile.followers.length;

  },
  dotNumCounter:  function(){
      return this.profile.createdByUserDotz.length;

  },
  connectivityNum:  function(){
      return this.profile.userConnections.length;

  },
  myFollow: function(){
    if (  Meteor.user().profile.following &&
              Meteor.user().profile.following.indexOf(this._id) > -1){
      return true;
    }
    else{
      return false;
    }
  },
  notMyProfile: function() {
    if ( Meteor.userId() === this._id) {
      return false;
    }
    else {
      return true;
    }
  },

  connectedDotzArray: function() {
    //let dot = Dotz.findOne(this.profile.profileDotId);
    //if ( dot && dot.connectedDotzArray ) {
    //  return dot.connectedDotzArray;
    //}
    return Dotz.findOne(this.profile.profileDotId).connectedDotzArray;
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
      Modules.both.Dotz.followUser(Meteor.userId(), this._id);
    }
    else{
      Modal.show('signUpModal');
    }
  },
  'click .unFollow': function(){
   Modules.both.Dotz.unFollowUser (Meteor.userId(), this._id);
  },

  'click .editUserAccount-btn': function(){
    Modal.show('editUserAccountModal')
  }

});

