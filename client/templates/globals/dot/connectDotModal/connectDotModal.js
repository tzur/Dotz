/**
 * Created by avivhatzir on 02/11/2015.
 */
Template.connectDotModal.onCreated(function(){
  let self = this;
  self.autorun(function () {
    self.subscribe('createByUserDotz');
  });

  });

Template.connectDotModal.helpers({

  userProfileDotzArray: function(){
    Session.set('dotIdWishedToBeConnected', this.data.dotId);
    if(Session.get('dotIdWishedToBeConnected')) {
      return Modules.client.Dotz.getConnectedByOwnerDotz(Meteor.user().profile.profileDotId, Session.get('dotIdWishedToBeConnected'))
    }
  },

  isConnectedToUserProfileDot: function(){
    return Modules.client.Dotz.isConnectedToDot(Meteor.user().profile.profileDotId, Session.get('dotIdWishedToBeConnected'))
  }
});

Template.connectDotModal.events({
  'click .connectToUserProfile': function () {
    personalDescription = $('#personalDescription').val();
    let smartRef = new Modules.both.Dotz.smartRef(Session.get('dotIdWishedToBeConnected'), Meteor.user().profile.profileDotId, Meteor.userId(), false, CONNECT_ACTION, personalDescription)
    Modules.both.Dotz.connectDot(smartRef);

  }
});
