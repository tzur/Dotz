Meteor.methods({
  addDotConnectedByOwner(smartRef){
    check(smartRef, Schema.dotSmartRef);
    let updateOptions = {
      $addToSet: {dotzConnectedByOwner: smartRef}
    };
    Meteor.call('_dotUpdate', smartRef.parentDot, updateOptions)

  },
  addDotConnectedByOther(smartRef){
    check(smartRef, Object);
   let updateOptions = {
    $addToSet: {dotzConnectedByOther: smartRef}
  };
  Meteor.call('_dotUpdate', smartRef.parentDot, updateOptions)
  },
  addDotToInDotz(toBeAddedDotId, targetDotId){
    check(toBeAddedDotId, String);
    check(targetDotId, String);
    let updateOptions = {
      $addToSet: {inDotz: toBeAddedDotId}
    };
    Meteor.call('_dotUpdate', targetDotId, updateOptions)
  }
});
