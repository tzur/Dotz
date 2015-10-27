Meteor.publish( 'user', function( userId ) {
  return Meteor.users.findOne(userId);
});
