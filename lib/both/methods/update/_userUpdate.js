let _userUpdate = (userId, updateOptions) => {
    try {
      check(updateOptions, Object);
      check(userId, String);
      Meteor.users.update({_id: userId}, updateOptions);
    } catch (exception) {
      return exception;
    }
  };

Meteor.methods({

  updateUserShareDotId(userId, dotId){
    check(userId, String);
    check(userId, Meteor.userId());
    check(dotId, String);
    try{
      Meteor.users.update({_id:userId}, {$set:{"profile.shareDotId": dotId}})
    }
    catch(error){
      return error;
    }
  },

  //updateUserFirstRole(userFirstGroup){
  //  check(userFirstGroup, String);
  //  console.log('im in server in sign up ');
  //  Roles.addUsersToRoles(Meteor.userId(), userFirstGroup, 'firstGroup')
  //},

  //TBD: special method for user-signUp process:
  updateUserProfileDotId(userId, dotId){
    check(userId, String);
    check(dotId, String);
    check(userId, Meteor.userId() ); //TBD
    Meteor.users.update( {_id: userId}, {$set: {"profile.profileDotId": dotId}} );
  },
  ////TBD: special method for user-signUp process:
  //// Does not work with try/exception..
  //updateUserSlug(userId, slug){
  //  check(userId, String);
  //  check(slug, String);
  //  Meteor.users.update( {_id: userId}, {$set: {"profile.userSlug": slug}} );
  //},
  insertUserNameAndProfilePic(username, profileImg){
    check(username, String);
    check(profileImg, String);
    Meteor.users.update({_id: Meteor.userId()}, {
      $set: {username: username, "profile.profileImage": profileImg}
    })
  },
  editUserAccount(doc){
    check(doc, Schema.editUserAccount);
    //let changedFields = doc.$set;
    let changeFieldsAndValues = doc.$set;


    if (changeFieldsAndValues.userSlug) {
      Meteor.call('createUserSlug', changeFieldsAndValues.userSlug, function(error, result) {
        //TBD:
        if (error) {
          console.log("Meteor.call >> createUserSlug error: " + error);
          Bert.alert( 'Please check another url address!', 'danger' );
        }
        else {
          console.log("Meteor.call >> createUserSlug result: " + result);
        }
      });
    }
    let updateOptions = {
      $set: changeFieldsAndValues
    };
    _userUpdate(Meteor.userId(), updateOptions);
    return doc._id;
  },

  updateCreatedByUserDotz(smartRef){
    check(smartRef, Object);

    UserConnections.update({userId: Meteor.userId()}, {$addToSet: {createdByUserDotz: smartRef}})
  },

  updateCreatedByUserLists(smartRef){
    check(smartRef, Object);
    let updateOptions = {
      $addToSet: {"profile.createdByUserLists": smartRef}
    };
    _userUpdate(Meteor.userId(), updateOptions);
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

  //updateUserConnectivity(connectedUserId, dotId, belongsToUserId, parentDotId){
  //  check(connectedUserId, String);
  //  check(dotId, String);
  //  check(belongsToUserId, String);
  //  check(parentDotId, String);
  //  let connectivityItem = {
  //    userId: connectedUserId,
  //    dotId: dotId,
  //    parentDotId: parentDotId
  //  };
  //  let updateOptions = {
  //    $addToSet: {"profile.userConnections" : connectivityItem}
  //  };
  //  console.log("UPDATINGGGG " + belongsToUserId);
  //  _userUpdate(belongsToUserId, updateOptions);
  //},

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


