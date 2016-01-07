Template.desktopUserShow.onCreated(function() {
  Session.set('showShareDotz', false);
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
      self.subs.subscribe('userByUserSlug', userSlug, function(){
        let user = Meteor.users.findOne( {"profile.userSlug": userSlug});
        if (!user){
          Bert.alert('Page does not exist', 'danger');
          //Back to the previews page:
          setTimeout(function(){ window.history.back(); }, 2000);
          //FlowRouter.go('/');
        }
        else if (user) {
          var title = "Dotz: " + user.username;
          DocHead.setTitle(title);
          let userPageInfo = "User show: " + user.username;
          if(!Session.get('landingPageCategory') && user.roles){
            Session.set('landingPageCategory', user.roles.firstGroup)
          }
          analytics.page("User Show" , {
            title: userPageInfo
          });
        }
      });
      //if (handleUser.ready()){
      //    let user =  Meteor.users.findOne({"profile.userSlug": userSlug});
      //    if (user) {
      //        self.subs.subscribe('dotCard', user.profile.profileDotId.toString());
      //        self.subs.subscribe('dotCard', user.profile.shareDotId.toString());
      //    }
      //}

    }
  });
});


Template.desktopUserShow.onRendered(function() {
  //Session.set('showShareDotz', false);
  Session.set('changeListener', true);
  Session.set('spinnerOn', false);
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  window.fbAsyncInit = function() {
    if (typeof(FB) != 'undefined'
      && FB != null ) {
      FB.init({
        appId: '904084409705076',
        xfbml: true,
        version: 'v2.5'
      });
    }
  };

  fbAsyncInit();

});


Template.desktopUserShow.onDestroyed(function(){
  Session.set('changeListener', true);
});


Template.desktopUserShow.helpers({
  dataUser: function() {
    let user = Meteor.users.findOne( {"profile.userSlug": FlowRouter.getParam('userSlug')} );
    if (user){
      return user;
    }
  },

  myProfileIsEmpty: function() {
    let profileDot = Dotz.findOne(this.profile.profileDotId);
    if (profileDot){
      //"this" is the user:
      return ( (Meteor.userId() === this._id) && (profileDot.connectedDotzArray.length === 0) )
    }
  },

  isUserFBGroupAdmin: function() {
    return (Roles.userIsInRole(Meteor.userId(), ROLES.FB_GROUP_ADMIN));
  },
//user counters:
  //  followingCounter: function(){
  //    if (this.profile.following.length === 0) {
  //      return false;
  //    }
  //    else {
  //      return this.profile.following.length;
  //    }
  //
  //  },
  //  followersCounter: function(){
  //    if (this.profile.followers.length === 0) {
  //      return false;
  //    }
  //    else {
  //      return this.profile.followers.length;
  //    }
  //  },

  //dotNumCounter:  function(){
  //    return this.profile.createdByUserDotz.length;
  //},

  connectionsCounterERRORS:  function(){
    if (this.profile) {
       let userConnectivity = this.profile.userConnectionsCounter.peopleLikedMyConnections +
                              this.profile.userConnectionsCounter.peopleConnectedMyDotz+
                              this.profile.userConnectionsCounter.peopleLikedMyDotz;
      let userConnection = this.profile.userConnectionsCounter.connectionsMadeByUser + this.profile.userConnectionsCounter.likesMadeByUser
                            + this.profile.createdByUserDotz.length +
                           this.profile.createdByUserLists.length;
      return ((userConnectivity * 2) + userConnection)
    }
  },

  myFollow: function(){
    if (  Meteor.user() && Meteor.user().profile.following &&
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
    Session.get('changeListener');
    Session.get('showShareDotz');
    let profileDot = Dotz.findOne(this.profile.profileDotId);
    if (profileDot){
      return profileDot.connectedDotzArray;
    }

  },
  sharedDotzArray: function(){
    let sharedDot = Dotz.findOne(this.profile.shareDotId);
    if (sharedDot){
      return sharedDot.connectedDotzArray;
    }

  },
  shareMode: function(){
    return Session.get('showShareDotz');
  },
  canGenerateAutoLists: function(){
    return (Meteor.user().profile.createdByUserLists.length === 0 && Meteor.user().profile.createdByUserDotz.length === 0)
  },
  isSpinnerOn: function(){
    return Session.get('spinnerOn12');
  }

});
Template.desktopUserShow.events({
  'click ._shareUserOnFB': function(event){
    event.preventDefault();
    FB.ui({
      method: 'share',
      href: 'http://dotz.city/'+ this.profile.userSlug
    }, function(response){});
  },
  'click ._superShareEmail': function(event){
    event.preventDefault();
    Modal.show('superShareModal');
  },
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
      analytics.track("Follow User", {
        title: "Follow User From User Show Page",
        followedUserName: this.username
      })
    }
    else{
      Modal.show('signUpModal');
      analytics.track("Follow User", {
        title: "Follow User From User Show Page",
        followedUserName: this.username
      })
      analytics.track("Follow User", {
        title: "User is Not Logged In",
        followedUserName: this.username
      });
    }
  },
  'click .unFollow': function(){
    Modules.both.Dotz.unFollowUser (Meteor.userId(), this._id);
    analytics.track("UnFollow User", {
      title: "UnFollow User From User Show Page",
      followedUserName: this.username
    })
  },

  'click .editUserAccount-btn': function(){
    Modal.show('editUserAccountModal')
  },

  'click ._createDot': function(){
    Modal.show('createDotModal');
    analytics.track("Open Create Dot Modal", {
      title: "Open Create Dot Modal from Dot Show",
      currentList: this.title,
      isOpenList: this.isOpen
    })
    },

  'click ._createList': function(){
    Modal.show('createListModal');
    analytics.track("Open Create List Modal", {
      title: "Open Create List Modal from User Profile",
      currentList: "Profile",
      isOpenList: "False"
    })
  },

  'click ._followingCounter': function() {
    Modal.show('followingModal', {
      data: {
        'following': this.profile.following,
        'userId': this._id
      }
    });
  },

  'click ._followersCounter': function() {
    Modal.show('followersModal', {
      data: {
        'followers': this.profile.followers,
        'userId': this._id
      }
    });
  },

  'click #_generateAutoLists': function(){
    Meteor.call('autoGenerateNewLists', "Sample Hotel", function(error){
      if(error){
        console.log("autoGenerateNewLists didnt work")
      }
    });
    analytics.track("Auto Generate Lists", {
      title: "Auto Generate Lists From: Profile"
    })
  },
  'click ._goToShareMode': function(){
    Session.set('showShareDotz', true);
    analytics.track("Show Shared Lists Page", {
    })
  },
  'click .goToProfileMode': function(){
    Session.set('showShareDotz', false);
  },
  'click #_userConnectivity': function(){
    Modal.show('userConnectivity',{
      data: {
        userId: this.this._id
      }
      });
  },
  'click #_userFbGroupAdmin': function(event){
    event.preventDefault();
    let currentText = event.currentTarget.textContent;
    if (currentText === "I will add my group later..."){
      //$("#btnAddProfile").attr('value', 'Save');
      $('#_userFbGroupAdmin').html("Get your facebook group posts!");
      $('#_FBGroupForm').hide();
    }
    else{
      $('#_userFbGroupAdmin').html("I will add my group later...");
      $('#_FBGroupForm').show();
    }
  },
  'click #_getFBData': function(event){
    event.preventDefault();
    Session.set('spinnerOn12', true);
    Meteor.call('createGroupList', $('#_fbGroupIdInput').val(), function(error, result){
      if (error){
        Session.set('spinnerOn12', false);
        Bert.alert("Sorry something went Wrong, try again", 'danger');
      }
      else{
        Meteor.call('tagFacebookDotz', result, function(error, result){
          if (error){
            console.log(error);
          }
          Bert.alert("Everything is ready! Go ahead!", 'success');
          Session.set('spinnerOn12', false);
        })
      }
    })
  }

});

