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



Template.brainFuck.helpers({
  relevantDotDotzArray: function(){
    return Modules.client.Dotz.getConnectedByOwnerDotz(this._id, Session.get('dotIdWishedToBeConnected'))
  },

  connectBtn: function(){
    return Modules.client.Dotz.getDotDotzForConnect(this._id, Session.get('dotIdWishedToBeConnected'))
  }
  //relevantDotDotzArray: function(){
  //  let checkDot = Dotz.findOne(this._id);
  //  return (checkDot.dotzConnectedByOwner)
  //}
});

Template.brainFuck.events({
  'click .connectBtn': function () {
    personalDescription = $('#personalDescription').val();

    let smartRef = Modules.both.Dotz.smartRefFactory(Session.get('dotIdWishedToBeConnected'), this._id, Meteor.userId(), CONNECT_ACTION, personalDescription)
    Modules.both.Dotz.connectDot(smartRef)

  }




});
