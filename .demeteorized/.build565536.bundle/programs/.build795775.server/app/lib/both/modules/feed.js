(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/feed.js                                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _updateFeed = function (smartRef) {                                // 1
  var currentUser = Meteor.user();                                     // 2
  if (currentUser.profile.followers) {                                 // 3
    currentUser.profile.followers.forEach(function (followerId) {      // 4
      Meteor.call('updateFeed', smartRef, followerId, function (error, result) {
        if (error) {                                                   // 6
          console.log("Update feed Error" + error);                    // 7
        }                                                              //
      });                                                              //
    });                                                                //
  }                                                                    //
};                                                                     //
Modules.both.Dotz.updateFeed = _updateFeed;                            // 13
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=feed.js.map
