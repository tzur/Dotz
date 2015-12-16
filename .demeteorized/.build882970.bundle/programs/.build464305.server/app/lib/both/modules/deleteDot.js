(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/deleteDot.js                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  deleteDot: function (dot, firstParentDotId) {                        // 2
    //security checks:                                                 //
    if (dot.ownerUserId !== Meteor.userId()) {                         // 4
      return false;                                                    // 5
    }                                                                  //
    check(dot, Object);                                                // 7
    check(firstParentDotId, String);                                   // 8
    check(dot.inDotz, Array);                                          // 9
    check(dot.ownerUserId, String);                                    // 10
                                                                       //
    var parentDot = undefined;                                         // 12
    var deleteSmartRef = {                                             // 13
      _id: dot._id,                                                    // 14
      ownerUserId: dot.ownerUserId                                     // 15
    };                                                                 //
    // Wave A:                                                         //
    Meteor.call('pullDotFromDotzConnectedArray', deleteSmartRef, firstParentDotId, function (error, result) {
      if (error) {                                                     // 19
        console.log("Error " + error);                                 // 20
      }                                                                //
    });                                                                //
    //Wave B:                                                          //
    if (Meteor.isServer) {                                             // 24
                                                                       //
      // Now remove from everyone.                                     //
      dot.inDotz.forEach(function (parentDotId) {                      // 27
        parentDot = Dotz.findOne(parentDotId);                         // 28
        Meteor.call('pullDotFromDotzConnectedArray', deleteSmartRef, parentDotId, function (error, result) {
          if (error) {                                                 // 30
            console.log("pullDotFromDotzConnectedByOthers >> Error " + error);
          }                                                            //
        });                                                            //
        //pull from User Connections Counter:                          //
        Meteor.call('pullFromUserConnectivity', Meteor.userId(), dot._id, parentDot.ownerUserId, parentDotId, function (error, result) {
          if (error) {                                                 // 36
            console.log("pullFromUserConnectivity >> Error " + error);
          }                                                            //
        });                                                            //
      });                                                              //
      //pull dotId from all Children's inDotz (to update the "connect" counter):
      dot.connectedDotzArray.forEach(function (localSmartRef) {        // 42
        Meteor.call('pullDotFromInDotz', localSmartRef.dot._id, dot._id, function (error, result) {
          if (error) {                                                 // 44
            console.log("pullDotFromInDotz >> Error " + error);        // 45
          }                                                            //
        });                                                            //
        Meteor.call('pullFromUserConnectivity', Meteor.userId(), localSmartRef.dot._id, Meteor.userId(), dot._id, function (error, result) {
          if (error) {                                                 // 49
            console.log("pullDotFromInDotz >> Error " + error);        // 50
          }                                                            //
        });                                                            //
      });                                                              //
                                                                       //
      //pull from user list if it's list.                              //
      if (dot.dotType === "List") {                                    // 56
        Meteor.call('pullFromCreatedByUserLists', dot._id, function (error, result) {
          if (error) {                                                 // 58
            console.log("pullFromCreatedByUserLists >> Error " + error);
          }                                                            //
        });                                                            //
      }                                                                //
      //pull from user Dotz if it's dot.                               //
      else {                                                           //
          Meteor.call('pullFromCreatedByUserDotz', Meteor.userId(), dot._id, function (error, result) {
            if (error) {                                               // 67
              console.log("pullFromCreatedByUserDotz >> Error " + error);
            }                                                          //
          });                                                          //
        }                                                              //
    }                                                                  //
    var firstParentDot = Dotz.findOne(firstParentDotId);               // 73
    //Delete from algolia                                              //
    Meteor.call('deleteDotzFromAlgolia', dot._id, dot.dotType);        // 75
    Meteor.call('pullFromUserConnectivity', Meteor.userId(), dot._id, firstParentDot.ownerUserId, firstParentDotId, function (error, result) {
      if (error) {                                                     // 77
        console.log("pullFromUserConnectivity >> Error " + error);     // 78
      }                                                                //
    });                                                                //
                                                                       //
    //Finally remove from dotz collection.                             //
    Meteor.call('removeDotFromDotzCollection', dot._id, dot.ownerUserId, function (error, result) {
      if (error) {                                                     // 84
        console.log("removeDotFromDotzCollection >> Error " + error);  // 85
      }                                                                //
    });                                                                //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=deleteDot.js.map
