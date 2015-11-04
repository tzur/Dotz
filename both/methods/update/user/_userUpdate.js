let _userUpdate = (userId, updateOptions) => {
    try {
      check(updateOptions, Object);
      check(userId, String);
      Meteor.users.update({_id: userId}, updateOptions);
    } catch (exeption) {
      return exeption;
    }
  };

Meteor.methods({
  updateUserProfileDotId(userId, dotId){
    console.log(userId, dotId);
    check(userId, String);
    check(dotId, String);
    let updateOptions = {
      $set: {"profile.profileDotId": dotId}
    };
    _userUpdate(userId ,updateOptions);
  },
  followUser(followingUserId, followedUserId){
    check(followingUserId, Meteor.userId());
    check(followedUserId, String);
    let updateOptions = {
      $addToSet: {"profile.following": followedUserId}
    };
    _userUpdate(followingUserId, updateOptions);
  },
  updateFollowedWithFollow(followingUserId, followedUserId){
    check(followingUserId, Meteor.userId());
    check(followedUserId, String);
    let updateOptions = {
      $addToSet: {"profile.followers": followingUserId}
    };
    _userUpdate(followedUserId, updateOptions)
  },
  unFollowUser(followingUserId, followedUserId){
    check(followingUserId, Meteor.userId());
    check(followedUserId, String);
    let updateOptions = {
      $pull: {"profile.following": followedUserId}
    };
    _userUpdate(followingUserId ,updateOptions);
  },
  updateFollowedWithUnFollow(followingUserId, followedUserId){
    check(followingUserId, Meteor.userId());
    check(followedUserId, String);
    let updateOptions = {
      $pull: {"profile.followers": followingUserId}
    };
    _userUpdate(followedUserId, updateOptions);
  },
  updateFeed(smartRef, userId){
    check(smartRef, Schema.dotSmartRef);
    check(userId, String);
    console.log("im updating the feed");
    let updateOptions = {
      $addToSet: {"profile.feedDotz": smartRef}
    };
    _userUpdate(userId, updateOptions);
  }

});
