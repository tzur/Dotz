/**
 * Created by avivhatzir on 04/11/2015.
 */

//Template.showConnectedByOwnerDotz.onCreated(function() {
//  let self = this;
//  self.autorun(function () {
//    self.subscribe('createByUserDotz');
//  });
//});


Template.showConnectedByOwnerDotz.helpers({
  relevantDotDotzArray: function(){
    return Modules.client.Dotz.getConnectedByOwnerDotz(this._id, Session.get('dotIdWishedToBeConnected'))
  },

  connectBtn: function(){
    return Modules.client.Dotz.isConnectedToDot(this._id, Session.get('dotIdWishedToBeConnected'))
  }
});

Template.showConnectedByOwnerDotz.events({
  'click .connectBtn': function () {
    personalDescription = $('#personalDescription').val();

    let smartRef = new Modules.both.Dotz.smartRef(Session.get('dotIdWishedToBeConnected'), this._id, Meteor.userId(), false, CONNECT_ACTION, personalDescription)
    Modules.both.Dotz.connectDot(smartRef)

  }




});
