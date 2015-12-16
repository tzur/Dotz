(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/methods/update/_dotUpdate.js                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _dotUpdate = function (dotId, updateOptions) {                     // 1
  try {                                                                // 2
    check(updateOptions, Object);                                      // 3
    check(dotId, String);                                              // 4
                                                                       //
    Dotz.update({ _id: dotId }, updateOptions);                        // 6
  } catch (exeption) {                                                 //
    return exeption;                                                   // 9
  }                                                                    //
};                                                                     //
                                                                       //
Meteor.methods({                                                       // 14
  updateDot: function (doc, documentId) {                              // 15
    check(doc, Object);                                                // 16
    var changeFieldsAndValues = doc.$set;                              // 17
    var updateOptions = {                                              // 18
      $set: changeFieldsAndValues                                      // 19
    };                                                                 //
    _dotUpdate(documentId, updateOptions);                             // 21
  },                                                                   //
                                                                       //
  //TBD: special method for user-signUp process:                       //
  // Does not work with try/exception..                                //
  makeUpdateDotSlug: function (dotId, slug) {                          // 26
    check(dotId, String);                                              // 27
    check(slug, String);                                               // 28
    try {                                                              // 29
      Dotz.update({ _id: dotId }, { $set: { "dotSlug": slug } });      // 30
    } catch (error) {                                                  //
      throw error;                                                     // 33
    }                                                                  //
  },                                                                   //
                                                                       //
  likeDot: function (targetDotId, smartRefId, userId) {                // 37
    check(targetDotId, String);                                        // 38
    check(smartRefId, String);                                         // 39
    check(userId, Meteor.userId());                                    // 40
    try {                                                              // 41
                                                                       //
      Dotz.update({ _id: targetDotId, "connectedDotzArray.dot._id": smartRefId }, {
        $addToSet: { "connectedDotzArray.$.connection.likes": userId } });
    } catch (exception) {                                              //
      return exception;                                                // 47
    }                                                                  //
  },                                                                   //
                                                                       //
  updateTotalUpvotes: function (dotId, parentDotId) {                  // 52
    check(dotId, String);                                              // 53
    check(parentDotId, String);                                        // 54
    var totalUpvotes = {                                               // 55
      parentDot: parentDotId,                                          // 56
      userId: Meteor.userId()                                          // 57
    };                                                                 //
    check(parentDotId, String);                                        // 59
    var updateOptions = {                                              // 60
      $addToSet: { totalUpvotes: totalUpvotes }                        // 61
    };                                                                 //
    _dotUpdate(dotId, updateOptions);                                  // 63
  },                                                                   //
  //JUST DO IT LIKE KATEY PERERERRY                                    //
  sortByLikes: function (smartRef, targetDotId, newIndex) {            // 67
    check(targetDotId, String);                                        // 68
    check(smartRef, Schema.dotSmartRef);                               // 69
    check(newIndex, Number);                                           // 70
    Dotz.update({ _id: targetDotId }, {                                // 71
      $pull: { connectedDotzArray: smartRef }                          // 72
    });                                                                //
    Dotz.update({ _id: targetDotId }, {                                // 74
      $push: {                                                         // 75
        connectedDotzArray: {                                          // 76
          $each: [smartRef],                                           // 77
          $position: newIndex                                          // 78
        }                                                              //
      }                                                                //
    });                                                                //
  },                                                                   //
  addDotToConnectedDotzArray: function (smartRef) {                    // 84
    check(smartRef, Schema.dotSmartRef);                               // 85
    var updateOptions = {                                              // 86
      $addToSet: { connectedDotzArray: smartRef }                      // 87
    };                                                                 //
    _dotUpdate(smartRef.connection.toParentDotId, updateOptions);      // 89
  },                                                                   //
                                                                       //
  addDotToInDotz: function (dotId, parentDotId) {                      // 93
    check(dotId, String);                                              // 94
    check(parentDotId, String);                                        // 95
    var updateOptions = {                                              // 96
      $addToSet: { inDotz: parentDotId }                               // 97
    };                                                                 //
    _dotUpdate(dotId, updateOptions);                                  // 99
  },                                                                   //
                                                                       //
  sortDotzUpdate: function (smartRef, newIndex) {                      // 102
    check(smartRef, Schema.dotSmartRef);                               // 103
    check(newIndex, Number);                                           // 104
    try {                                                              // 105
      Dotz.update({ _id: smartRef.connection.toParentDotId }, {        // 106
        $pull: { connectedDotzArray: smartRef }                        // 107
      });                                                              //
      Dotz.update({ _id: smartRef.connection.toParentDotId }, {        // 109
        $push: {                                                       // 110
          connectedDotzArray: {                                        // 111
            $each: [smartRef],                                         // 112
            $position: newIndex                                        // 113
          }                                                            //
        }                                                              //
      });                                                              //
    } catch (exception) {                                              //
      return exception;                                                // 119
    }                                                                  //
  }                                                                    //
                                                                       //
  //editDotImage(coverImageUrl, dotId){                                //
  //  //change to URL in check                                         //
  //  check(coverImageUrl, String);                                    //
  //  let updateOptions = {                                            //
  //    $set: {coverImageUrl: coverImageUrl}                           //
  //  };                                                               //
  //  _dotUpdate(dotId, updateOptions)                                 //
  //},                                                                 //
  //                                                                   //
  //editDotLocation(locationObject, dotId){                            //
  //  //change to URL in check                                         //
  //  check(locationObject, Object);                                   //
  //  let locationSchemaObject= {};                                    //
  //  locationSchemaObject = {                                         //
  //    latLng: locationObject.locationLatLng,                         //
  //    name: locationObject.general.name,                             //
  //    address: locationObject.general.formatted_address,             //
  //    googleMapsUrl: locationObject.general.url,                     //
  //    placeId: locationObject.general.place_id,                      //
  //    placePhoneNumber: locationObject.general.formatted_phone_number
  //  };                                                               //
  //  check(locationSchemaObject, Schema.location);                    //
  //  let updateOptions = {                                            //
  //    $set: {"location": locationSchemaObject}                       //
  //  };                                                               //
  //  _dotUpdate(dotId, updateOptions)                                 //
  //}                                                                  //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_dotUpdate.js.map
