(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/follow.js                                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _isMeteorUserCanFollowUser = function (followedUserId) {           // 1
  Meteor.user().profile.following.forEach(function (id) {              // 2
    if (id === followedUserId) {                                       // 3
      return false;                                                    // 4
    }                                                                  //
  });                                                                  //
  return true;                                                         // 7
};                                                                     //
                                                                       //
var _followUser = function (followingUserId, followedUserId) {         // 10
  // security check:                                                   //
  if (followingUserId != Meteor.userId()) {                            // 12
    return false;                                                      // 13
  }                                                                    //
  if (followingUserId === followedUserId || !_isMeteorUserCanFollowUser(followedUserId)) {
    return false;                                                      // 16
  }                                                                    //
  Meteor.call('followUser', followingUserId, followedUserId, function (error, result) {
    if (!error) {                                                      // 19
      Meteor.call('updateFollowedWithFollow', followingUserId, followedUserId, function (error, result) {
        if (error) {                                                   // 21
          console.log("Error" + error);                                // 22
        }                                                              //
      });                                                              //
      Meteor.call('_addRecentDotzWhenFollowing', followingUserId, followedUserId);
    } else {                                                           //
      console.log("Error" + error);                                    // 28
    }                                                                  //
  });                                                                  //
};                                                                     //
                                                                       //
var _unFollowUser = function (followingUserId, followedUserId) {       // 33
  if (followingUserId === followedUserId) {                            // 34
    console.log("_unFollowUser : _isMeteorUserCanFollowUser returned false !@#!@#!@#!@#!@#!@#!@#2");
    return false;                                                      // 36
  }                                                                    //
  Meteor.call('unFollowUser', followingUserId, followedUserId, function (error, result) {
    if (!error) {                                                      // 39
      Meteor.call('updateFollowedWithUnFollow', followingUserId, followedUserId, function (error, result) {
        if (error) {                                                   // 41
          console.log("Error" + error);                                // 42
        }                                                              //
      });                                                              //
    } else {                                                           //
      console.log("Error" + error);                                    // 47
    }                                                                  //
  });                                                                  //
};                                                                     //
                                                                       //
Modules.both.Dotz.followUser = _followUser;                            // 52
Modules.both.Dotz.unFollowUser = _unFollowUser;                        // 53
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=follow.js.map
