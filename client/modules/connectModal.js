
let _checkList = function(dotId, dotIdWishedToConnectTo){
  let _isValid = true;
  let _dot = Dotz.findOne(dotId);
  if(_dot.dotType === "List" && _dot._id != dotIdWishedToConnectTo) {
    _dot.connectedDotzArray.forEach(function (smartRef){
      if(smartRef.dot._id === dotIdWishedToConnectTo){
        _isValid = false;
      }
    });
    return _isValid;
  }
  else{
    return false;
  }

};

let getAvailableLists = function(dotIdWishedToConnectTo) {
  let _createdByUserLists = Meteor.user().profile.createdByUserLists;
  let _availableLists = [];
  if (_createdByUserLists) {
    _createdByUserLists.forEach(function (dotId) {
      if(_checkList(dotId, dotIdWishedToConnectTo))
        _availableLists.push(dotId);
    });
  }
  console.log(_availableLists.length);
  if (_availableLists.length > 0){
    return Dotz.find({_id: {$in: _availableLists}}, {sort: {title: 1}});
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
        if(dotIdWishedToConnectTo && dotIdWishedToConnectTo === smartRef.dot._id) {
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
Modules.client.Dotz.getAvailableList = getAvailableLists;
