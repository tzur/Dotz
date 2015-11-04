/**
 * Created by avivhatzir on 02/11/2015.
 */

Template.connectDotModal.helpers({

  userProfileDotzArray: function(){
    Session.set('dotIdWishedToBeConnected', this.data.dotId);
    if(Session.get('dotIdWishedToBeConnected')) {
      return Modules.client.Dotz.getConnectedByOwnerDotz(Meteor.user().profile.profileDotId, Session.get('dotIdWishedToBeConnected'))
    }
  }
});
