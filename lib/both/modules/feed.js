let _updateFeed = function(smartRef){
  let currentUser = Meteor.user();
  if (currentUser.profile.followers){
    currentUser.profile.followers.forEach(function(followerId){
      Meteor.call('updateFeed', smartRef, followerId, function(error, result){
        if (error){
          console.log("Update feed Error" + error);
        }
        else{
          console.log("im here");
        }
      })
    })
  }
};
Modules.both.Dotz.updateFeed = _updateFeed;
