Template.userShow.onCreated(function() {

  let self = this;
  self.userShowReady = new ReactiveVar();
  self.profileDotReady = new ReactiveVar();

  self.subs = new SubsManager({
    // maximum number of cache subscriptions
    cacheLimit: 10,
    // any subscription will be expire after 5 minute, if it's not subscribed again
    expireIn: 5
  });

  self.autorun(function() {
    FlowRouter.watchPathChange();
    let userSlug = FlowRouter.getParam('userSlug');
    if (userSlug){
      let handleUser = self.subs.subscribe('userByUserSlug', userSlug, function(){
        let user = Meteor.users.findOne( {"profile.userSlug": userSlug});
        if (!user){
          FlowRouter.go('/');
          Bert.alert('Page does not exist', 'danger');
        }
        else{
          DocHead.setTitle("Dotz: " + user.username);
        }
      });
      if (handleUser.ready()){
        self.subs.subscribe('dotShow', Meteor.users.findOne({"profile.userSlug": userSlug}).profile.profileDotId);
      }
    }
  });
});
Template.userShow.helpers({
  dataUser: function() {
    let user = Meteor.users.findOne( {"profile.userSlug": FlowRouter.getParam('userSlug')} );
    if (user){
      return user;
    }
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
    let profileDot = Dotz.findOne(this.profile.profileDotId);
    if (profileDot){
      return profileDot.connectedDotzArray;
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
  },

  'click ._createDot': function(){
      Modal.show('createDotModal');
    },

  'click ._createList': function(){
    Modal.show('createListModal');
  }

});

