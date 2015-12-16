(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/update/userUpdate.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _userUpdate = function (userId, updateOptions) {                   // 1
  try {                                                                // 2
    check(updateOptions, Object);                                      // 3
    check(userId, String);                                             // 4
    Meteor.users.update({ _id: userId }, updateOptions);               // 5
  } catch (exeption) {                                                 //
    console.log(exeption);                                             // 7
    return exeption;                                                   // 8
  }                                                                    //
};                                                                     //
                                                                       //
Meteor.methods({                                                       // 12
  checkAndRemoveDotzFromFeed: function (smartRef, userId) {            // 13
    check(smartRef, Object);                                           // 14
    check(userId, String);                                             // 15
    var user = Meteor.users.findOne(userId);                           // 16
    if (user.profile.feedDotz) {                                       // 17
      var checkInterval = 0;                                           // 18
      if (user.profile.feedDotz.length < MAXIMUM_NUMBER_OF_FEED_DOTZ_TO_CHECK) {
        checkInterval = 0;                                             // 20
      } else {                                                         //
        checkInterval = user.profile.feedDotz.length - MAXIMUM_NUMBER_OF_FEED_DOTZ_TO_CHECK;
      }                                                                //
      for (var i = checkInterval; i < user.profile.feedDotz.length; i++) {
        if (user.profile.feedDotz[i].dot._id === smartRef.dot._id) {   // 26
          var updateOptions = {                                        // 27
            $pull: { "profile.feedDotz": { "dot._id": smartRef.dot._id } }
          };                                                           //
          _userUpdate(userId, updateOptions);                          // 30
        }                                                              //
      }                                                                //
    }                                                                  //
  },                                                                   //
  updateFeed: function (smartRef, userId) {                            // 35
    check(smartRef, Schema.dotSmartRef);                               // 36
    check(userId, String);                                             // 37
    Meteor.call('checkAndRemoveDotzFromFeed', smartRef, userId, function (error, result) {
      if (!error) {                                                    // 39
        var updateOptions = {                                          // 40
          $addToSet: { "profile.feedDotz": smartRef }                  // 41
        };                                                             //
        _userUpdate(userId, updateOptions);                            // 43
      } else {                                                         //
        console.log("ERROR" + error);                                  // 46
      }                                                                //
    });                                                                //
  },                                                                   //
                                                                       //
  _addRecentDotzWhenFollowing: function (followingUserId, followedUserId) {
    check(followingUserId, String);                                    // 52
    check(followedUserId, String);                                     // 53
                                                                       //
    var followedUser = Meteor.users.findOne(followedUserId);           // 55
    var dotzIdArray = [];                                              // 56
                                                                       //
    var listsCreatedByUser = followedUser.profile.createdByUserLists;  // 58
    var dotzCreatedByUser = followedUser.profile.createdByUserDotz;    // 59
                                                                       //
    if (listsCreatedByUser.length > 1) {                               // 61
      dotzIdArray.push(listsCreatedByUser[listsCreatedByUser.length - 2]);
      dotzIdArray.push(listsCreatedByUser[listsCreatedByUser.length - 1]);
    }                                                                  //
                                                                       //
    if (dotzCreatedByUser.length > 0) {                                // 66
      dotzIdArray.push(dotzCreatedByUser[dotzCreatedByUser.length - 1]);
    }                                                                  //
                                                                       //
    if (dotzIdArray) {                                                 // 70
      dotzIdArray.forEach(function (dotId) {                           // 71
        var dot = undefined;                                           // 72
        dot = Dotz.findOne(dotId);                                     // 73
        if (dot) {                                                     // 74
          var smartRef = new Modules.both.Dotz.smartRef(dotId, dot.ownerUserId, followedUser.profile.profileDotId, CREATE_ACTION, followedUserId);
          if (smartRef) {                                              // 76
            Meteor.call('updateFeed', smartRef, followingUserId);      // 77
          }                                                            //
        }                                                              //
        //console.log(smartRef);                                       //
        //let updateOptions = {                                        //
        //  $addToSet: {"profile.feedDotz": smartRef}                  //
        //};                                                           //
        //_userUpdate(Meteor.userId(), updateOptions)                  //
      });                                                              //
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=userUpdate.js.map
