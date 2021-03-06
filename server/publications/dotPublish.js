
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


Meteor.publish('mobileDotCard', function(dotId, ownerUserId, connectedByUserId){
  check(dotId, String);
  check(ownerUserId, String);
  check(connectedByUserId, String);

  let data = [
    Dotz.find(dotId,
      {fields: {
        "isOpen": 1,
        "dotType": 1,
        "dotSubType": 1,
        "dotColor": 1,
        "title": 1,
        "dotSlug": 1,
        "bodyText": 1,
        "ownerUserId": 1,
        "coverImageUrl": 1,
        "facebookAuthorId": 1,
        "linkUrl": 1,
        "linkName": 1,
        "category": 1,
        "totalUpvotes": 1,
        "location.name": 1,
        "location.address": 1,
        "location.googleMapsUrl": 1,
        "startDateAndHour": 1,
        "endDateAndHour": 1,
        "repeated": 1,
        "multipleEventsNote": 1,
        "price": 1,
        "currency": 1,
        "showDotzCounter": 1,
        "inDotz": 1, //TBD
        "selfSuperTags": 1,
        "superTagsToFilterConnectedDotz": 1,
        "connectedDotzArray": 1} //TBD
      }),
    Meteor.users.find({_id: { $in: [ownerUserId,connectedByUserId] }}, //TBD..
    {fields: {
        "username": 1,
        "profile.userSlug": 1,
        "profile.profileImage": 1}
      })
  ];

  if ( data ) {
    return data;
  }

  return this.ready();
});



Meteor.publish('profileDotCard', function(dotId, ownerUserId, connectedByUserId){
  check(dotId, String);
  check(ownerUserId, String);
  check(connectedByUserId, String);

  let data = [
    Dotz.find(dotId,
      {fields: {
        "isOpen": 1,
        "dotType": 1,
        "dotSubType": 1,
        "dotColor": 1,
        "title": 1,
        "dotSlug": 1,
        "bodyText": 1,
        "ownerUserId": 1,
        "coverImageUrl": 1,
        "facebookAuthorId": 1,
        "linkUrl": 1,
        "linkName": 1,
        "category": 1,
        "totalUpvotes": 1,
        "location.name": 1,
        "location.address": 1,
        "location.googleMapsUrl": 1,
        "startDateAndHour": 1,
        "endRepeatedDate": 1,
        "repeated": 1,
        "multipleEventsNote": 1,
        "price": 1,
        "currency": 1,
        //"inDotz": 1, //TBD
        //"connectedDotzArray": 1, //TBD
        "showDotzCounter": 1}
      }),
    Meteor.users.find({_id: { $in: [ownerUserId,connectedByUserId] }}, //TBD..
      {fields: {
        "username": 1,
        "profile.userSlug": 1,
        "profile.profileImage": 1}
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

//Meteor.publish('dotShow', function( dotId ) {
//  check(dotId, String);
//  if (dotId) {
//    return Dotz.find(dotId);
//  }
//});

//TODO: make smarter publish.. @otni
Meteor.publish( 'dotShowByDotId', function( dotId ) {
  check(dotId, String);
    console.log("dotId >>>>>>>>>>>>>> " + dotId)
  return Dotz.find({_id: dotId});

  //if (dotId) {
  //  return Dotz.find({_id: dotId});
  //}
});

Meteor.publish('createByUserLists', function() {
  let currentUser = Meteor.users.findOne(this.userId);
  let createByUserListsSmartRef = currentUser.profile.createdByUserLists;
  let createByUserLists = [];
  createByUserListsSmartRef.forEach(function(smartRef){
    createByUserLists.push(smartRef.dot._id)
  });
  createByUserLists.push(currentUser.profile.profileDotId);
  return Dotz.find({_id: {$in: createByUserLists}});
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


