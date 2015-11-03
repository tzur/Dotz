Meteor.publish( 'user', function( userId ) {
  if (userId) {
    check(userId, String);
    return Meteor.users.find(userId);
  }
});

Meteor.publish( 'userByUsername', function( username ) {
  if (username) {
    check(username, String);
    return Meteor.users.find({username: username});
  }
});
