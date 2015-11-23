let _followUser = function(followingUserId, followedUserId){

  if(followingUserId === followedUserId){
    return false
  }
  Meteor.call('followUser', followingUserId, followedUserId, function(error, result){
    if (!error){
      Meteor.call('updateFollowedWithFollow',followingUserId, followedUserId, function(error, result){
        if (error){
          console.log("Error" + error);
        }
      })
    }
    else{
      console.log("Error" + error);
    }
  })
};

let _unFollowUser =  function(followingUserId, followedUserId){
  Meteor.call('unFollowUser', followingUserId, followedUserId, function(error, result){
    if (!error){
      Meteor.call('updateFollowedWithUnFollow', followingUserId, followedUserId, function(error,result){
        if (error){
          console.log("Error"+ error);
        }
      })
    }
    else{
      console.log("Error" + error);
    }
  });
};

Modules.both.Dotz.followUser = _followUser;
Modules.both.Dotz.unFollowUser = _unFollowUser;
