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
  editUserAccount(doc){
    check(doc, Schema.editUserAccount);
    let changedFields = doc.$set;

    let changeFieldsAndValues = doc.$set;
    let updateOptions = {
      $set: changeFieldsAndValues
    };
    _userUpdate(Meteor.userId(), updateOptions);
  },

  updateUserProfileDotId(userId, dotId){
    check(userId, String);
    check(dotId, String);
    let updateOptions = {
      $set: {"profile.profileDotId": dotId}
    };
    _userUpdate(userId ,updateOptions);
  },

  updateUserSlug(userId, slug){
    check(userId, String);
    check(slug, String);
    let updateOptions = {
      $set: {"profile.userSlug": slug}
    };
    _userUpdate(userId ,updateOptions);
  },

  updateCreatedByUserDotz(userId, dotId){
    check(userId, String);
    check(dotId, String);
    let updateOptions = {
      $addToSet: {"profile.createdByUserDotz": dotId}
    };
    _userUpdate(userId, updateOptions);
  },
  updateCreatedByUserLists(userId, dotId){
    check(userId, String);
    check(dotId, String);
    let updateOptions = {
      $addToSet: {"profile.createdByUserLists": dotId}
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
    console.log("UPDATINGGGG " + belongsToUserId);
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

    let locationSchemaObject = {};
    locationSchemaObject = {
      latLng: locationObject.locationLatLng,
      name: locationObject.general.name,
      address: locationObject.general.formatted_address,
      googleMapsUrl: locationObject.general.url,
      placeId: locationObject.general.place_id,
      placePhoneNumber: locationObject.general.formatted_phone_number
    };
    check(locationSchemaObject, Schema.location);

    let updateOptions = {
      $set: { "profile.location": locationSchemaObject}
    };
    _userUpdate(Meteor.userId(), updateOptions)
  }



});


