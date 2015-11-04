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
  likeDot(targetDotId, smartRefId, userId ){
    try{
      check(targetDotId, String);
      check(smartRefId, String);
      check(userId, Meteor.userId());
      Dotz.update({targetDotId, "dotzConnectedByOther.dotId": smartRefId}, {
        $addToSet: {"dotzConnectedByOther.$.likes": userId}}, false,true)
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
  addDotToInDotz(toBeAddedDotId, targetDotId){
    check(toBeAddedDotId, String);
    check(targetDotId, String);
    let updateOptions = {
      $addToSet: {inDotz: toBeAddedDotId}
    };
    _dotUpdate(targetDotId, updateOptions)
  }
});
