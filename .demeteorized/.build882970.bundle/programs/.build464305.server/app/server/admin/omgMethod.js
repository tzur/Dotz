(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/admin/omgMethod.js                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
Meteor.methods({                                                       // 2
                                                                       //
  omgCall: function (smartRef) {                                       // 4
                                                                       //
    check(smartRef, Schema.dotSmartRef);                               // 6
    check(userId, Meteor.userId());                                    // 7
    if (userId === undefined || userId === null) {                     // 8
      return false;                                                    // 9
    }                                                                  //
                                                                       //
    //  security check:                                                //
                                                                       //
    if (Meteor.user().username != ("Dotz" || "Otni" || "Aviv Hatzir" || "Yoav Sibony" || "Zur Tene")) {
      return false;                                                    // 16
    }                                                                  //
                                                                       //
    var theFakeLake = ["Otni", "Dotz"                                  // 20
    //"Ben Lo",                                                        //
    //"Andi Dagan",                                                    //
    //"Laura Melrose",                                                 //
    //"Michal Rinat",                                                  //
    //"Tori Null",                                                     //
    //"Will Anderson",                                                 //
    //"Laura Kirsh",                                                   //
    //"Paloma Hernandez",                                              //
    //"Jackie Melrose",                                                //
    //"Luis van Beuren",                                               //
    //"Leo Kalderon",                                                  //
    //"Rose Shine",                                                    //
    //"Tom James",                                                     //
    //"Bob Geller",                                                    //
    //"Nill Watson"                                                    //
    ];                                                                 //
                                                                       //
    var i = Math.floor(Math.random() * theFakeLake.length + 1);        // 40
    //                                                                 //
                                                                       //
    Meteor.call('likeDot', smartRef.connection.toParentDotId, smartRef.dot._id, userId, function (error, result) {
      if (error) {                                                     // 47
        console.log("Error " + error);                                 // 48
      } else {                                                         //
        Meteor.call('updateTotalUpvotes', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
          if (error) {                                                 // 52
            console.log("Error in 'updateTotalUpvotes': " + error);    // 53
          }                                                            //
        });                                                            //
        var parentDot = Dotz.findOne(smartRef.connection.toParentDotId);
        if (parentDot.isOpen) {                                        // 57
          //If we have more than one variable at the array             //
          if (parentDot.connectedDotzArray.length > 1) {               // 59
            var currentIndex = 0;                                      // 60
            //Find the current smartRef index.                         //
            while (parentDot.connectedDotzArray[currentIndex].dot._id != smartRef.dot._id) {
              currentIndex++;                                          // 63
            }                                                          //
            //if he is not at the top..(we are at like action so we have nothing to do...)
            if (currentIndex != 0) {                                   // 66
              var tempIndex = currentIndex; // temporary index just for the current iteration
              var newIndex = currentIndex; //will save our new index   // 68
              while (tempIndex != 0) {                                 // 69
                tempIndex -= 1;                                        // 70
                //check if the dot that is located from left of me have less likes than me.
                if (parentDot.connectedDotzArray[tempIndex].connection.likes.length < parentDot.connectedDotzArray[currentIndex].connection.likes.length) {
                  newIndex = tempIndex; // i need to replace her, so save her index
                } else {                                               //
                    break; // if one is bigger than me than sure all of the rest are, no need to keep iterating.
                  }                                                    //
              }                                                        //
              // if the newIndex was changed, lets update the array with it's new order.
              if (newIndex != currentIndex) {                          // 81
                Meteor.call('sortByLikes', parentDot.connectedDotzArray[currentIndex], smartRef.connection.toParentDotId, newIndex, function (error, result) {
                  if (error) {                                         // 84
                    console.log("ERROR " + error);                     // 85
                  }                                                    //
                });                                                    //
              }                                                        //
            }                                                          //
          }                                                            //
        }                                                              //
      }                                                                //
    });                                                                //
  }                                                                    //
                                                                       //
});                                                                    //
                                                                       //
var _likeDot = function (smartRef, userId) {                           // 106
  check(smartRef, Schema.dotSmartRef);                                 // 107
  check(userId, Meteor.userId());                                      // 108
  if (userId === undefined || userId === null) {                       // 109
    return false;                                                      // 110
  }                                                                    //
  Meteor.call('likeDot', smartRef.connection.toParentDotId, smartRef.dot._id, userId, function (error, result) {
    if (error) {                                                       // 113
      console.log("Error " + error);                                   // 114
    } else {                                                           //
      Meteor.call('updateTotalUpvotes', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
        if (error) {                                                   // 118
          console.log("Error in 'updateTotalUpvotes': " + error);      // 119
        }                                                              //
      });                                                              //
      var parentDot = Dotz.findOne(smartRef.connection.toParentDotId);
      if (parentDot.isOpen) {                                          // 123
        //If we have more than one variable at the array               //
        if (parentDot.connectedDotzArray.length > 1) {                 // 125
          var currentIndex = 0;                                        // 126
          //Find the current smartRef index.                           //
          while (parentDot.connectedDotzArray[currentIndex].dot._id != smartRef.dot._id) {
            currentIndex++;                                            // 129
          }                                                            //
          //if he is not at the top..(we are at like action so we have nothing to do...)
          if (currentIndex != 0) {                                     // 132
            var tempIndex = currentIndex; // temporary index just for the current iteration
            var newIndex = currentIndex; //will save our new index     // 134
            while (tempIndex != 0) {                                   // 135
              tempIndex -= 1;                                          // 136
              //check if the dot that is located from left of me have less likes than me.
              if (parentDot.connectedDotzArray[tempIndex].connection.likes.length < parentDot.connectedDotzArray[currentIndex].connection.likes.length) {
                newIndex = tempIndex; // i need to replace her, so save her index
              } else {                                                 //
                  break; // if one is bigger than me than sure all of the rest are, no need to keep iterating.
                }                                                      //
            }                                                          //
            // if the newIndex was changed, lets update the array with it's new order.
            if (newIndex != currentIndex) {                            // 147
              Meteor.call('sortByLikes', parentDot.connectedDotzArray[currentIndex], smartRef.connection.toParentDotId, newIndex, function (error, result) {
                if (error) {                                           // 150
                  console.log("ERROR " + error);                       // 151
                }                                                      //
              });                                                      //
            }                                                          //
          }                                                            //
        }                                                              //
      }                                                                //
    }                                                                  //
  });                                                                  //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=omgMethod.js.map
