(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publications/usersPublish.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish('user', function (userId) {                             // 1
  check(userId, String, Object);                                       // 2
  if (userId) {                                                        // 3
    return Meteor.users.find(userId, { fields: { "services.password": 0, "emails.address": 0, "services.loginTokens": 0, "emails.verified": 0, "profile.feedDotz": 0 } });
  }                                                                    //
});                                                                    //
                                                                       //
//Users.find({}, {fields: {password: 0, hash: 0}})                     //
                                                                       //
Meteor.publish('userByUserSlug', function (userSlug) {                 // 10
  if (userSlug) {                                                      // 11
    check(userSlug, String);                                           // 12
    return Meteor.users.find({ "profile.userSlug": userSlug }, { fields: { "services.password": 0, "services.loginTokens": 0, "emails.address": 0, "emails.verified": 0, "profile.feedDotz": 0 } });
  }                                                                    //
  //return this.ready();                                               //
});                                                                    //
                                                                       //
Meteor.publish('dotzArrayToUserCursor', function (dotzArray) {         // 18
  check(dotzArray, Array);                                             // 19
  var userIds = [];                                                    // 20
  var currentDot = undefined;                                          // 21
  dotzArray.forEach(function (dot) {                                   // 22
    currentDot = Dotz.findOne(dot._id);                                // 23
    userIds.push(currentDot.ownerUserId);                              // 24
  });                                                                  //
  return Meteor.users.find({ _id: { $in: userIds } }, { fields: { "services.password": 0, "services.loginTokens": 0, "emails.address": 0, "emails.verified": 0, "profile.feedDotz": 0 } });
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=usersPublish.js.map
