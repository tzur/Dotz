/**
 * Created by avivhatzir on 02/11/2015.
 */
Template.connectDotModal.onRendered = function(){

};


Template.connectDotModal.helpers({

  userProfileDotzArray: function(){
    Session.set('dotIdWishedToBeConnected', this.data.dotId)
    return Modules.client.Dotz.getDotDotzForConnect(Meteor.user().profile.profileDotId, this.data.dotId)
  }
});

Template.brainFuck.helpers({
  relevantDotDotzArray: function(){
    return Modules.client.Dotz.getDotDotzForConnect(this._id, Session.get('dotIdWishedToBeConnected'))
  }
});

Template.brainFuck.events({
  'click .connectBtn': function () {
    let smartRef = Modules.both.Dotz.smartRefFactory(Session.get('dotIdWishedToBeConnected'), this._id, Meteor.userId(), CONNECT_ACTION)
    Modules.both.Dotz.connectDot(smartRef)
  }


})
