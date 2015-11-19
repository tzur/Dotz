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
                                                                       //
  Meteor.call('likeDot', smartRef.connection.toParentDotId, smartRef.dot._id, userId, function (error, result) {
    if (error) {                                                       // 21
      console.log("Error " + error);                                   // 22
    } else {                                                           //
      var parentDot = Dotz.findOne(smartRef.connection.toParentDotId);
      if (parentDot.isOpen) {                                          // 26
        //If we have more than one variable at the array               //
        if (parentDot.connectedDotzArray.length > 1) {                 // 28
          var currentIndex = 0;                                        // 29
          //Find the current smartRef index.                           //
          while (parentDot.connectedDotzArray[currentIndex].dot._id != smartRef.dot._id) {
            currentIndex++;                                            // 32
          }                                                            //
          //if he is not at the top..(we are at like action so we have nothing to do...)
          if (currentIndex != 0) {                                     // 35
            var tempIndex = currentIndex; // temporary index just for the current iteration
            var newIndex = currentIndex; //will save our new index     // 37
            while (tempIndex != 0) {                                   // 38
              tempIndex -= 1;                                          // 39
              //check if the dot that is located from left of me have less likes than me.
              if (parentDot.connectedDotzArray[tempIndex].connection.likes.length < parentDot.connectedDotzArray[currentIndex].connection.likes.length) {
                newIndex = tempIndex; // i need to replace her, so save her index
              } else {                                                 //
                  break; // if one is bigger than me than sure all of the rest are, no need to keep iterating.
                }                                                      //
            }                                                          //
            // if the newIndex was changed, lets update the array with it's new order.
            if (newIndex != currentIndex) {                            // 50
              Meteor.call('sortByLikes', parentDot.connectedDotzArray[currentIndex], smartRef.connection.toParentDotId, newIndex, function (error, result) {
                if (error) {                                           // 53
                  console.log("ERROR " + error);                       // 54
                }                                                      //
              });                                                      //
            }                                                          //
          }                                                            //
        }                                                              //
      }                                                                //
    }                                                                  //
  });                                                                  //
};                                                                     //
var _smartRefToDataObject = function (smartRefArray) {                 // 64
  var data = undefined;                                                // 65
  var dataArray = [];                                                  // 66
  smartRefArray.forEach(function (smartRef) {                          // 67
    data = {};                                                         // 68
    var dot = Dotz.findOne(smartRef.dot._id);                          // 69
    if (dot) {                                                         // 70
      var ownerUser = Meteor.users.findOne(dot.ownerUserId);           // 71
      var connectedUser = Meteor.users.findOne(smartRef.connection.connectedByUserId);
                                                                       //
      //1:                                                             //
      data.smartRef = smartRef;                                        // 75
      //2:                                                             //
      data.dot = dot;                                                  // 77
      //3:                                                             //
      if (ownerUser) {                                                 // 79
        data.ownerUser = {                                             // 80
          id: ownerUser._id,                                           // 81
          username: ownerUser.username,                                // 82
          userSlug: ownerUser.profile.userSlug,                        // 83
          profileImage: ownerUser.profile.profileImage                 // 84
        };                                                             //
      }                                                                //
      //4:                                                             //
      if (connectedUser) {                                             // 88
        data.connectedByUser = {                                       // 89
          id: connectedUser._id,                                       // 90
          username: connectedUser.username,                            // 91
          userSlug: ownerUser.profile.userSlug,                        // 92
          profileImage: connectedUser.profile.profileImage             // 93
        };                                                             //
      }                                                                //
                                                                       //
      if (data && data.ownerUser && data.connectedByUser) {            // 97
        dataArray.push(data);                                          // 98
      }                                                                //
    }                                                                  //
  });                                                                  //
                                                                       //
  return dataArray;                                                    // 103
};                                                                     //
                                                                       //
Modules.both.Dotz.smartRef = _smartRef;                                // 107
Modules.both.Dotz.likeDot = _likeDot;                                  // 108
Modules.both.Dotz.smartRefToDataObject = _smartRefToDataObject;        // 109
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=smartRefFunctions.js.map
