let _dotUpdate = (dotId, updateOptions) => {
    try {
      check(updateOptions, Object);
      check(dotId, String);

      Dotz.update({_id: dotId}, updateOptions);

    } catch (exeption) {
      return exeption;
    }
  };


Meteor.methods({
  updateDot(doc, documentId){
    check(doc, Object);
    let changeFieldsAndValues = doc.$set;
    let updateOptions = {
      $set: changeFieldsAndValues
    };
    _dotUpdate(documentId, updateOptions);
  },

  //TBD: special method for user-signUp process:
  // Does not work with try/exception..
  updateDotSlug(dotId, slug){
    check(dotId, String);
    check(slug, String);
    Dotz.update( {_id: dotId}, {$set: {"dotSlug": slug}} );
  },

  likeDot(targetDotId, smartRefId, userId ){
    check(targetDotId, String);
    check(smartRefId, String);
    check(userId, Meteor.userId());
    try{

      Dotz.update({_id: targetDotId, "connectedDotzArray.dot._id": smartRefId}, {
        $addToSet: {"connectedDotzArray.$.connection.likes": userId}})
    }
    catch(exception){
      return exception;
    }

  },
  //JUST DO IT LIKE KATEY PERERERRY
  sortByLikes(smartRef, targetDotId, newIndex){
    check(targetDotId, String);
    check(smartRef, Schema.dotSmartRef);
    check(newIndex, Number);s
    Dotz.update({ _id:targetDotId }, {
      $pull: {connectedDotzArray: smartRef }
    });
    Dotz.update({ _id: targetDotId}, {
      $push: {
        connectedDotzArray: {
          $each: [ smartRef ],
          $position: newIndex
        }
      }
    });

  },
  addDotToConnectedDotzArray(smartRef){
    check(smartRef, Schema.dotSmartRef);
    let updateOptions = {
      $addToSet: {connectedDotzArray: smartRef}
    };
    _dotUpdate(smartRef.connection.toParentDotId, updateOptions)
  },


  addDotToInDotz(dotId, parentDotId){
    check(dotId, String);
    check(parentDotId, String);
    let updateOptions = {
      $addToSet: {inDotz: parentDotId}
    };
    _dotUpdate(dotId, updateOptions)
  },

  sortDotzUpdate(smartRef, newIndex ){
    check(smartRef, Schema.dotSmartRef);
    check(newIndex, Number);
    try {
      Dotz.update({ _id: smartRef.connection.toParentDotId }, {
        $pull: {connectedDotzArray: smartRef }
      });
      Dotz.update({ _id: smartRef.connection.toParentDotId }, {
        $push: {
          connectedDotzArray: {
            $each: [ smartRef ],
            $position: newIndex
          }
        }
      });
    }
    catch(exception){
      return exception;
    }
  }

  //editDotImage(coverImageUrl, dotId){
  //  //change to URL in check
  //  check(coverImageUrl, String);
  //  let updateOptions = {
  //    $set: {coverImageUrl: coverImageUrl}
  //  };
  //  _dotUpdate(dotId, updateOptions)
  //},
  //
  //editDotLocation(locationObject, dotId){
  //  //change to URL in check
  //  check(locationObject, Object);
  //  let locationSchemaObject= {};
  //  locationSchemaObject = {
  //    latLng: locationObject.locationLatLng,
  //    name: locationObject.general.name,
  //    address: locationObject.general.formatted_address,
  //    googleMapsUrl: locationObject.general.url,
  //    placeId: locationObject.general.place_id,
  //    placePhoneNumber: locationObject.general.formatted_phone_number
  //  };
  //  check(locationSchemaObject, Schema.location);
  //  let updateOptions = {
  //    $set: {"location": locationSchemaObject}
  //  };
  //  _dotUpdate(dotId, updateOptions)
  //}

});
