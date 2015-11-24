let _isMeteorUserCanFollowUser = (followedUserId) => {
  Meteor.user().profile.following.forEach(function(id){
    if(id === followedUserId){
      return false
    }
  });
  return true;
};

let _followUser = function(followingUserId, followedUserId){

  if(followingUserId === followedUserId || !_isMeteorUserCanFollowUser(followedUserId)){
    console.log("_followUser : _isMeteorUserCanFollowUser returned false !@#!@#!@#!@#!@#!@#!@#2")
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
  if(followingUserId === followedUserId){
    console.log("_unFollowUser : _isMeteorUserCanFollowUser returned false !@#!@#!@#!@#!@#!@#!@#2")
    return false;
  }
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
