
/*
 * This publish is receiving profileDot and subscribe all of the dotz that were connected
 * by the owner.
 * PLEASE FIND A BETTER NAME FOR THIS PUBLISH.
 */
Meteor.publish('availableDotzForCreate', function(profileDot){
  if (profileDot) {
    check(profileDot, Object);
    let dot = profileDot;
    let userDotzArray = [];
    if (dot && dot.dotzConnectedByOwner) {
      dot.dotzConnectedByOwner.forEach(function (smartRef) {
        userDotzArray.push(smartRef.dot._id);
      });
      console.log(userDotzArray.length);
      if (userDotzArray.length > 0) {
        return Dotz.find({_id: {$in: userDotzArray}});
      }
    }
  }

});

/*
 * This publish is userId and publishing his profile Dot
 */
Meteor.publish('profileDot', function(userId){
  if (userId){
    check(userId, String);
    let user = Meteor.users.findOne(userId);
    return Dotz.find({_id: user.profile.profileDotId});
  }
});

///*
// * This publish is for publishing all the profile Dotz:
// */
//Meteor.publish('userProfileDotz', function(userId){
//  if (userId){
//    check(userId, String);
//    let user = Meteor.users.findOne(userId);
//    let dotzConnectedByOwner = Dotz.findOne({_id: user.profile.profileDotId}).dotzConnectedByOwner;
//    let dotzConnectedByOwnerArray = [];
//    dotzConnectedByOwner.forEach(function (dot) {
//      dotzConnectedByOwnerArray.push(dot);
//    });
//    //let Dotz = Dotz.find({_id: user.profile.profileDotId});
//    return dotzConnectedByOwnerArray;
//  }
//});


Meteor.publish('mobileDotCard', function(dotId, ownerUserId){
  check(dotId, String);
  check(ownerUserId, String);

  //let data = ;



  return [
    Dotz.find(dotId, {fields: {"title": 1, "ownerUserId": 1, "coverImageUrl": 1, "linkName": 1, "connectedDotzArray": 1}}),
    Meteor.users.find(ownerUserId, {fields: {"username": 1, "profile.userSlug": 1, "profile.profileImage": 1}})
  ];
});

Meteor.publish( 'inbox', function( chatUserStatus ) {
  check( chatUserStatus, Boolean );

  var userId = this.userId,
    data = [
      Email.find( { "owner": userId } ),
      ChatUsers.find( { "online": chatUserStatus }, {
        fields: {
          "name": 1,
          "online": 1,
          "avatar": 1
        }
      })
    ];

  if ( data ) {
    return data;
  }

  return this.ready();
});


/*
 * This publish is publishing for dot card NEED TO CUT FIELDS!!!!!!*******
 */
Meteor.publish('dotCard', function(dotId){
  check(dotId, String);
  return Dotz.find(dotId)
});

Meteor.publish('dotShow', function( dotId ) {
  check(dotId, String);
  if (dotId) {
    return Dotz.find(dotId);
  }
});

Meteor.publish( 'dotShowByDotSlug', function( dotSlug ) {
  check(dotSlug, String);
  if (dotSlug) {
    return Dotz.find({"dotSlug": dotSlug});
  }
});

Meteor.publish('createByUserLists', function() {
  let currentUser = Meteor.users.findOne(this.userId);
  let createByUserDotz = currentUser.profile.createdByUserLists;
  createByUserDotz.push(currentUser.profile.profileDotId);
  return Dotz.find({_id: {$in: createByUserDotz}});
});

Meteor.publish('smartRefToUsersCursor', function(smartRefArray){
  check(smartRefArray, Array);
  let userIds = [];
  smartRefArray.forEach(function(smartRef){
    let dot = Dotz.findOne(smartRef.dot._id);
    userIds.push(smartRef.connection.connectedByUserId);
    userIds.push(dot.ownerUserId);
  });
  return Meteor.users.find({_id: {$in: userIds}}, {fields: {"services.password": 0, "services.loginTokens": 0, "emails.address": 0, "emails.verified": 0}} );
});

Meteor.publish('smartRefToDotzCursor', function(smartRefArray) {
  check(smartRefArray, Array);
  let dotIds = [];
  smartRefArray.forEach(function (smartRef) {
    dotIds.push(smartRef.dot._id);
  });
  return Dotz.find({_id: {$in: dotIds}}, {fields: {"services.password": 0, "services.loginTokens": 0, "emails.address": 0, "emails.verified": 0}});
});

Meteor.publish('createdByUserListsForAutoGenerate', function(userName) {
  check(userName, String);
  let currentUser = Meteor.users.findOne({username: userName});
  let createByUserLists = currentUser.profile.createdByUserLists;
  createByUserLists.push(currentUser.profile.profileDotId);
  return Dotz.find({_id: {$in: createByUserLists}});
});


