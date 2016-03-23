let _dotUpdate = (dotId, updateOptions) => {
    try {
      check(updateOptions, Object);
      check(dotId, String);

      Dotz.update({_id: dotId}, updateOptions);

    } catch (exeption) {
      return exeption;
    }
};

let _securityCheck = function(documentId) {
    let documentOwner = Dotz.findOne(documentId).ownerUserId;
    return ( documentOwner === Meteor.userId() );
};

Meteor.methods({
  updateDot(doc, documentId){
    //check(doc, Object);
    check(doc, Schema.dotSchema);
    check(documentId, String);
    _securityCheck(documentId);

    //TODO >>> check if facebook.js steel works with this method (I comment out the "changeFieldsAndValues = doc.$set"..) @otni
    //let changeFieldsAndValues = doc.$set;
    //console.log("changeFieldsAndValues.title >>>>>>> " + doc.title)
    //console.log("changeFieldsAndValues.title >>>>>>> " + changeFieldsAndValues.title)
    let updateOptions = {
      $set: doc
    };
    _dotUpdate(documentId, updateOptions);
  },

  updateDotTags(dotId, fieldToUpdate, superTagsArray){
    check(dotId, String);
    check(fieldToUpdate, String);
    check(superTagsArray, Array);

    let doc = {};
    doc.selfSuperTags = superTagsArray;
    let updateOptions = {
      $set: doc
    };
    _dotUpdate(dotId, updateOptions);
  },

  //TBD: special method for user-signUp process:
  // Does not work with try/exception..
  makeUpdateDotSlug(dotId, slug){
    check(dotId, String);
    check(slug, String);
    try{
      Dotz.update( {_id: dotId}, {$set: {"dotSlug": slug}} );
    }
    catch(error){
      throw error;
    }
  },

  likeDot(smartRef, userId ){
    check(smartRef, Schema.dotSmartRef);
    check(userId, Meteor.userId());
    let likeSmartRef = smartRef;
    likeSmartRef.connection.actionName = LIKE_ACTION;
    let isUserAlreadyLikedTheDot = smartRef.connection.likes.indexOf(userId);
    if(isUserAlreadyLikedTheDot < 0){
      try{
        Dotz.update({_id: smartRef.connection.toParentDotId, "connectedDotzArray.dot._id": smartRef.dot._id}, {
          $addToSet: {"connectedDotzArray.$.connection.likes": userId}}, function(error, itemsChanged, what){
          if(Meteor.isServer){

            //Add the like action to the user connection Array****
            Meteor.call('updateLikesMadeByUser', likeSmartRef, function(error){
              if(error){
                console.log('Error in updateConnectionsMadeByUser: ' + error)
              }
            });
            //End

            //Add the like action to the dot's totalUpvotes Array****
            Meteor.call('updateDotTotalUpvotesArray', smartRef.dot._id, smartRef.connection.toParentDotId, userId, function(error){
              if(error){
                console.log('Error in updateDotTotalUpvotesArray: ' + error)
              }
            });
            //End

            Meteor.call('updateUserPeopleLikedMyConnection', likeSmartRef, function(error){
              if(error) {
                console.log('Error in updateUserPeopleLikedMyConnection inside likeDot: ' + error)
              }
            });

            Meteor.call('updateUserPeopleLikedMyDotz', likeSmartRef, function(error) {
              if (error) {
                console.log('Error in updateUserPeopleLikedMyDotz inside likeDot: ' + error)
              }
            });
          }
        })
      }
      catch(exception){
        return exception;
      }
    }
  },

  updateTotalUpvotes(dotId, parentDotId){
    check(dotId, String);
    check(parentDotId, String);
    let totalUpvotes = {
      parentDot: parentDotId,
      userId: Meteor.userId()
    };
    check(parentDotId, String);
    let updateOptions = {
      $addToSet: {totalUpvotes: totalUpvotes}
    };
    _dotUpdate(dotId, updateOptions)

  },
  //JUST DO IT LIKE KATEY PERERERRY
  sortByLikes(smartRef, targetDotId, newIndex){
    check(targetDotId, String);
    check(smartRef, Schema.dotSmartRef);
    check(newIndex, Number);
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
  },

  updateDotTotalUpvotesArray(dotId, parentDotId, userID ){
    //check(smartRef, Schema.dotSmartRef);
    check(dotId, String);
    check(parentDotId, String);
    check(userID, Meteor.userId() );
    let updateOptions = {
      $addToSet: {totalUpvotesArray: {
        userId: userID,
        upvotedInDotId: parentDotId
      }
      }
    };
    _dotUpdate(dotId, updateOptions)
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
