
let disConnectDot = (smartRef) => {

  //security check:
  if (smartRef.connectedByUserId !== Meteor.userId() ) {
    return false
  }

  let belongsToUserId = Dotz.findOne(smartRef.parentDot).ownerUserId;
  //pull from inDotz:
  Meteor.call('pullDotFromInDotz', smartRef, function(error, result){

    //pull from User Connections Counter:
    //params: connectedUserId, dotId, belongsToUserId, parentDotId
    if (!error) {
      Meteor.call('pullFromUserConnectivity',
                  Meteor.userId(), smartRef.dotId, belongsToUserId, smartRef.parentDot, function(error,result) {

          //pull the smartRef from the relevant array:
          if (!error) {

              //is ConnectedToOthers:
              if (smartRef.isConnectedToOthers){
                Meteor.call('pullDotFromDotzConnectedByOthers', smartRef.dotId, smartRef.parentDot, function(error,result){
                  if (!error){
                    Bert.alert( 'Disconnected', 'warning', 'growl-bottom-left' );
                  }
                  else {
                    console.log("pullDotFromDotzConnectedByOthers >> Error " + error);
                  }
                })
              }

              //is ConnectedToOwner:
              else if ( smartRef.isConnectedToOthers === false) {
                Meteor.call('pullDotFromDotzConnectedByOwner', smartRef.dotId, smartRef.parentDot, function(error,result){
                  if (!error){
                    Bert.alert( 'Disconnected', 'warning', 'growl-bottom-left' );
                  }
                  else {
                    console.log("pullDotFromDotzConnectedByOwner >> Error " + error);
                  }
                })
              }
          }

          else {
            console.log("pullFromUserConnectivity >> Error " + error);
          }
      })
    }

    else {
      console.log("pullDotFromInDotz >> Error " + error);
    }
  });

};

Modules.both.Dotz.disConnectDot = disConnectDot;
