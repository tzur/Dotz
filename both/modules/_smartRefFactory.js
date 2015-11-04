//changing SmartRef to be independent object.
 let _smartRef = function (dotId, parentDot, connectedByUserId, actionName, personalDescription){
      this.dotId = dotId,
      this.parentDot = parentDot,
      this.connectedByUserId =  connectedByUserId,
      this.actionName =  actionName,
      this.personalDescription = personalDescription,
      this.isConnectedToOthers = undefined, // will be determine later.
      this.likes = []
};
let _likeDot = function(smartRef, userId){
  check(smartRef, Schema.dotSmartRef);
  check(userId, Meteor.userId());
  if (smartRef.isConnectedToOthers){
    Meteor.call('likeDotInOthers', smartRef.parentDot, smartRef.dotId, userId, function(error, result){
      if (error){
        console.log("Error" + error);
      }
    })
  }
  Meteor.call('likeDotInOwner', smartRef.parentDot, smartRef.dotId, userId, function(error, result){
    if (error){
      console.log("Error "+ error);
    }
  });
};
Modules.both.Dotz.smartRef = _smartRef;
Modules.both.Dotz.likeDot = _likeDot;




