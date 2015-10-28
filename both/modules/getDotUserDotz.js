//Move to client side.

let getDotUserDotz = (dotId) => {
  let dot = Dotz.findOne({_id: dotId});
  console.log(dotId);
  console.log(dot);
  let userDotzArray = [];
  if (dot && dot.dotzConnectedByOwner){
    dot.dotzConnectedByOwner.forEach(function(smartRef){
      userDotzArray.push(smartRef.dotId);
    });
    console.log(userDotzArray.length);
    if (userDotzArray.length > 0){
      return Dotz.find({_id: {$in: userDotzArray}});
    }

  }
};
Modules.both.Dotz.getDotUserDotz = getDotUserDotz;
