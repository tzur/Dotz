

let getAvailableLists = function(dotIdWishedToConnectTo) {
  let createdByUserLists = Meteor.user().profile.createdByUserLists;
  let availableLists = [];
  if (createdByUserLists) {
    createdByUserLists.forEach(function (smartRef) {
      if(canBeConnectedToDot(smartRef.dot._id, dotIdWishedToConnectTo)){
        availableLists.push(smartRef.dot._id);
      }
    });
  }
  //console.log(availableLists.length);
  if (availableLists.length > 0){
    return Dotz.find({_id: {$in: availableLists}}, {sort: {title: 1}});
  }
  else{
    return false
  }
};

let canBeConnectedToDot = (parentDotId, dotIdWishedToConnectTo) => {
  let parentDot = Dotz.findOne(parentDotId);
  let canBeConnected = true;

  if(parentDot && parentDot._id != dotIdWishedToConnectTo){

    if (parentDot.connectedDotzArray){
      parentDot.connectedDotzArray.forEach(function(smartRef){
        if( dotIdWishedToConnectTo === smartRef.dot._id) {
          //if we got here than we cannot connect the dot because we are already there.
          canBeConnected = false;
        }
      });
      return canBeConnected;
    }
    // if we are here the parent dot have no dotz inside her, so of course we can connect
    else{
      return true;
    }
  }
  /// if we are here then they are the same dot so we cannot connect...
  else{
    return false
  }

};
Modules.client.Dotz.canBeConnectedToDot = canBeConnectedToDot;
Modules.client.Dotz.getAvailableList = getAvailableLists;