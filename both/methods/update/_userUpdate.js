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

  updateUserAllUserDotz(userId, dotId){
    check(userId, String);
    check(dotId, String);
    let updateOptions = {
      $addToSet: {"profile.createdByUserDotz": dotId}
    };
    _userUpdate(userId, updateOptions);
  },

  followUser(followingUserId, followedUserId){
    check(followingUserId, Meteor.userId());
    check(followingUserId, String);
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

  updateUserConnectivity(connectedUserId, dotId, belongsToUserId, parentDotId){
    check(connectedUserId, String);
    check(dotId, String);
    check(belongsToUserId, String);
    check(parentDotId, String);
    let connectivityItem = {
      userId: connectedUserId,
      dotId: dotId,
      parentDotId: parentDotId
    };
    let updateOptions = {
      $addToSet: {"profile.userConnections" : connectivityItem}
    };
    _userUpdate(belongsToUserId, updateOptions);
  },

  editUserCoverImage(coverImageUrl){
    //change to URL in check
    check(coverImageUrl, String);
    let updateOptions = {
      $set: {"profile.coverImage": coverImageUrl}
    };
    _userUpdate(Meteor.userId(), updateOptions)
  },

  editUserProfileImage(profileImageUrl){
    //change to URL in check
    check(profileImageUrl, String);
    let updateOptions = {
      $set: {"profile.profileImage": profileImageUrl}
    };
    _userUpdate(Meteor.userId(), updateOptions)
  },

  editUserLocation(locationObject){
    //change to URL in check
    check(locationObject, Object);
    let userLocationOptions = {};

    userLocationOptions.LatLng = locationObject.locationLatLng || undefined;
    userLocationOptions.name = locationObject.general.name || undefined;
    userLocationOptions.address = locationObject.general.formatted_address || undefined;
    userLocationOptions.placeId = locationObject.general.place_id || undefined;

    let updateOptions = {
      $set: { "profile.userAddressLatLng": userLocationOptions.LatLng, "profile.userAddressName": userLocationOptions.name,
              "profile.userAddress": userLocationOptions.address, "profile.userAddressPlaceId": userLocationOptions.placeId }
    };
    _userUpdate(Meteor.userId(), updateOptions)
  }



});


