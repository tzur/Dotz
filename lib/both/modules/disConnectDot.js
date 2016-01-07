Meteor.methods({
  disConnectDot(smartRef){
    check(smartRef, Schema.dotSmartRef);
    if (smartRef.connection.connectedByUserId != Meteor.userId() ) {
      return false
    }
    if (Meteor.isClient){
      Meteor.call('pullDotFromDotzConnectedArray', smartRef.dot, smartRef.connection.toParentDotId, function(error,result){
        if (!error){
          Bert.alert( 'Disconnected', 'warning', 'growl-bottom-left' );
        }
        else {
          console.log("pullDotFromDotzConnectedArray Error " + error);
        }
      });
    }
    else { //Server
      let belongsToUserId = Dotz.findOne(smartRef.connection.toParentDotId).ownerUserId;
      //pull from inDotz:
      Meteor.call('pullDotFromInDotz', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
        //pull from User Connections Counter:
        //params: connectedUserId, dotId, belongsToUserId, parentDotId
        if (!error) {
          //Meteor.call('pullFromUserConnectivity',
          //  Meteor.userId(), smartRef.dot._id, belongsToUserId, smartRef.connection.toParentDotId, function (error, result) {
          //    //pull the smartRef from the connectDotzArray:
          //    if (!error) {})
          Meteor.call('pullDotFromDotzConnectedArray', smartRef.dot, smartRef.connection.toParentDotId, function (error, result) {
            if (error) {
              console.log("pullDotFromDotzConnectedArray Error " + error);
            }
          });
        }
        else {
          console.log("pullDotFromInDotz >> Error " + error);
        }
      });
    }
  }
});

