(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/connectDot.js                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/*                                                                     //
  This module responsible to connect dot, he does all the needed actions, can be used
  at connect action and create action.                                 //
 */                                                                    //
                                                                       //
/*                                                                     //
 * This function receive smartRef of a needed to be connected dot, and does all the logic
 * in order to makes the connections.                                  //
 */                                                                    //
Meteor.methods({                                                       // 11
  connectDot: function (smartRef) {                                    // 12
    check(smartRef, Schema.dotSmartRef);                               // 13
    if (!Meteor.userId()) {                                            // 14
      return false;                                                    // 15
    }                                                                  //
    var _updateUserConnectivity = function (dotId, parentDotId) {      // 17
      var dot = Dotz.findOne(dotId);                                   // 18
      if (dot) {                                                       // 19
        var userId = dot.ownerUserId;                                  // 20
        Meteor.call('updateUserConnectivity', Meteor.userId(), dotId, userId, parentDotId, function (error, result) {
          if (error) {                                                 // 22
            console.log("Update user connectivity ERROR " + error);    // 23
          }                                                            //
        });                                                            //
      }                                                                //
    };                                                                 //
    // Client Wave:                                                    //
    if (Meteor.isClient) {                                             // 29
      Meteor.call('addDotToConnectedDotzArray', smartRef, function (error, result) {
        if (!error) {                                                  // 31
          Bert.alert('Connected :)', 'success', 'growl-bottom-left');  // 32
        } else {                                                       //
          console.log("Error" + error);                                // 35
        }                                                              //
      });                                                              //
      if (smartRef.connection.actionName === CONNECT_ACTION) {         // 38
        Meteor.call('addDotToInDotz', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
          if (error) {                                                 // 40
            console.log("Error at inDotz update at connect " + error);
          }                                                            //
        });                                                            //
      }                                                                //
    }                                                                  //
    // Server Wave:                                                    //
    if (Meteor.isServer) {                                             // 47
      Meteor.call('addDotToConnectedDotzArray', smartRef, function (error, result) {
        if (!error) {                                                  // 49
          if (smartRef.connection.actionName === CONNECT_ACTION) {     // 50
            Meteor.call('addDotToInDotz', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
              if (error) {                                             // 52
                console.log("Error at inDotz update at connect " + error);
              }                                                        //
            });                                                        //
          }                                                            //
          Modules.both.Dotz.updateFeed(smartRef);                      // 57
          _updateUserConnectivity(smartRef.dot._id, smartRef.connection.toParentDotId);
        } else {                                                       //
          console.log("Error" + error);                                // 61
        }                                                              //
      });                                                              //
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=connectDot.js.map
