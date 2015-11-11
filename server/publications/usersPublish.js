Meteor.publish( 'user', function( userId ) {
  check(userId, String, Object);
  if (userId) {
    return Meteor.users.find(userId);
  }
});

Meteor.publish( 'userByUserSlug', function( userSlug ) {
  if (userSlug) {
    check(userSlug, String);
    return Meteor.users.find( {"profile.userSlug": userSlug} );
  }
  return this.ready();
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
