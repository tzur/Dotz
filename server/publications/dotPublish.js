
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
        userDotzArray.push(smartRef.dotId);
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

/*
 * This publish is publishing a whole Dot (only for show?):
 */
Meteor.publish( 'dotShow', function( dotId ) {
  if (dotId) {
    check(dotId, String);
    return Dotz.find(dotId);
  }
});

/*
 * This publish the dotzConnectedByOwner:
 */
Meteor.publish('dotzConnectedByOwner', function(dotId){
  if (dotId){
    check(dotId, String);
    let dot = Dotz.findOne(dotId);
    let dotzConnectedByOwnerArray = [];
    console.log(dot.dotzConnectedByOwner);
    if (dot.dotzConnectedByOwner){
      dot.dotzConnectedByOwner.forEach(function (smartRef) {
        dotzConnectedByOwnerArray.push(smartRef.dotId);
      });
    }
    return Dotz.find({_id: {$in: dotzConnectedByOwnerArray}});
  }
});

/*
 * This publish the dotzConnectedByOthers:
 */
Meteor.publish('dotzConnectedByOthers', function(dotId){
  if (dotId){
    check(dotId, String);
    let dot = Dotz.findOne(dotId);
    let dotzConnectedByOthersArray = [];
    if (dot.dotzConnectedByOthers){
      dot.dotzConnectedByOthers.forEach(function (smartRef) {
        dotzConnectedByOthersArray.push(smartRef.dotId);
      });

    }
    return Dotz.find({_id: {$in: dotzConnectedByOthersArray}});
  }
});

Meteor.publish('createByUserDotz', function() {
  let currentUser = Meteor.users.findOne(this.userId);
  let createByUserDotz = currentUser.profile.createdByUserDotz;
  createByUserDotz.push(currentUser.profile.profileDotId);
  return Dotz.find({_id: {$in: createByUserDotz}});
});

Meteor.publish('smartRefToUsersCursor', function(smartRefArray){
  check(smartRefArray, Array);
  let userIds = [];
  smartRefArray.forEach(function(smartRef){
    let dot = Dotz.findOne(smartRef.dotId);
    userIds.push(smartRef.connectedByUserId);
    userIds.push(dot.ownerUserId);
  });
  return Meteor.users.find({_id: {$in: userIds}});
});

Meteor.publish('smartRefToDotzCursor', function(smartRefArray) {
  check(smartRefArray, Array);
  let dotIds = [];
  smartRefArray.forEach(function (smartRef) {
    dotIds.push(smartRef.dotId);
  });
  return Dotz.find({_id: {$in: dotIds}});

});
