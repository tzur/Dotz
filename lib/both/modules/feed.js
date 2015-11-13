let _updateFeed = function(smartRef){
  var currentUser = Meteor.user();
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
