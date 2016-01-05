/**
 * Created by avivhatzir on 04/01/2016.
 */
UserConnections = new Meteor.Collection( 'userConnection');
//TBD!!!@#!@#!@#!@#
UserConnections.allow({
  insert: () => false,
  update: () => false,
  remove: () => false

});

UserConnections.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

UserConnections.attachSchema( Schema.userConnectivitySchema );
