//changing SmartRef to be independent object.
 let _smartRef = function (dotId, parentDot, connectedByUserId, isConnectedToOthers ,actionName, personalDescription){
      this.dotId = dotId,
      this.parentDot = parentDot,
      this.connectedByUserId =  connectedByUserId,
      this.actionName =  actionName,
      this.personalDescription = personalDescription,
      this.isConnectedToOthers = isConnectedToOthers,
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
let _smartRefToDataObject = function(smartRefArray){
  let data;
  let dataArray = [];
  smartRefArray.forEach(function(smartRef) {
    data = {};
    let dot = Dotz.findOne(smartRef.dotId);
    let ownerUser = Meteor.users.findOne(dot.ownerUserId);
    let connectedUser = Meteor.users.findOne(smartRef.connectedByUserId);
    data.smartRef = smartRef;
    data.dot = dot;
    data.ownerUser = {
      id: ownerUser._id,
      username: ownerUser.username,
      profileImage: ownerUser.profile.profileImage
    };
    data.connectedByUser = {
      id: connectedUser._id,
      username: connectedUser.username,
      profileImage: connectedUser.profile.profileImage
    };
    dataArray.push(data);
  });
  return dataArray;
};
Modules.both.Dotz.smartRef = _smartRef;
Modules.both.Dotz.likeDot = _likeDot;
Modules.both.Dotz.smartRefToDataObject = _smartRefToDataObject;




