(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publications/dotPublish.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
/*                                                                     //
 * This publish is receiving profileDot and subscribe all of the dotz that were connected
 * by the owner.                                                       //
 * PLEASE FIND A BETTER NAME FOR THIS PUBLISH.                         //
 */                                                                    //
Meteor.publish('availableDotzForCreate', function (profileDot) {       // 7
  if (profileDot) {                                                    // 8
    var _ret = (function () {                                          //
      check(profileDot, Object);                                       // 9
      var dot = profileDot;                                            // 10
      var userDotzArray = [];                                          // 11
      if (dot && dot.dotzConnectedByOwner) {                           // 12
        dot.dotzConnectedByOwner.forEach(function (smartRef) {         // 13
          userDotzArray.push(smartRef.dot._id);                        // 14
        });                                                            //
        console.log(userDotzArray.length);                             // 16
        if (userDotzArray.length > 0) {                                // 17
          return {                                                     // 18
            v: Dotz.find({ _id: { $in: userDotzArray } })              //
          };                                                           //
        }                                                              //
      }                                                                //
    })();                                                              //
                                                                       //
    if (typeof _ret === 'object') return _ret.v;                       //
  }                                                                    //
});                                                                    //
                                                                       //
/*                                                                     //
 * This publish is userId and publishing his profile Dot               //
 */                                                                    //
Meteor.publish('profileDot', function (userId) {                       // 28
  if (userId) {                                                        // 29
    check(userId, String);                                             // 30
    var user = Meteor.users.findOne(userId);                           // 31
    return Dotz.find({ _id: user.profile.profileDotId });              // 32
  }                                                                    //
});                                                                    //
                                                                       //
///*                                                                   //
// * This publish is for publishing all the profile Dotz:              //
// */                                                                  //
//Meteor.publish('userProfileDotz', function(userId){                  //
//  if (userId){                                                       //
//    check(userId, String);                                           //
//    let user = Meteor.users.findOne(userId);                         //
//    let dotzConnectedByOwner = Dotz.findOne({_id: user.profile.profileDotId}).dotzConnectedByOwner;
//    let dotzConnectedByOwnerArray = [];                              //
//    dotzConnectedByOwner.forEach(function (dot) {                    //
//      dotzConnectedByOwnerArray.push(dot);                           //
//    });                                                              //
//    //let Dotz = Dotz.find({_id: user.profile.profileDotId});        //
//    return dotzConnectedByOwnerArray;                                //
//  }                                                                  //
//});                                                                  //
                                                                       //
/*                                                                     //
 * This publish is publishing for dot card NEED TO CUT FIELDS!!!!!!*******
 */                                                                    //
Meteor.publish('dotCard', function (dotId) {                           // 57
  check(dotId, String);                                                // 58
  return Dotz.find(dotId);                                             // 59
});                                                                    //
Meteor.publish('dotShow', function (dotId) {                           // 61
  if (dotId) {                                                         // 62
    check(dotId, String);                                              // 63
    return Dotz.find(dotId);                                           // 64
  }                                                                    //
});                                                                    //
                                                                       //
Meteor.publish('dotShowByDotSlug', function (dotSlug) {                // 68
  if (dotSlug) {                                                       // 69
    check(dotSlug, String);                                            // 70
    return Dotz.find({ "dotSlug": dotSlug });                          // 71
  }                                                                    //
});                                                                    //
                                                                       //
Meteor.publish('createByUserLists', function () {                      // 75
  var currentUser = Meteor.users.findOne(this.userId);                 // 76
  var createByUserDotz = currentUser.profile.createdByUserLists;       // 77
  createByUserDotz.push(currentUser.profile.profileDotId);             // 78
  return Dotz.find({ _id: { $in: createByUserDotz } });                // 79
});                                                                    //
                                                                       //
Meteor.publish('smartRefToUsersCursor', function (smartRefArray) {     // 82
  check(smartRefArray, Array);                                         // 83
  var userIds = [];                                                    // 84
  smartRefArray.forEach(function (smartRef) {                          // 85
    var dot = Dotz.findOne(smartRef.dot._id);                          // 86
    userIds.push(smartRef.connection.connectedByUserId);               // 87
    userIds.push(dot.ownerUserId);                                     // 88
  });                                                                  //
  return Meteor.users.find({ _id: { $in: userIds } }, { fields: { "services.password": 0, "services.loginTokens": 0, "emails.address": 0, "emails.verified": 0 } });
});                                                                    //
                                                                       //
Meteor.publish('smartRefToDotzCursor', function (smartRefArray) {      // 93
  check(smartRefArray, Array);                                         // 94
  var dotIds = [];                                                     // 95
  smartRefArray.forEach(function (smartRef) {                          // 96
    dotIds.push(smartRef.dot._id);                                     // 97
  });                                                                  //
  return Dotz.find({ _id: { $in: dotIds } }, { fields: { "services.password": 0, "services.loginTokens": 0, "emails.address": 0, "emails.verified": 0 } });
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=dotPublish.js.map
