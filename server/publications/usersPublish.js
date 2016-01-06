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

Meteor.publish('userConnectivity', function(userId){
  check(userId, String);

  let data = UserConnections.find({userId: userId});

  if ( data ) {
    return data;
  }

  return this.ready();

  //return [
  //  Dotz.find(dotId, {fields: {"title": 1, "ownerUserId": 1, "coverImageUrl": 1, "linkName": 1, "connectedDotzArray": 1}}),
  //  Meteor.users.find(ownerUserId, {fields: {"username": 1, "profile.userSlug": 1, "profile.profileImage": 1}})
  //];
});
