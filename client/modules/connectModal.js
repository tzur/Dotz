
let _checkDot = function(dotId){
  let _dot = Dotz.findOne(dotId);
  if(_dot){
    return ( _dot.ownerUserId === Meteor.userId() && _dot.dotType === "List")
  }

};

let getConnectedByOwnerDotz = function(dotId, dotIdWishedToConnectTo) {
  let _dot = Dotz.findOne(dotId);
  if(dotIdWishedToConnectTo && dotIdWishedToConnectTo === dotId) {
    return false;
  }
  let _dotzConnectedByOwnerArray = [];
  if (_dot && _dot.connectedDotzArray) {
    _dot.connectedDotzArray.forEach(function (smartRef) {
      if(smartRef.connection.actionName === CREATE_ACTION && _checkDot(smartRef.dot._id) &&
        dotIdWishedToConnectTo != smartRef.dot._id) {
        _dotzConnectedByOwnerArray.push(smartRef.dot._id);
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

let isConnectedToDot = (dotId, dotIdWishedToConnectTo) => {
  let _dot = Dotz.findOne(dotId);
  let isNotConnected = true;

  if(_dot && _dot._id != dotIdWishedToConnectTo)
    if (_dot.connectedDotzArray){
      _dot.connectedDotzArray.forEach(function(smartRef){
        if(dotIdWishedToConnectTo === smartRef.dot._id) {
          isNotConnected = false;
        }
      });
      return isNotConnected;
      }
    else{
      return true;
    }
};
Modules.client.Dotz.isConnectedToDot = isConnectedToDot;
Modules.client.Dotz.getConnectedByOwnerDotz = getConnectedByOwnerDotz;
