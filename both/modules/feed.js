let _updateFeed = function(smartRef, ownerUserId){
  var currentUser = Meteor.users.findOne(ownerUserId);
  if (currentUser.profile.followers){
    currentUser.profile.followers.forEach(function(followerId){
      Meteor.call('updateFeed', smartRef, followerId, function(error, result){
        if (error){
          console.log("Error" + error);
        }
      })
    })
  }
};
Modules.both.Dotz.updateFeed = _updateFeed;
