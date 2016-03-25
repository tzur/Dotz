Meteor.publish( 'user', function( userId ) {
  check(userId, String, Object);
  if (userId) {
    return Meteor.users.find(userId, {fields: {"services.password": 0, "emails.address": 0, "services.loginTokens": 0, "emails.verified": 0, "profile.feedDotz": 0}});
  }
});

Meteor.publish( 'userByUserSlug1-OLD', function( userSlug ) {
  if (userSlug) {
    check(userSlug, String);
    return Meteor.users.find( {"profile.userSlug": userSlug}, {fields: {"services.password": 0, "services.loginTokens": 0, "emails.address": 0, "emails.verified": 0, "profile.feedDotz": 0}});
  }
  //return this.ready();
});

Meteor.publish('userByUserSlug', function(userSlug){
  check(userSlug, String);
  let user = Meteor.users.findOne({"profile.userSlug": userSlug});
  let data;
  if (user) {
    data = [
      Meteor.users.find({"profile.userSlug": userSlug},
        {fields: {
          "username": 1,
          "profile.userSlug": 1,
          "profile.description": 1,
          "profile.profileImage": 1,
          "profile.coverImage": 1,
          "profile.userType": 1,
          "profile.shareDotId": 1, //TBD..
          "profile.profileDotId": 1,
          "profile.createdByUserLists": 1,
          "profile.location": 1,
          "profile.userAddress": 1,
          "profile.websiteUrl": 1,
          "profile.facebookAccountUrl": 1,
          "profile.twitterAccountUrl": 1,
          "profile.googleAccountUrl": 1
        }
        }),

      Dotz.find({_id: user.profile.profileDotId}, //TBD
        {fields: {
          "isOpen": 1,
          "ownerUserId": 1,
          "connectedDotzArray": 1,
          "relatedDotzArray": 1
        }
        }),

      UserConnections.find({userId: user._id} //TBD: right now we are actually publishing the full Doc :(
        //,
        //{fields: {
        //  userId: 1,
        //  createdByUserDotz: 1, //TBD
        //  likesMadeByUserCounter: 1,
        //  connectionsMadeByUserCounter:1,
        //  peopleConnectedMyDotzCounter: 1,
        //  peopleLikedMyConnectionsCounter:1,
        //  peopleLikedMyDotzCounter: 1,
        //  createdByUserDotzCounter: 1}
        //}
      )
    ];
  }


  if ( data ) {
    return data;
  }
  return this.ready();
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
