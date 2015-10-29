let _updateInDotz = (dotId, updateOptions) => {
    try {
      check(updateOptions, Object);
      check(dotId, String);

      Dotz.update({_id: dotId}, updateOptions);

    } catch (exeption) {
      return exeption;
    }
  };

Meteor.methods({
  addDotConnectedByOwner(smartRef){
    check(smartRef, Schema.dotSmartRef);
    let updateOptions = {
      $addToSet: {dotzConnectedByOwner: smartRef}
    };
    _updateInDotz(smartRef.parentDot, updateOptions)
  },
  addDotConnectedByOther(smartRef){
    check(smartRef, Object);
    let updateOptions = {
      $addToSet: {dotzConnectedByOther: smartRef}
    };
    _updateInDotz(smartRef.parentDot, updateOptions)
  },
  addDotToInDotz(toBeAddedDotId, targetDotId){
    check(toBeAddedDotId, String);
    check(targetDotId, String);
    let updateOptions = {
      $addToSet: {inDotz: toBeAddedDotId}
    };
    _updateInDotz(targetDotId, updateOptions)
  }
});
