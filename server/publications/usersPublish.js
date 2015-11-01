Meteor.publish( 'user', function( userId ) {
  if (userId) {
    check(userId, String);
    return Meteor.users.findOne(userId);
  }
});
