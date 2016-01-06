/**
 * Created by avivhatzir on 05/01/2016.
 */
Template.userConnectivity.onCreated(function(){

});

Template.userConnectivity.helpers({
  connectionsMadeByUserData: function(){
    //dot: Dotz.findOne(this.dot._id),
    //  smartRef: this,
    //  ownerUser: Meteor.users.findOne(this.dot.ownerUserId),
    //  connectedByUser: Meteor.users.findOne(this.connection.connectedByUserId)
    return this.data.userConnections.connectionsMadeByUser
  }


});
