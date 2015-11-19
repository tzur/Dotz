(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/methods/update/_userUpdate.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _userUpdate = function (userId, updateOptions) {                   // 1
  try {                                                                // 2
    check(updateOptions, Object);                                      // 3
    check(userId, String);                                             // 4
    Meteor.users.update({ _id: userId }, updateOptions);               // 5
  } catch (exception) {                                                //
    return exception;                                                  // 7
  }                                                                    //
};                                                                     //
                                                                       //
Meteor.methods({                                                       // 11
                                                                       //
  //TBD: special method for user-signUp process:                       //
  updateUserProfileDotId: function (userId, dotId) {                   // 14
    check(userId, String);                                             // 15
    check(dotId, String);                                              // 16
    Meteor.users.update({ _id: userId }, { $set: { "profile.profileDotId": dotId } });
  },                                                                   //
                                                                       //
  //TBD: special method for user-signUp process:                       //
  // Does not work with try/exception..                                //
  updateUserSlug: function (userId, slug) {                            // 22
    check(userId, String);                                             // 23
    check(slug, String);                                               // 24
    Meteor.users.update({ _id: userId }, { $set: { "profile.userSlug": slug } });
  },                                                                   //
                                                                       //
  editUserAccount: function (doc) {                                    // 28
    check(doc, Schema.editUserAccount);                                // 29
    var changedFields = doc.$set;                                      // 30
                                                                       //
    var changeFieldsAndValues = doc.$set;                              // 32
    var updateOptions = {                                              // 33
      $set: changeFieldsAndValues                                      // 34
    };                                                                 //
    _userUpdate(Meteor.userId(), updateOptions);                       // 36
    return doc._id;                                                    // 37
  },                                                                   //
                                                                       //
  updateCreatedByUserDotz: function (userId, dotId) {                  // 40
    check(userId, String);                                             // 41
    check(dotId, String);                                              // 42
    var updateOptions = {                                              // 43
      $addToSet: { "profile.createdByUserDotz": dotId }                // 44
    };                                                                 //
    _userUpdate(userId, updateOptions);                                // 46
  },                                                                   //
  updateCreatedByUserLists: function (userId, dotId) {                 // 48
    check(userId, String);                                             // 49
    check(dotId, String);                                              // 50
    var updateOptions = {                                              // 51
      $addToSet: { "profile.createdByUserLists": dotId }               // 52
    };                                                                 //
    _userUpdate(userId, updateOptions);                                // 54
  },                                                                   //
                                                                       //
  followUser: function (followingUserId, followedUserId) {             // 57
    check(followingUserId, Meteor.userId());                           // 58
    check(followingUserId, String);                                    // 59
    check(followedUserId, String);                                     // 60
    var updateOptions = {                                              // 61
      $addToSet: { "profile.following": followedUserId }               // 62
    };                                                                 //
    _userUpdate(followingUserId, updateOptions);                       // 64
  },                                                                   //
                                                                       //
  updateFollowedWithFollow: function (followingUserId, followedUserId) {
    check(followingUserId, Meteor.userId());                           // 68
    check(followedUserId, String);                                     // 69
    var updateOptions = {                                              // 70
      $addToSet: { "profile.followers": followingUserId }              // 71
    };                                                                 //
    _userUpdate(followedUserId, updateOptions);                        // 73
  },                                                                   //
                                                                       //
  unFollowUser: function (followingUserId, followedUserId) {           // 76
    check(followingUserId, Meteor.userId());                           // 77
    check(followedUserId, String);                                     // 78
    var updateOptions = {                                              // 79
      $pull: { "profile.following": followedUserId }                   // 80
    };                                                                 //
    _userUpdate(followingUserId, updateOptions);                       // 82
  },                                                                   //
                                                                       //
  updateFollowedWithUnFollow: function (followingUserId, followedUserId) {
    check(followingUserId, Meteor.userId());                           // 86
    check(followedUserId, String);                                     // 87
    var updateOptions = {                                              // 88
      $pull: { "profile.followers": followingUserId }                  // 89
    };                                                                 //
    _userUpdate(followedUserId, updateOptions);                        // 91
  },                                                                   //
                                                                       //
  updateUserConnectivity: function (connectedUserId, dotId, belongsToUserId, parentDotId) {
    check(connectedUserId, String);                                    // 95
    check(dotId, String);                                              // 96
    check(belongsToUserId, String);                                    // 97
    check(parentDotId, String);                                        // 98
    var connectivityItem = {                                           // 99
      userId: connectedUserId,                                         // 100
      dotId: dotId,                                                    // 101
      parentDotId: parentDotId                                         // 102
    };                                                                 //
    var updateOptions = {                                              // 104
      $addToSet: { "profile.userConnections": connectivityItem }       // 105
    };                                                                 //
    console.log("UPDATINGGGG " + belongsToUserId);                     // 107
    _userUpdate(belongsToUserId, updateOptions);                       // 108
  },                                                                   //
                                                                       //
  editUserCoverImage: function (coverImageUrl) {                       // 111
    //change to URL in check                                           //
    check(coverImageUrl, String);                                      // 113
    var updateOptions = {                                              // 114
      $set: { "profile.coverImage": coverImageUrl }                    // 115
    };                                                                 //
    _userUpdate(Meteor.userId(), updateOptions);                       // 117
  },                                                                   //
                                                                       //
  editUserProfileImage: function (profileImageUrl) {                   // 120
    //change to URL in check                                           //
    check(profileImageUrl, String);                                    // 122
    var updateOptions = {                                              // 123
      $set: { "profile.profileImage": profileImageUrl }                // 124
    };                                                                 //
    _userUpdate(Meteor.userId(), updateOptions);                       // 126
  },                                                                   //
                                                                       //
  editUserLocation: function (locationObject) {                        // 129
    //change to URL in check                                           //
    check(locationObject, Object);                                     // 131
                                                                       //
    var locationSchemaObject = {};                                     // 133
    locationSchemaObject = {                                           // 134
      latLng: locationObject.locationLatLng,                           // 135
      name: locationObject.general.name,                               // 136
      address: locationObject.general.formatted_address,               // 137
      googleMapsUrl: locationObject.general.url,                       // 138
      placeId: locationObject.general.place_id,                        // 139
      placePhoneNumber: locationObject.general.formatted_phone_number  // 140
    };                                                                 //
    check(locationSchemaObject, Schema.location);                      // 142
                                                                       //
    var updateOptions = {                                              // 144
      $set: { "profile.location": locationSchemaObject }               // 145
    };                                                                 //
    _userUpdate(Meteor.userId(), updateOptions);                       // 147
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_userUpdate.js.map
