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
  updateDotSlug: function (dotId, slug) {                              // 26
    check(dotId, String);                                              // 27
    check(slug, String);                                               // 28
    Dotz.update({ _id: dotId }, { $set: { "dotSlug": slug } });        // 29
  },                                                                   //
                                                                       //
  likeDot: function (targetDotId, smartRefId, userId) {                // 32
    check(targetDotId, String);                                        // 33
    check(smartRefId, String);                                         // 34
    check(userId, Meteor.userId());                                    // 35
    try {                                                              // 36
                                                                       //
      Dotz.update({ _id: targetDotId, "connectedDotzArray.dot._id": smartRefId }, {
        $addToSet: { "connectedDotzArray.$.connection.likes": userId } });
    } catch (exception) {                                              //
      return exception;                                                // 42
    }                                                                  //
  },                                                                   //
  //JUST DO IT LIKE KATEY PERERERRY                                    //
  sortByLikes: function (smartRef, targetDotId, newIndex) {            // 47
    check(targetDotId, String);                                        // 48
    check(smartRef, Schema.dotSmartRef);                               // 49
    check(newIndex, Number);s;                                         // 50
    Dotz.update({ _id: targetDotId }, {                                // 51
      $pull: { connectedDotzArray: smartRef }                          // 52
    });                                                                //
    Dotz.update({ _id: targetDotId }, {                                // 54
      $push: {                                                         // 55
        connectedDotzArray: {                                          // 56
          $each: [smartRef],                                           // 57
          $position: newIndex                                          // 58
        }                                                              //
      }                                                                //
    });                                                                //
  },                                                                   //
  addDotToConnectedDotzArray: function (smartRef) {                    // 64
    check(smartRef, Schema.dotSmartRef);                               // 65
    var updateOptions = {                                              // 66
      $addToSet: { connectedDotzArray: smartRef }                      // 67
    };                                                                 //
    _dotUpdate(smartRef.connection.toParentDotId, updateOptions);      // 69
  },                                                                   //
                                                                       //
  addDotToInDotz: function (dotId, parentDotId) {                      // 73
    check(dotId, String);                                              // 74
    check(parentDotId, String);                                        // 75
    var updateOptions = {                                              // 76
      $addToSet: { inDotz: parentDotId }                               // 77
    };                                                                 //
    _dotUpdate(dotId, updateOptions);                                  // 79
  },                                                                   //
                                                                       //
  sortDotzUpdate: function (smartRef, newIndex) {                      // 82
    check(smartRef, Schema.dotSmartRef);                               // 83
    check(newIndex, Number);                                           // 84
    try {                                                              // 85
      Dotz.update({ _id: smartRef.connection.toParentDotId }, {        // 86
        $pull: { connectedDotzArray: smartRef }                        // 87
      });                                                              //
      Dotz.update({ _id: smartRef.connection.toParentDotId }, {        // 89
        $push: {                                                       // 90
          connectedDotzArray: {                                        // 91
            $each: [smartRef],                                         // 92
            $position: newIndex                                        // 93
          }                                                            //
        }                                                              //
      });                                                              //
    } catch (exception) {                                              //
      return exception;                                                // 99
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
