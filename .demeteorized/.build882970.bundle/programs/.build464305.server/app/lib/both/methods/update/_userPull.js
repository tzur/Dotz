(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/methods/update/_userPull.js                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
Meteor.methods({                                                       // 2
                                                                       //
  pullFromUserConnectivity: function (connectedUserId, dotId, belongsToUserId, parentDotId) {
    check(connectedUserId, String);                                    // 5
    check(dotId, String);                                              // 6
    check(belongsToUserId, String);                                    // 7
    check(parentDotId, String);                                        // 8
    var connectivityItem = {                                           // 9
      userId: connectedUserId,                                         // 10
      dotId: dotId,                                                    // 11
      parentDotId: parentDotId                                         // 12
    };                                                                 //
                                                                       //
    try {                                                              // 15
      Meteor.users.update(belongsToUserId, {                           // 16
        $pull: { "profile.userConnections": connectivityItem }         // 17
      });                                                              //
    } catch (exception) {                                              //
      return exception;                                                // 21
    }                                                                  //
  },                                                                   //
                                                                       //
  pullFromCreatedByUserDotz: function (userId, dotId) {                // 25
    //check( userId === Meteor.userId() );                             //
    check(userId, String);                                             // 27
    check(dotId, String);                                              // 28
    try {                                                              // 29
      Meteor.users.update(userId, {                                    // 30
        $pull: { "profile.createdByUserDotz": dotId }                  // 31
      });                                                              //
    } catch (exception) {                                              //
      return exception;                                                // 35
    }                                                                  //
  },                                                                   //
                                                                       //
  pullFromCreatedByUserLists: function (deletedDotId) {                // 39
    check(deletedDotId, String);                                       // 40
    try {                                                              // 41
      Meteor.users.update(Meteor.userId(), {                           // 42
        $pull: { "profile.createdByUserLists": deletedDotId }          // 43
      });                                                              //
    } catch (exception) {                                              //
      return exception;                                                // 47
    }                                                                  //
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_userPull.js.map
