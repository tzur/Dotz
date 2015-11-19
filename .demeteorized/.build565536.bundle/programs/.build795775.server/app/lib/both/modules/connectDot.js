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
var _updateUserConnectivity = function (dotId, parentDotId) {          // 11
  var dot = Dotz.findOne(dotId);                                       // 12
  if (dot) {                                                           // 13
    var userId = dot.ownerUserId;                                      // 14
    Meteor.call('updateUserConnectivity', Meteor.userId(), dotId, userId, parentDotId, function (error, result) {
      if (error) {                                                     // 16
        console.log("Update user connectivity ERROR " + error);        // 17
      }                                                                //
    });                                                                //
  }                                                                    //
};                                                                     //
var connectDot = function (smartRef) {                                 // 22
                                                                       //
  Meteor.call('addDotToConnectedDotzArray', smartRef, function (error, result) {
    if (!error) {                                                      // 25
      if (smartRef.connection.actionName === CONNECT_ACTION) {         // 26
        Meteor.call('addDotToInDotz', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
          if (error) {                                                 // 28
            console.log("Error at inDotz update at connect " + error);
          }                                                            //
        });                                                            //
      }                                                                //
      Modules.both.Dotz.updateFeed(smartRef);                          // 33
      _updateUserConnectivity(smartRef.dot._id, smartRef.connection.toParentDotId);
      Bert.alert('Connected :)', 'success', 'growl-bottom-left');      // 35
    } else {                                                           //
      console.log("Error" + error);                                    // 38
    }                                                                  //
  });                                                                  //
};                                                                     //
Modules.both.Dotz.connectDot = connectDot;                             // 42
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=connectDot.js.map
