Meteor.publish( 'user', function( userId ) {
  check(userId, String, Object);
  console.log(userId);
  if (userId) {
    return Meteor.users.find(userId);
  }
});

Meteor.publish( 'userByUsername', function( username ) {
  if (username) {
    check(username, String);
    return Meteor.users.find({username: username});
  }
});
Meteor.publish('allUsers', function(){
  return Meteor.users.find({})
});
