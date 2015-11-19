
let deleteDot = (dot, firstParentDotId) => {

   //security checks:
  if (dot.ownerUserId !== Meteor.userId() ) {
    return false
  }
  check( dot, Object );
  check(firstParentDotId, String);
  check( dot.inDotz, Array );
  check( dot.ownerUserId, String );

  let parentDot;
  let deleteSmartRef = {
    _id: dot._id,
    ownerUserId: dot.ownerUserId
  };

  //Delete from algolia
  Meteor.call('deleteDotzFromAlgolia', dot._id);

  // first remove the parent!!!
  Meteor.call('pullDotFromDotzConnectedArray', deleteSmartRef, firstParentDotId, function(error, result){
    if (!error){
      let firstParentDot = Dotz.findOne(firstParentDotId);
      Meteor.call('pullFromUserConnectivity', Meteor.userId(), dot._id, firstParentDot.ownerUserId, firstParentDotId, function(error,result) {
        if (error){
          console.log("pullFromUserConnectivity >> Error " + error);
        }
      });
      // Now remove from everyone.
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

      //pull from user list if it's list.
      if(dot.dotType === "List"){
        Meteor.call('pullFromCreatedByUserLists',dot._id, function(error,result) {
          if (error){
            console.log("pullFromCreatedByUserLists >> Error " + error);
          }
        });

      }
      //pull from user Dotz if it's dot.
      else{
        Meteor.call('pullFromCreatedByUserDotz', Meteor.userId(), dot._id, function(error,result) {
          if (error){
            console.log("pullFromCreatedByUserDotz >> Error " + error);
          }
        });
      }

    }
    else{
      console.log("Error " + error);
    }
  });

  //Finally remove from dotz collection.
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



