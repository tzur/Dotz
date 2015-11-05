Meteor.publish( 'user', function( userId ) {
  check(userId, String, Object);
  console.log("DOGGGGGG " + userId);
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

Meteor.publish('dotzArrayToUserCursor',function(dotzArray){
  check(dotzArray, Array);
  let userIds = [];
  let currentDot ;
  dotzArray.forEach(function(dot){
    currentDot = Dotz.findOne(dot.__originalId);
    userIds.push(currentDot.ownerUserId);
  });
  return Meteor.users.find({_id: {$in: userIds}});
});
