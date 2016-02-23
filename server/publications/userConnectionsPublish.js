
Meteor.publish( 'userConnections', function( userId ) {
  check(userId, String);
  if (userId) {
    return UserConnections.find({userId: userId});
  }
});


//connectionsMadeByUser
//
//Meteor.publish('connectionsMadeByUser', function(){
//
//  let dot = profileDot;
//  let userDotzArray = [];
//  if (dot && dot.dotzConnectedByOwner) {
//    dot.dotzConnectedByOwner.forEach(function (smartRef) {
//      userDotzArray.push(smartRef.dot._id);
//    });
//    console.log(userDotzArray.length);
//    if (userDotzArray.length > 0) {
//      return Dotz.find({_id: {$in: userDotzArray}});
//    }
//  }
//
//
//  let data = [
//    UserConnections.find({userId: Meteor.userId()},
//      {fields: {
//        "connectionsMadeByUser": 1
//      }
//    })
//  ];
//
//  if ( data ) {
//    return data;
//  }
//
//  return this.ready();
//});
