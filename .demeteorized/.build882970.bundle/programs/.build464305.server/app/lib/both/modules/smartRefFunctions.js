(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/smartRefFunctions.js                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
//changing SmartRef to be independent object.                          //
var _smartRef = function (dotId, dotOwnerUserId, parentDotId, actionName, connectedByUserId, personalDescription) {
  this.dot = {                                                         // 3
    _id: dotId,                                                        // 4
    ownerUserId: dotOwnerUserId                                        // 5
  };                                                                   //
  this.connection = {                                                  // 7
    toParentDotId: parentDotId,                                        // 8
    connectedByUserId: connectedByUserId,                              // 9
    actionName: actionName,                                            // 10
    personalDescription: personalDescription,                          // 11
    likes: []                                                          // 12
  };                                                                   //
};                                                                     //
                                                                       //
var _likeDot = function (smartRef, userId) {                           // 16
  check(smartRef, Schema.dotSmartRef);                                 // 17
  check(userId, Meteor.userId());                                      // 18
  if (userId === undefined || userId === null) {                       // 19
    return false;                                                      // 20
  }                                                                    //
  Meteor.call('likeDot', smartRef.connection.toParentDotId, smartRef.dot._id, userId, function (error, result) {
    if (error) {                                                       // 23
      console.log("Error " + error);                                   // 24
    } else {                                                           //
      Meteor.call('updateTotalUpvotes', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
        if (error) {                                                   // 28
          console.log("Error in 'updateTotalUpvotes': " + error);      // 29
        }                                                              //
      });                                                              //
      var parentDot = Dotz.findOne(smartRef.connection.toParentDotId);
      if (parentDot.isOpen) {                                          // 33
        //If we have more than one variable at the array               //
        if (parentDot.connectedDotzArray.length > 1) {                 // 35
          var currentIndex = 0;                                        // 36
          //Find the current smartRef index.                           //
          while (parentDot.connectedDotzArray[currentIndex].dot._id != smartRef.dot._id) {
            currentIndex++;                                            // 39
          }                                                            //
          //if he is not at the top..(we are at like action so we have nothing to do...)
          if (currentIndex != 0) {                                     // 42
            var tempIndex = currentIndex; // temporary index just for the current iteration
            var newIndex = currentIndex; //will save our new index     // 44
            while (tempIndex != 0) {                                   // 45
              tempIndex -= 1;                                          // 46
              //check if the dot that is located from left of me have less likes than me.
              if (parentDot.connectedDotzArray[tempIndex].connection.likes.length < parentDot.connectedDotzArray[currentIndex].connection.likes.length) {
                newIndex = tempIndex; // i need to replace her, so save her index
              } else {                                                 //
                  break; // if one is bigger than me than sure all of the rest are, no need to keep iterating.
                }                                                      //
            }                                                          //
            // if the newIndex was changed, lets update the array with it's new order.
            if (newIndex != currentIndex) {                            // 57
              Meteor.call('sortByLikes', parentDot.connectedDotzArray[currentIndex], smartRef.connection.toParentDotId, newIndex, function (error, result) {
                if (error) {                                           // 60
                  console.log("ERROR " + error);                       // 61
                }                                                      //
              });                                                      //
            }                                                          //
          }                                                            //
        }                                                              //
      }                                                                //
    }                                                                  //
  });                                                                  //
};                                                                     //
                                                                       //
var _smartRefToDataObject = function (smartRefArray) {                 // 72
  var data = undefined;                                                // 73
  var dataArray = [];                                                  // 74
  smartRefArray.forEach(function (smartRef) {                          // 75
    data = {};                                                         // 76
    var dot = Dotz.findOne(smartRef.dot._id);                          // 77
    if (dot) {                                                         // 78
      var ownerUser = Meteor.users.findOne(dot.ownerUserId);           // 79
      var connectedUser = Meteor.users.findOne(smartRef.connection.connectedByUserId);
                                                                       //
      //1:                                                             //
      data.smartRef = smartRef;                                        // 83
      //2:                                                             //
      data.dot = dot;                                                  // 85
      //3:                                                             //
      if (ownerUser) {                                                 // 87
        data.ownerUser = {                                             // 88
          id: ownerUser._id,                                           // 89
          username: ownerUser.username,                                // 90
          userSlug: ownerUser.profile.userSlug,                        // 91
          profileImage: ownerUser.profile.profileImage                 // 92
        };                                                             //
      }                                                                //
      //4:                                                             //
      if (connectedUser) {                                             // 96
        data.connectedByUser = {                                       // 97
          id: connectedUser._id,                                       // 98
          username: connectedUser.username,                            // 99
          userSlug: ownerUser.profile.userSlug,                        // 100
          profileImage: connectedUser.profile.profileImage             // 101
        };                                                             //
      }                                                                //
                                                                       //
      if (data && data.ownerUser && data.connectedByUser) {            // 105
        dataArray.push(data);                                          // 106
      }                                                                //
    }                                                                  //
  });                                                                  //
                                                                       //
  return dataArray;                                                    // 111
};                                                                     //
                                                                       //
Modules.both.Dotz.smartRef = _smartRef;                                // 115
Modules.both.Dotz.likeDot = _likeDot;                                  // 116
Modules.both.Dotz.smartRefToDataObject = _smartRefToDataObject;        // 117
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=smartRefFunctions.js.map
