/**
 * Created by avivhatzir on 02/11/2015.
 */
Template.mobileConnectDotModal.onCreated(function(){
  let self = this;
  self.autorun(function () {
    self.subscribe('createByUserLists');
  });

  });

Template.mobileConnectDotModal.onRendered(function() {
  Modules.client.Dotz.limitCharactersAndCounter('#personalDescription', 100, '#personalDescriptionFeedback');
});

Template.mobileConnectDotModal.helpers({

  currentUserImageUrl: function() {
    return Meteor.user().profile.profileImage;
  },

  currentUserUsername: function() {
    return Meteor.user().username;
  },
  userProfileDotzArray: function(){
    Session.set('dotIdWishedToBeConnected', this.data.dot._id);
    Session.set('dotOwnerUserId', this.data.dot.ownerUserId);
    Session.set('dotTitleWishedToBeConnected', this.data.dot.title);
    return Modules.client.Dotz.getAvailableList(this.data.dot._id);

  },
  canBeConnectedToUserProfileDot: function(){
      return Modules.client.Dotz.canBeConnectedToDot(Meteor.user().profile.profileDotId, this.data.dot._id);
  }
});

Template.mobileConnectDotModal.events({

  'click #exitBtn': function(){
    Modal.hide('createDotModal');
  },

  'click .connectToUserProfile': function () {
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


  'click .connectBtn': function () {
    let personalDescription = $('#personalDescription').val();
    let smartRef = new Modules.both.Dotz.smartRef(Session.get('dotIdWishedToBeConnected'), Session.get('dotOwnerUserId'),
      this._id, CONNECT_ACTION, Meteor.userId(),personalDescription);
    Meteor.call('connectDot', smartRef);
    Modal.hide();
    analytics.track('Connect', {
      title: 'Connected: ' + Session.get('dotTitleWishedToBeConnected'),
      connectTarget: this.title
    })


  }
});
