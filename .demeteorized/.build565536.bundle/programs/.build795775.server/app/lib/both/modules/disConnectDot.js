(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/disConnectDot.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
var disConnectDot = function (smartRef) {                              // 2
                                                                       //
  //security check:                                                    //
  if (smartRef.connection.connectedByUserId != Meteor.userId()) {      // 5
    return false;                                                      // 6
  }                                                                    //
  var belongsToUserId = Dotz.findOne(smartRef.connection.toParentDotId).ownerUserId;
  //pull from inDotz:                                                  //
  Meteor.call('pullDotFromInDotz', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
    //pull from User Connections Counter:                              //
    //params: connectedUserId, dotId, belongsToUserId, parentDotId     //
    if (!error) {                                                      // 13
      Meteor.call('pullFromUserConnectivity', Meteor.userId(), smartRef.dot._id, belongsToUserId, smartRef.connection.toParentDotId, function (error, result) {
        //pull the smartRef from the connectDotzArray:                 //
        if (!error) {                                                  // 17
          Meteor.call('pullDotFromDotzConnectedArray', smartRef.dot, smartRef.connection.toParentDotId, function (error, result) {
            if (!error) {                                              // 19
              Bert.alert('Disconnected', 'warning', 'growl-bottom-left');
            } else {                                                   //
              console.log("pullDotFromDotzConnectedArray Error " + error);
            }                                                          //
          });                                                          //
        } else {                                                       //
          console.log("pullFromUserConnectivity >> Error " + error);   // 28
        }                                                              //
      });                                                              //
    } else {                                                           //
      console.log("pullDotFromInDotz >> Error " + error);              // 33
    }                                                                  //
  });                                                                  //
};                                                                     //
                                                                       //
Modules.both.Dotz.disConnectDot = disConnectDot;                       // 39
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=disConnectDot.js.map
