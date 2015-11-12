
let deleteDot = (dot, smartRef) => {

   //security checks:
  if (dot.ownerUserId !== Meteor.userId() ) {
    return false
  }
  check( dot, Object );
  check( smartRef, Schema.dotSmartRef );
  check( dot.inDotz, Array );
  check( dot.ownerUserId, String );
  check( smartRef.dot._id, String );
  check( smartRef.connection.toParentDotId, String );

   //pull smartRef from all dotz parent:
  let parentDot;

  let deleteSmartRef = {
    _id: dot._id,
    ownerUserId: dot.ownerUserId
  };
   dot.inDotz.forEach(function(parentDotId){
     Meteor.call('pullDotFromDotzConnectedArray', deleteSmartRef, parentDotId, function(error,result){
         if (error){
         console.log("pullDotFromDotzConnectedByOthers >> Error " + error);
         }
     });
   //pull from User Connections Counter:
     parentDot = Dotz.findOne(parentDotId);
     Meteor.call('pullFromUserConnectivity', Meteor.userId(), dot._id, parentDot.ownerUserId, parentDotId, function(error,result) {
       if (error){
         console.log("pullFromUserConnectivity >> Error " + error);
       }
     });
   });
  //pull dotId from all Children's inDotz (to update the "connect" counter):
    dot.connectedDotzArray.forEach(function(localSmartRef) {
        Meteor.call('pullDotFromInDotz', localSmartRef.dot._id, dot._id, function(error,result){
            if (error){
              console.log("pullDotFromInDotz >> Error " + error);
            }
        });
      Meteor.call('pullFromUserConnectivity', Meteor.userId(), localSmartRef.dot._id , Meteor.userId(), dot._id, function(error,result){
        if (error){
          console.log("pullDotFromInDotz >> Error " + error);
        }
      })
    });


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


