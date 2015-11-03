
let _checkDot = function(smartRef, dotIdWishedToConnect){
  let _dot = Dotz.findOne(smartRef.dotId);
  if(_dot.ownerUserId === Meteor.userId()){
    if(_dot.dotzConnectedByOwner) {
      _dot.dotzConnectedByOwner.forEach(function (smartRef) {
        if (smartRef.dotId === dotIdWishedToConnect) {
          return false;
        }
      });
      return true;
    }
    else{
      return true;
    }
  }
  else{
    return false;
  }

};

let getDotDotzForConnect = (dot, dotIdWishedToConnect) => {
  let _dot = dot;
  console.log(_dot);
  let userDotzArray = [];
  if (dot && dot.dotzConnectedByOwner){
    _dot.dotzConnectedByOwner.forEach(function(smartRef){
      if(_checkDot(smartRef,dotIdWishedToConnect)) {
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
