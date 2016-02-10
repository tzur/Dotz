Meteor.methods({
  deleteDot(dot, firstParentDotId){
    //security checks:
    if (dot.ownerUserId !== Meteor.userId() ) {
      return false
    }
    check( dot, Object );
    check(firstParentDotId, String);
    check( dot.ownerUserId, String );

    let parentDot;
    let deleteSmartRef = {
      _id: dot._id,
      ownerUserId: dot.ownerUserId
    };
    // Wave A:
    Meteor.call('pullDotFromDotzConnectedArray', deleteSmartRef, firstParentDotId, function(error, result){
      if (error){
        console.log("Error " + error);
      }
    });
    //Wave B:
    if (Meteor.isServer) {
      // Now remove from everyone.
      let serverDot = Dotz.findOne(dot._id);
      serverDot.inDotz.forEach(function (parentDotId) {
        parentDot = Dotz.findOne(parentDotId);
        Meteor.call('pullDotFromDotzConnectedArray', deleteSmartRef, parentDotId, function (error, result) {
          if (error) {
            console.log("pullDotFromDotzConnectedByOthers >> Error " + error);
          }
        });
        //pull from User Connections Counter:
        //Meteor.call('pullFromUserConnectivity', Meteor.userId(), serverDot._id, parentDot.ownerUserId, parentDotId, function (error, result) {
        //  if (error) {
        //    console.log("pullFromUserConnectivity >> Error " + error);
        //  }
        //});
      });
      //pull dotId from all Children's inDotz (to update the "connect" counter):
      serverDot.connectedDotzArray.forEach(function (localSmartRef) {
        Meteor.call('pullDotFromInDotz', localSmartRef.dot._id, serverDot._id, function (error, result) {
          if (error) {
            console.log("pullDotFromInDotz >> Error " + error);
          }
        });
        Meteor.call('pullFromUserConnectivity', Meteor.userId(), localSmartRef.dot._id, Meteor.userId(), serverDot._id, function (error, result) {
          if (error) {
            console.log("pullDotFromInDotz >> Error " + error);
          }
        })
      });

      //pull from user list if it's list.
      if (serverDot.dotType === "List") {
        Meteor.call('pullFromCreatedByUserLists', serverDot._id, function (error, result) {
          if (error) {
            console.log("pullFromCreatedByUserLists >> Error " + error);
          }
        });

      }
      //pull from user Dotz if it's dot.
      else {
        Meteor.call('pullFromCreatedByUserDotz', Meteor.userId(), serverDot._id, function (error, result) {
          if (error) {
            console.log("pullFromCreatedByUserDotz >> Error " + error);
          }
        });
      }
      let firstParentDot = Dotz.findOne(firstParentDotId);
      //Delete from algolia
      Meteor.call('deleteDotzFromAlgolia', serverDot._id, serverDot.dotType, serverDot.dotSubType, function(error){
        if(error){
          console.log('Error in deleteDotzFromAlgolia: ' + error)
        }
      });
      //Meteor.call('pullFromUserConnectivity', Meteor.userId(), dot._id, firstParentDot.ownerUserId, firstParentDotId, function(error,result) {
      //  if (error){
      //    console.log("pullFromUserConnectivity >> Error " + error);
      //  }
      //});

      //Finally remove from dotz collection.
      Meteor.call('removeDotFromDotzCollection', serverDot._id, serverDot.ownerUserId, function (error, result) {
        if (error) {
          console.log("removeDotFromDotzCollection >> Error " + error);
        }
      });
    }
  }
});




