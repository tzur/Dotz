
let _checkDot = function(dotId, dotIdWishedToConnect){
  let isNotConnected = true;
  let _dot = Dotz.findOne(dotId);
  return (_dot._id != dotIdWishedToConnect && _dot.ownerUserId === Meteor.userId())

};

let getDotDotzForConnect = (dotId, dotIdWishedToConnect) => {
  let _dot = Dotz.findOne(dotId);
  let userDotzArray = [];
  if (_dot && _dot.dotzConnectedByOwner){
    _dot.dotzConnectedByOwner.forEach(function(smartRef){
      if(_checkDot(smartRef.dotId, dotIdWishedToConnect)) {
        userDotzArray.push(smartRef.dotId);
      }
    });
    console.log(userDotzArray.length);
    if (userDotzArray.length > 0){
      return Dotz.find({_id: {$in: userDotzArray}});
    }

  }
};
Modules.client.Dotz.getDotDotzForConnect = getDotDotzForConnect;
