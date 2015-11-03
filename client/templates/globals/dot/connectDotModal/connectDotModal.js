/**
 * Created by avivhatzir on 02/11/2015.
 */
Template.connectDotModal.onRendered = function(){
  Session.set('dotIdWishedToBeConnected', this.data.dotId)
};


Template.connectDotModal.helpers({

  relevantDotzArray: function(){
    return Modules.client.Dotz.getDotDotzForConnect(Meteor.user().profile.profileDotId, this.data.dotId)
  }
});

Template.brainFuck.helpers({
  relevantDotzArray: function(){
    return Modules.client.Dotz.getDotDotzForConnect(this._id, Session.get('dotIdWishedToBeConnected'))
  }
})
