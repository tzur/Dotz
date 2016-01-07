/**
 * Created by avivhatzir on 07/01/2016.
 */
Meteor.publish( 'userConnections', function( userId ) {
  check(userId, String);
  if (userId) {
    return UserConnections.find({userId: userId});
  }
});
