/*
  This module responsible to connect dot, he does all the needed actions, can be used
  at connect action and create action.
 */


/*
 * This function receive smartRef of a needed to be connected dot, and does all the logic
 * in order to makes the connections.
 */
let _updateUserConnectivity = (dotId, parentDotId) =>{
  let dot = Dotz.findOne(dotId);
  if(dot){
    let userId = dot.ownerUserId;
    Meteor.call('updateUserConnectivity', Meteor.userId(), dotId, userId, parentDotId ,function(error, result){
      if (error){
        console.log("Update user connectivity ERROR " + error );
      }
    });
  }
};
let connectDot = (smartRef) => {
  if (!Meteor.userId()){
    return false;
  }
  Meteor.call('addDotToConnectedDotzArray', smartRef, function(error, result){
      if (!error){
        if (smartRef.connection.actionName === CONNECT_ACTION){
          Meteor.call('addDotToInDotz',smartRef.dot._id, smartRef.connection.toParentDotId,function (error,result){
            if(error){
              console.log("Error at inDotz update at connect " + error);
            }
          });
        }
        Modules.both.Dotz.updateFeed(smartRef);
        _updateUserConnectivity(smartRef.dot._id, smartRef.connection.toParentDotId);
        Bert.alert( 'Connected :)', 'success', 'growl-bottom-left' );
      }
     else{
        console.log("Error" + error);
      }
   });
};
Modules.both.Dotz.connectDot = connectDot;
