
/*
 * This publish is receiving profileDot and subscribe all of the dotz that were connected
 * by the owner.
 * PLEASE FIND A BETTER NAME FOR THIS PUBLISH.
 */
Meteor.publish('availableDotzForCreate', function(profileDot){
  if (profileDot) {
    check(profileDot, Object);
    let dot = profileDot;
    let userDotzArray = [];
    if (dot && dot.dotzConnectedByOwner) {
      dot.dotzConnectedByOwner.forEach(function (smartRef) {
        userDotzArray.push(smartRef.dotId);
      });
      console.log(userDotzArray.length);
      if (userDotzArray.length > 0) {
        return Dotz.find({_id: {$in: userDotzArray}});
      }
    }
  }

});

/*
 * This publish is userId and publishing his profile Dot
 */
Meteor.publish('profileDot', function(userId){
  if (userId){
    check(userId, String);
    let user = Meteor.users.findOne(userId);
    return Dotz.find({_id: user.profile.profileDotId});
  }
});

/*
 * This publish is for publishing all the profile Dotz:
 */
Meteor.publish('userProfileDotz', function(userId){
  if (userId){
    check(userId, String);
    let user = Meteor.users.findOne(userId);
    let dotzConnectedByOwner = Dotz.findOne({_id: user.profile.profileDotId}).dotzConnectedByOwner;
    let dotzConnectedByOwnerArray = [];
    dotzConnectedByOwner.forEach(function (dot) {
      dotzConnectedByOwnerArray.push(dot);
    });
    //let Dotz = Dotz.find({_id: user.profile.profileDotId});
    return dotzConnectedByOwnerArray;
  }
});

/*
 * This publish is publishing a whole Dot (for show)
 */
Meteor.publish('dotShow', function(dotId){
  if (dotId){
    check(dotId, String);
    return Dotz.findOne(dotId);
  }

});
