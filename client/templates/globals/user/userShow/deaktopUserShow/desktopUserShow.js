Template.desktopUserShow.onCreated(function() {
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
    //console.log("$$$$$$$$ userSlug " + userSlug);
    if (userSlug){
      self.subs.subscribe('userByUserSlug', userSlug, function(){
        let user = Meteor.users.findOne( {"profile.userSlug": userSlug});
        if (!user){
            Bert.alert('Page does not exist', 'danger');
            //Back to the previews page:
            //setTimeout(function(){ window.history.back(); }, 2000);
            // TBD:
            if ( Meteor.user() ) {
              let userSlug = Meteor.user().profile.userSlug;
              FlowRouter.go( '/' + userSlug );
            } else {
              FlowRouter.go('/');
            }
        } else if (user) {
          //console.log("$$$$$$$$ user.username " + user.username);
          var title = user.username;
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
    FlowRouter.watchPathChange();

    return Meteor.users.findOne( {"profile.userSlug": FlowRouter.getParam('userSlug')} );
    //if (user && user.profile && user.profile.profileDotId){
    //  return user;
    //}
  },

  myProfileIsEmpty: function() {
    let profileDot;
    if (this.profile) {
      profileDot = Dotz.findOne(this.profile.profileDotId);
    }
    if (profileDot){
      //"this" is the user:
      return ( (Meteor.userId() === this._id) && (profileDot.connectedDotzArray.length === 0) )
    }
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

  dotNumCounter:  function(){
    let thisUserConnections = UserConnections.findOne({userId: this._id});
    let createdByUserLists = this.profile.createdByUserLists;
    let dotNumCounter;
    if (thisUserConnections && createdByUserLists) {
      dotNumCounter = createdByUserLists.length + thisUserConnections.createdByUserDotz.length;
      if (dotNumCounter > 0) {
        return dotNumCounter;
      }
    }
  },

  connectionsCounter:  function(){
    if (this.profile && this.profile.createdByUserLists) {
        let userConnectionsCounters = UserConnections.findOne({userId: this._id});
        if(userConnectionsCounters && userConnectionsCounters.peopleConnectedMyDotz && userConnectionsCounters.createdByUserDotz) {
            let userConnectivity =
              //userConnectionsCounters.peopleLikedMyConnections.length +
              userConnectionsCounters.peopleConnectedMyDotz.length
              //+ userConnectionsCounters.peopleLikedMyDotz.length
              ;
            let userConnection =
              //userConnectionsCounters.connectionsMadeByUser.length +
              //userConnectionsCounters.likesMadeByUser.length +
              userConnectionsCounters.createdByUserDotz.length +
              this.profile.createdByUserLists.length;
            if (userConnection > 0) {
              return ((userConnectivity * 2) + userConnection)
            }
      }
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

  myProfile: function(){
    if ( Meteor.userId() === this._id) {
      return true;
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
    let profileDot = Dotz.findOne(this.profile.profileDotId);
    if (profileDot){
      return profileDot.connectedDotzArray;
    }

  },

  relatedDotzArray: function() {
    //let userId = this._id;
    //if (userId){
    //  return Modules.client.relatedDotzArray(userId);
    //}
    //let profileDot = Dotz.findOne(this.profile.profileDotId);
    let profileDot = Dotz.findOne(this.profile.profileDotId);
    if (profileDot){
      return profileDot.relatedDotzArray;
    }

  },

  dataForCreateInMyProfile: function() {
    return ( {
      parentDotId: Meteor.user().profile.profileDotId
    });
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

  //'click ._createDot': function(){
  //  Modal.show('createDotModal');
  //  analytics.track("Open Create Dot Modal", {
  //    title: "Open Create Dot Modal from Dot Show",
  //    currentList: this.title,
  //    isOpenList: this.isOpen
  //  })
  //  },
  //
  //'click ._createList': function(){
  //  Modal.show('createListModal');
  //  analytics.track("Open Create List Modal", {
  //    title: "Open Create List Modal from User Profile",
  //    currentList: "Profile",
  //    isOpenList: "False"
  //  })
  //},

  //'click #_createDotInProfile': function(){
  //  Modules.client.editAndCreateSessionsCleaner();
  //  Modal.show('createNewDot_Modal',{
  //    initialDataForFormFields: false,
  //    parentDotId: Meteor.user().profile.profileDotId
  //  });
  //},

  'click #_createListInProfile': function(){
    Modules.client.editAndCreateSessionsCleaner();
    Modal.show('createNewList_modal',{
      initialDataForFormFields: false,
      parentDotId: Meteor.user().profile.profileDotId
    });
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

  'click #_userConnectivity': function(){
    Modal.show('userConnectivity',{
      data: {
        userId: this._id
      }
      });
  }


});

