
let deleteDot = (dot, smartRef) => {

   //security checks:
  if (dot.ownerUserId !== Meteor.userId() ) {
    return false
  }
  check( dot, Object );
  check( smartRef, Object );
  check( dot.inDotz, Array );
  check( dot.ownerUserId, String );
  check( smartRef.dotId, String );
  check( smartRef.parentDot, String );

   //pull smartRef from all dotz parent:
  let parentDot;
   dot.inDotz.forEach(function(parentDotId) {

       //is ConnectedToOthers:
       if (smartRef.isConnectedToOthers){
       Meteor.call('pullDotFromDotzConnectedByOthers', dot._id, parentDotId, function(error,result){
           if (error){
           console.log("pullDotFromDotzConnectedByOthers >> Error " + error);
           }
       })
       }

       //is ConnectedToOwner:
       else if ( smartRef.isConnectedToOthers === false) {
       Meteor.call('pullDotFromDotzConnectedByOwner', dot._id, parentDotId, function(error,result){
           if (error){
           console.log("pullDotFromDotzConnectedByOthers >> Error " + error);
           }
       })
       }
     //pull from User Connections Counter:
     parentDot = Dotz.findOne(parentDotId);
     Meteor.call('pullFromUserConnectivity', Meteor.userId(), dot._id, parentDot.ownerUserId, parentDotId, function(error,result) {
       if (error){
         console.log("pullFromUserConnectivity >> Error " + error);
       }
     });

   });

  //pull dotId from all Children's inDotz (to update the "connect" counter):
  if (dot.dotzConnectedByOwner) {
      dot.dotzConnectedByOwner.forEach(function(localSmartRef) {
          Meteor.call('pullDotFromInDotz', localSmartRef.dotId, localSmartRef.parentDot, function(error,result){
              if (error){
                console.log("pullDotFromInDotz >> Error " + error);
              }
          });
        Meteor.call('pullFromUserConnectivity', Meteor.userId(), localSmartRef.dotId , Meteor.userId(), dot._id, function(error,result){
          if (error){
            console.log("pullDotFromInDotz >> Error " + error);
          }
        })
      });
  }
  else if (dot.dotzConnectedByOthers) {
      dot.dotzConnectedByOthers.forEach(function(localSmartRef) {
          Meteor.call('pullDotFromInDotz', localSmartRef.dotId, localSmartRef.parentDot, function(error,result){
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




  //remove dot from Dotz Collection:
  Meteor.call('removeDotFromDotzCollection', dot._id, dot.ownerUserId, function(error,result) {
      if (!error) {
        Bert.alert( 'Deleted', 'warning', 'growl-bottom-left' );
      }
      else {
        console.log("removeDotFromDotzCollection >> Error " + error);
      }
  });

};

Modules.both.Dotz.deleteDot = deleteDot;



