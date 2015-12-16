(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/disConnectDot.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  disConnectDot: function (smartRef) {                                 // 2
    check(smartRef, Schema.dotSmartRef);                               // 3
    if (smartRef.connection.connectedByUserId != Meteor.userId()) {    // 4
      return false;                                                    // 5
    }                                                                  //
    if (Meteor.isClient) {                                             // 7
      Meteor.call('pullDotFromDotzConnectedArray', smartRef.dot, smartRef.connection.toParentDotId, function (error, result) {
        if (!error) {                                                  // 9
          Bert.alert('Disconnected', 'warning', 'growl-bottom-left');  // 10
        } else {                                                       //
          console.log("pullDotFromDotzConnectedArray Error " + error);
        }                                                              //
      });                                                              //
    } else {                                                           //
      (function () {                                                   //
        //Server                                                       //
        var belongsToUserId = Dotz.findOne(smartRef.connection.toParentDotId).ownerUserId;
        //pull from inDotz:                                            //
        Meteor.call('pullDotFromInDotz', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
          //pull from User Connections Counter:                        //
          //params: connectedUserId, dotId, belongsToUserId, parentDotId
          if (!error) {                                                // 23
            Meteor.call('pullFromUserConnectivity', Meteor.userId(), smartRef.dot._id, belongsToUserId, smartRef.connection.toParentDotId, function (error, result) {
              //pull the smartRef from the connectDotzArray:           //
              if (!error) {                                            // 27
                Meteor.call('pullDotFromDotzConnectedArray', smartRef.dot, smartRef.connection.toParentDotId, function (error, result) {
                  if (error) {                                         // 29
                    console.log("pullDotFromDotzConnectedArray Error " + error);
                  }                                                    //
                });                                                    //
              } else {                                                 //
                console.log("pullFromUserConnectivity >> Error " + error);
              }                                                        //
            });                                                        //
          } else {                                                     //
            console.log("pullDotFromInDotz >> Error " + error);        // 40
          }                                                            //
        });                                                            //
      })();                                                            //
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=disConnectDot.js.map
