/**
 * Created by avivhatzir on 02/11/2015.
 */
Template.connectDotModal.onCreated(function(){
  let self = this;
  self.autorun(function () {
    self.subscribe('createByUserLists');
  });

  });

Template.connectDotModal.onRendered(function() {
  Modules.client.Dotz.limitCharactersAndCounter('#personalDescription', 100, '#personalDescriptionFeedback');
});

Template.connectDotModal.helpers({

  currentUserImageUrl: function() {
    return Meteor.user().profile.profileImage;
  },

  currentUserUsername: function() {
    return Meteor.user().username;
  },
  userProfileDotzArray: function(){
    Session.set('dotIdWishedToBeConnected', this.data.dot._id);
    Session.set('dotOwnerUserId', this.data.dot.ownerUserId);
    return Modules.client.Dotz.getAvailableList(this.data.dot._id);

  },
  canBeConnectedToUserProfileDot: function(){
      return Modules.client.Dotz.canBeConnectedToDot(Meteor.user().profile.profileDotId, this.data.dot._id);
  }

});

Template.connectDotModal.events({
  'click .connectToUserProfile': function () {
    let personalDescription = $('#personalDescription').val();
    let smartRef = new Modules.both.Dotz.smartRef(Session.get('dotIdWishedToBeConnected'), Session.get('dotOwnerUserId'),
                  Meteor.user().profile.profileDotId, CONNECT_ACTION, Meteor.userId(),personalDescription);
    Modules.both.Dotz.connectDot(smartRef);
    Modal.hide();


  },
  'click .connectBtn': function () {
    let personalDescription = $('#personalDescription').val();
    let smartRef = new Modules.both.Dotz.smartRef(Session.get('dotIdWishedToBeConnected'), Session.get('dotOwnerUserId'),
      this._id, CONNECT_ACTION, Meteor.userId(),personalDescription);
    Modules.both.Dotz.connectDot(smartRef);
    Modal.hide();


  }
});
