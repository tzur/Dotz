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
    console.log(userId);                                               // 5
    Meteor.users.update({ _id: userId }, updateOptions);               // 6
  } catch (exeption) {                                                 //
    console.log(exeption);                                             // 8
    return exeption;                                                   // 9
  }                                                                    //
};                                                                     //
                                                                       //
Meteor.methods({                                                       // 13
  checkAndRemoveDotzFromFeed: function (smartRef, userId) {            // 14
    check(smartRef, Object);                                           // 15
    check(userId, String);                                             // 16
    var user = Meteor.users.findOne(userId);                           // 17
    if (user.profile.feedDotz) {                                       // 18
      var checkInterval = 0;                                           // 19
      if (user.profile.feedDotz.length < MAXIMUM_NUMBER_OF_FEED_DOTZ_TO_CHECK) {
        checkInterval = 0;                                             // 21
      } else {                                                         //
        checkInterval = user.profile.feedDotz.length - MAXIMUM_NUMBER_OF_FEED_DOTZ_TO_CHECK;
      }                                                                //
      for (var i = checkInterval; i < user.profile.feedDotz.length; i++) {
        if (user.profile.feedDotz[i].dot._id === smartRef.dot._id) {   // 27
          var updateOptions = {                                        // 28
            $pull: { "profile.feedDotz": { "dot._id": smartRef.dot._id } }
          };                                                           //
          _userUpdate(userId, updateOptions);                          // 31
        }                                                              //
      }                                                                //
    }                                                                  //
  },                                                                   //
  updateFeed: function (smartRef, userId) {                            // 36
    check(smartRef, Schema.dotSmartRef);                               // 37
    check(userId, String);                                             // 38
    Meteor.call('checkAndRemoveDotzFromFeed', smartRef, userId, function (error, result) {
      if (!error) {                                                    // 40
        var updateOptions = {                                          // 41
          $addToSet: { "profile.feedDotz": smartRef }                  // 42
        };                                                             //
        _userUpdate(userId, updateOptions);                            // 44
      } else {                                                         //
        console.log("ERROR" + error);                                  // 47
      }                                                                //
    });                                                                //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=userUpdate.js.map
