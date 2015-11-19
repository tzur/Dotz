(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/follow.js                                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _followUser = function (followingUserId, followedUserId) {         // 1
  Meteor.call('followUser', followingUserId, followedUserId, function (error, result) {
    if (!error) {                                                      // 3
      Meteor.call('updateFollowedWithFollow', followingUserId, followedUserId, function (error, result) {
        if (error) {                                                   // 5
          console.log("Error" + error);                                // 6
        }                                                              //
      });                                                              //
    } else {                                                           //
      console.log("Error" + error);                                    // 11
    }                                                                  //
  });                                                                  //
};                                                                     //
                                                                       //
var _unFollowUser = function (followingUserId, followedUserId) {       // 16
  Meteor.call('unFollowUser', followingUserId, followedUserId, function (error, result) {
    if (!error) {                                                      // 18
      Meteor.call('updateFollowedWithUnFollow', followingUserId, followedUserId, function (error, result) {
        if (error) {                                                   // 20
          console.log("Error" + error);                                // 21
        }                                                              //
      });                                                              //
    } else {                                                           //
      console.log("Error" + error);                                    // 26
    }                                                                  //
  });                                                                  //
};                                                                     //
                                                                       //
Modules.both.Dotz.followUser = _followUser;                            // 31
Modules.both.Dotz.unFollowUser = _unFollowUser;                        // 32
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=follow.js.map
