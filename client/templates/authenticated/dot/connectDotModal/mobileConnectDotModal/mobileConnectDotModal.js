
Template.mobileConnectDotModal.onCreated(function(){
  //let self = this;
  //self.autorun(function () {
  //  self.subscribe('createByUserLists');
  //});


  ////connectionsMadeByUser
  //
  ////UserConnectionsSubs = new SubsManager();
  //
  //var subs = new SubsManager({
  //  cacheLimit: 10, // maximum number of cache subscriptions
  //  expireIn: 5  // any subscription will be expire after 5 minute, if it's not subscribed again
  //});
  ////Then instead of subscribing to Meteor.subscribe(), use PostSubs.subscribe(). Check this example:
  //
  //var self = this;
  //self.ready = new ReactiveVar();
  //self.autorun(function() {
  //  //var postId = FlowRouter.getQueryParam('postId');
  //  var handle = subs.subscribe('connectionsMadeByUser');
  //  self.ready.set(handle.ready());
  //});


});


Template.mobileConnectDotModal.onRendered(function() {
  Modules.client.Dotz.limitCharactersAndCounter('#personalDescription', 100, '#personalDescriptionFeedback');
});


Template.mobileConnectDotModal.onDestroyed(function() {
  Session.set('results_DOTZ_Algolia', undefined);
});


Template.mobileConnectDotModal.helpers({

  currentUserImageUrl: function() {
    return Meteor.user().profile.profileImage;
  },

  currentUserUsername: function() {
    return Meteor.user().username;
  },

  userProfileDotzArray: function() {
    //Kill the sessions:
    Session.set('dotIdWishedToBeConnected', this.data.dot._id);
    Session.set('dotOwnerUserId', this.data.dot.ownerUserId);
    Session.set('dotTitleWishedToBeConnected', this.data.dot.title);
    return Modules.client.Dotz.getAvailableList(this.data.dot._id);
  }

  ,
  canBeConnectedToUserProfileDot: function(){
      console.log("Meteor.user().profile.profileDotId >>> " + (Meteor.user().profile.profileDotId + " this.data.dot._id) >>> " + this.data.dot._id) )
      return Modules.client.Dotz.canBeConnectedToDot(Meteor.user().profile.profileDotId, this.data.dot._id);
  },

  results_DOTZ_Algolia: function(){
    return Session.get('results_DOTZ_Algolia');
  }

});

Template.mobileConnectDotModal.events({

  'click #_addNoteBtn': function(){
    $('#_addNoteDiv').toggleClass('hidden');
  },

  'click #_mobileConnectDotModal-connecToUserProfiletBtnDiv': function () {
    let personalDescription = $('#personalDescription').val();
    let smartRef = new Modules.both.Dotz.smartRef(Session.get('dotIdWishedToBeConnected'), Session.get('dotOwnerUserId'),
                  Meteor.user().profile.profileDotId, CONNECT_ACTION, Meteor.userId(),personalDescription);
    Meteor.call('connectDot', smartRef);
    Modal.hide();
    analytics.track('Enter Connect Modal', {
      title: 'Connected: ' + this.data.dot.title,
      connectTarget: "Profile Dot"
    })

  },


  'click #_mobileConnectDotModal-connectBtnDiv': function () {
    let personalDescription = $('#personalDescription').val();
    let smartRef = new Modules.both.Dotz.smartRef(Session.get('dotIdWishedToBeConnected'), Session.get('dotOwnerUserId'),
      this._id, CONNECT_ACTION, Meteor.userId(),personalDescription);
    Meteor.call('connectDot', smartRef);
    Modal.hide();
    analytics.track('Connect', {
      title: 'Connected: ' + Session.get('dotTitleWishedToBeConnected'),
      connectTarget: this.title
    })
  },

  'submit ._dotToConnectSearch': function(e){
    e.preventDefault();

    let index = "lists_DOTZ";

    console.log("$('#_searchBoxInput').val() >>>> " + $('#_searchBoxInput_connectModal').val())

    Modules.client.searchByAlgolia(index, $('#_searchBoxInput_connectModal').val() , function(error, content) {
      if(content){
        Session.set('results_DOTZ_Algolia', content.hits);
      }
      else{
        console.log("Error, on index: " + index + " >>>> search failed : " + error)
      }
    });
  },

  'click #searchSubmit':function(){
    //$('#searchTabs').removeClass('hidden');
  }

});
