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

  likeDotInOwner(targetDotId, smartRefId, userId ){
    check(targetDotId, String);
    check(smartRefId, String);
    check(userId, Meteor.userId());
    try{

      Dotz.update({_id: targetDotId, "dotzConnectedByOwner.dotId": smartRefId}, {
        $addToSet: {"dotzConnectedByOwner.$.likes": userId}})
    }
    catch(exception){
      return exception;
    }

  },

  likeDotInOthers(targetDotId, smartRefId, userId ){
    check(targetDotId, String);
    check(smartRefId, String);
    check(userId, Meteor.userId());
    try{
      Dotz.update({_id: targetDotId, "dotzConnectedByOthers.dotId": smartRefId}, {
        $addToSet: {"dotzConnectedByOthers.$.likes": userId}})
    }
    catch(exception){
      return exception;
    }
  },

  addDotConnectedByOwner(smartRef){
    check(smartRef, Schema.dotSmartRef);
    let updateOptions = {
      $addToSet: {dotzConnectedByOwner: smartRef}
    };
    _dotUpdate(smartRef.parentDot, updateOptions)
  },

  addDotConnectedByOther(smartRef){
    check(smartRef, Object);
    let updateOptions = {
      $addToSet: {dotzConnectedByOther: smartRef}
    };
    _dotUpdate(smartRef.parentDot, updateOptions)
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
    check(smartRef, Object);
    check(newIndex, Number);
    try {
      Dotz.update({ _id: smartRef.parentDot }, {
        $pull: {"dotzConnectedByOwner": smartRef }
      });
      Dotz.update({ _id: smartRef.parentDot }, {
        $push: {
          "dotzConnectedByOwner": {
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

  editDotImage(coverImageUrl, dotId){
    //change to URL in check
    check(coverImageUrl, String);
    let updateOptions = {
      $set: {coverImageUrl: coverImageUrl}
    };
    _dotUpdate(dotId, updateOptions)
  }

});
