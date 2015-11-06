
let deleteDot = (dotId, inDotz, dotOwnerUserId, smartRef) => {

   //security checks:
  if (dotOwnerUserId !== Meteor.userId() ) {
    return false
  }

  check( dotId, String );
  check( inDotz, Array );
  check( dotOwnerUserId, String );
  check( smartRef, Object );

   //pull smartRef from all dotz parent:
   inDotz.forEach(function(dotId) {

       //is ConnectedToOthers:
       if (smartRef.isConnectedToOthers){
       Meteor.call('pullDotFromDotzConnectedByOthers', smartRef.dotId, smartRef.parentDot, function(error,result){
         if (error){
         console.log("pullDotFromDotzConnectedByOthers >> Error " + error);
         }
       })
       }

       //is ConnectedToOwner:
       else if ( smartRef.isConnectedToOthers === false) {
       Meteor.call('pullDotFromDotzConnectedByOwner', smartRef.dotId, smartRef.parentDot, function(error,result){
         if (error){
         console.log("pullDotFromDotzConnectedByOthers >> Error " + error);
         }
       })
       }

   });


    //pull from createdByUserDotz:
    Meteor.call('pullFromCreatedByUserDotz', Meteor.userId(), dotId, function(error,result) {
       if (error){
         console.log("pullFromCreatedByUserDotz >> Error " + error);
       }
    });

    //pull from User Connections Counter:
    Meteor.call('pullFromUserConnectivity', Meteor.userId(), smartRef.dotId, dotOwnerUserId, smartRef.parentDot, function(error,result) {
       if (error){
         console.log("pullFromUserConnectivity >> Error " + error);
       }
    });

    //remove dot from Dotz Collection:
    Meteor.call('removeDotFromDotzCollection', dotId, Meteor.userId(), function(error,result) {
      if (!error) {
        Bert.alert( 'Deleted', 'warning', 'growl-bottom-left' );
      }
      else {
        console.log("removeDotFromDotzCollection >> Error " + error);
      }
    });

};

Modules.both.Dotz.deleteDot = deleteDot;



