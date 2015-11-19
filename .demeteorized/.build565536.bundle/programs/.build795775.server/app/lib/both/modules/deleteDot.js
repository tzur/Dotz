(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/deleteDot.js                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
var deleteDot = function (dot, firstParentDotId) {                     // 2
                                                                       //
  //security checks:                                                   //
  if (dot.ownerUserId !== Meteor.userId()) {                           // 5
    return false;                                                      // 6
  }                                                                    //
  check(dot, Object);                                                  // 8
  check(firstParentDotId, String);                                     // 9
  check(dot.inDotz, Array);                                            // 10
  check(dot.ownerUserId, String);                                      // 11
                                                                       //
  var parentDot = undefined;                                           // 13
  var deleteSmartRef = {                                               // 14
    _id: dot._id,                                                      // 15
    ownerUserId: dot.ownerUserId                                       // 16
  };                                                                   //
                                                                       //
  //Delete from algolia                                                //
  Meteor.call('deleteDotzFromAlgolia', dot._id);                       // 20
                                                                       //
  // first remove the parent!!!                                        //
  Meteor.call('pullDotFromDotzConnectedArray', deleteSmartRef, firstParentDotId, function (error, result) {
    if (!error) {                                                      // 24
      var firstParentDot = Dotz.findOne(firstParentDotId);             // 25
      Meteor.call('pullFromUserConnectivity', Meteor.userId(), dot._id, firstParentDot.ownerUserId, firstParentDotId, function (error, result) {
        if (error) {                                                   // 27
          console.log("pullFromUserConnectivity >> Error " + error);   // 28
        }                                                              //
      });                                                              //
      // Now remove from everyone.                                     //
      dot.inDotz.forEach(function (parentDotId) {                      // 32
        Meteor.call('pullDotFromDotzConnectedArray', deleteSmartRef, parentDotId, function (error, result) {
          if (error) {                                                 // 34
            console.log("pullDotFromDotzConnectedByOthers >> Error " + error);
          }                                                            //
        });                                                            //
        //pull from User Connections Counter:                          //
        parentDot = Dotz.findOne(parentDotId);                         // 39
        Meteor.call('pullFromUserConnectivity', Meteor.userId(), dot._id, parentDot.ownerUserId, parentDotId, function (error, result) {
          if (error) {                                                 // 41
            console.log("pullFromUserConnectivity >> Error " + error);
          }                                                            //
        });                                                            //
      });                                                              //
                                                                       //
      //pull dotId from all Children's inDotz (to update the "connect" counter):
      dot.connectedDotzArray.forEach(function (localSmartRef) {        // 48
        Meteor.call('pullDotFromInDotz', localSmartRef.dot._id, dot._id, function (error, result) {
          if (error) {                                                 // 50
            console.log("pullDotFromInDotz >> Error " + error);        // 51
          }                                                            //
        });                                                            //
        Meteor.call('pullFromUserConnectivity', Meteor.userId(), localSmartRef.dot._id, Meteor.userId(), dot._id, function (error, result) {
          if (error) {                                                 // 55
            console.log("pullDotFromInDotz >> Error " + error);        // 56
          }                                                            //
        });                                                            //
      });                                                              //
                                                                       //
      //pull from user list if it's list.                              //
      if (dot.dotType === "List") {                                    // 62
        Meteor.call('pullFromCreatedByUserLists', dot._id, function (error, result) {
          if (error) {                                                 // 64
            console.log("pullFromCreatedByUserLists >> Error " + error);
          }                                                            //
        });                                                            //
      }                                                                //
      //pull from user Dotz if it's dot.                               //
      else {                                                           //
          Meteor.call('pullFromCreatedByUserDotz', Meteor.userId(), dot._id, function (error, result) {
            if (error) {                                               // 73
              console.log("pullFromCreatedByUserDotz >> Error " + error);
            }                                                          //
          });                                                          //
        }                                                              //
    } else {                                                           //
      console.log("Error " + error);                                   // 81
    }                                                                  //
  });                                                                  //
                                                                       //
  //Finally remove from dotz collection.                               //
  Meteor.call('removeDotFromDotzCollection', dot._id, dot.ownerUserId, function (error, result) {
    if (!error) {                                                      // 87
      Bert.alert('Deleted', 'warning', 'growl-bottom-left');           // 88
    } else {                                                           //
      console.log("removeDotFromDotzCollection >> Error " + error);    // 91
    }                                                                  //
  });                                                                  //
};                                                                     //
Modules.both.Dotz.deleteDot = deleteDot;                               // 96
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=deleteDot.js.map
