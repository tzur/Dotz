
let deleteDot = (dot, smartRef) => {


   //this.dot._id, this.dot.inDotz, this.dot.ownerUserId
  //dotId, inDotz, dotOwnerUserId


   //security checks:
  if (dotOwnerUserId !== Meteor.userId() ) {
    return false
  }
  check( dot, Object );
  check( smartRef, Object );
  check( dot.inDotz, Array );
  check( dot.ownerUserId, String );
  check( smartRef.dotId, String );
  check( smartRef.parentDot, String );

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

  //pull dotId from all Children's inDotz (to update the "connect" counter):
  if (dot.dotzConnectedByOwner) {
      dot.dotzConnectedByOwner.forEach(function(smartRef) {
          Meteor.call('pullDotFromInDotz', smartRef.dotId, smartRef.parentDot, function(error,result){
              if (error){
                console.log("pullDotFromInDotz >> Error " + error);
              }
          })
      });
  }
  else if (dot.dotzConnectedByOthers) {
      dot.dotzConnectedByOthers.forEach(function(smartRef) {
          Meteor.call('pullDotFromInDotz', smartRef.dotId, smartRef.parentDot, function(error,result){
              if (error){
                console.log("pullDotFromInDotz >> Error " + error);
              }
          })
      });
  }

  //pull from createdByUserDotz:
  Meteor.call('pullFromCreatedByUserDotz', Meteor.userId(), dot._id, function(error,result) {
       if (error){
         console.log("pullFromCreatedByUserDotz >> Error " + error);
       }
  });

  //pull from User Connections Counter:
  Meteor.call('pullFromUserConnectivity', Meteor.userId(), smartRef.dotId, dot.ownerUserId, smartRef.parentDot, function(error,result) {
       if (error){
         console.log("pullFromUserConnectivity >> Error " + error);
       }
  });

  //remove dot from Dotz Collection:
  Meteor.call('removeDotFromDotzCollection', dot._id, Meteor.userId(), function(error,result) {
      if (!error) {
        Bert.alert( 'Deleted', 'warning', 'growl-bottom-left' );
      }
      else {
        console.log("removeDotFromDotzCollection >> Error " + error);
      }
  });

};

Modules.both.Dotz.deleteDot = deleteDot;



