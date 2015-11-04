
let _checkDot = function(dotId){
  let _dot = Dotz.findOne(dotId);
  return ( _dot.ownerUserId === Meteor.userId())


};

let getConnectedByOwnerDotz = function(dotId, dotIdWishedToConnectTo) {
  let _dot = Dotz.findOne(dotId);
  if(dotIdWishedToConnectTo === dotId) {
    return false;
  }
  let _dotzConnectedByOwnerArray = [];
  if (_dot && _dot.dotzConnectedByOwner) {
    _dot.dotzConnectedByOwner.forEach(function (smartRef) {
      if(smartRef.actionName === CREATE_ACTION && _checkDot(smartRef.dotId) &&
        dotIdWishedToConnectTo != smartRef.dotId) {
        _dotzConnectedByOwnerArray.push(smartRef.dotId);
      }
    });
  }
  console.log(_dotzConnectedByOwnerArray.length);
  if (_dotzConnectedByOwnerArray.length > 0){
    return Dotz.find({_id: {$in: _dotzConnectedByOwnerArray}});
  }
  else{
    return false
  }
};

Modules.client.Dotz.getConnectedByOwnerDotz = getConnectedByOwnerDotz;

let isConnectedToDot = (dotId, dotIdWishedToConnectTo) => {
  let _dot = Dotz.findOne(dotId);
  let isNotConnected = true;

  if(_dot && _dot._id != dotIdWishedToConnectTo)
    if (_dot.dotzConnectedByOwner){
      _dot.dotzConnectedByOwner.forEach(function(smartRef){
        if(dotIdWishedToConnectTo === smartRef.dotId) {
          isNotConnected = false;
        }
      });
      return isNotConnected;
      }
    else{
      return true;
    }
};
Modules.client.Dotz.getDotDotzForConnect = isConnectedToDot;
