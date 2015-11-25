Meteor.publish( 'user', function( userId ) {
  check(userId, String, Object);
  if (userId) {
    return Meteor.users.find(userId, {fields: {"services.password": 0, "emails.address": 0, "services.loginTokens": 0, "emails.verified": 0, "profile.feedDotz": 0}});
  }
});

//Users.find({}, {fields: {password: 0, hash: 0}})

Meteor.publish( 'userByUserSlug', function( userSlug ) {
  if (userSlug) {
    check(userSlug, String);
    return Meteor.users.find( {"profile.userSlug": userSlug}, {fields: {"services.password": 0, "services.loginTokens": 0, "emails.address": 0, "emails.verified": 0, "profile.feedDotz": 0}});
  }
  //return this.ready();
});

Meteor.publish('dotzArrayToUserCursor',function(dotzArray){
  check(dotzArray, Array);
  let userIds = [];
  let currentDot ;
  dotzArray.forEach(function(dot){
    currentDot = Dotz.findOne(dot._id);
    userIds.push(currentDot.ownerUserId);
  });
  return Meteor.users.find({_id: {$in: userIds}}, {fields: {"services.password": 0, "services.loginTokens": 0, "emails.address": 0, "emails.verified": 0, "profile.feedDotz": 0}} );
});
