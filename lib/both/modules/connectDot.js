/*
  This module responsible to connect dot, he does all the needed actions, can be used
  at connect action and create action.
 */



// This private method simply adds the new connected dot to the target dot inDotz field.
let _updateInDotz = (toBeAddedDotId, targetDotId) => {
  //to add callback to catch errors.
    Meteor.call('addDotToInDotz',toBeAddedDotId, targetDotId );
};

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
        console.log("Error " + error );
      }
    });
  }
};
let connectDot = (smartRef) => {

  Meteor.call('addDotToConnectedDotzArray', smartRef, function(error, result){
      if (!error){
        if (smartRef.connection.actionName === CONNECT_ACTION){
          _updateInDotz(smartRef.dot._id, smartRef.connection.toParentDotId);
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
