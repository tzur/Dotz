(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/feed.js                                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _updateFeed = function (smartRef) {                                // 1
  if (!Meteor.userId()) {                                              // 2
    return false;                                                      // 3
  }                                                                    //
  var currentUser = Meteor.user();                                     // 5
  if (currentUser.profile.followers) {                                 // 6
    currentUser.profile.followers.forEach(function (followerId) {      // 7
      Meteor.call('updateFeed', smartRef, followerId, function (error, result) {
        if (error) {                                                   // 9
          console.log("Update feed Error" + error);                    // 10
        } else {                                                       //
          console.log("im here");                                      // 13
        }                                                              //
      });                                                              //
    });                                                                //
  }                                                                    //
};                                                                     //
Modules.both.Dotz.updateFeed = _updateFeed;                            // 19
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=feed.js.map
