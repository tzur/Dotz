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
  updateUserShareDotId: function (userId, dotId) {                     // 13
    check(userId, String);                                             // 14
    check(userId, Meteor.userId());                                    // 15
    check(dotId, String);                                              // 16
    try {                                                              // 17
      Meteor.users.update({ _id: userId }, { $set: { "profile.shareDotId": dotId } });
    } catch (error) {                                                  //
      return error;                                                    // 21
    }                                                                  //
  },                                                                   //
  //TBD: special method for user-signUp process:                       //
  updateUserProfileDotId: function (userId, dotId) {                   // 25
    check(userId, String);                                             // 26
    check(dotId, String);                                              // 27
    check(userId, Meteor.userId()); //TBD                              // 28
    Meteor.users.update({ _id: userId }, { $set: { "profile.profileDotId": dotId } });
  },                                                                   //
                                                                       //
  ////TBD: special method for user-signUp process:                     //
  //// Does not work with try/exception..                              //
  //updateUserSlug(userId, slug){                                      //
  //  check(userId, String);                                           //
  //  check(slug, String);                                             //
  //  Meteor.users.update( {_id: userId}, {$set: {"profile.userSlug": slug}} );
  //},                                                                 //
                                                                       //
  editUserAccount: function (doc) {                                    // 40
    check(doc, Schema.editUserAccount);                                // 41
    //let changedFields = doc.$set;                                    //
    var changeFieldsAndValues = doc.$set;                              // 43
    if (changeFieldsAndValues.username) {                              // 44
      Meteor.call('createUserSlug', changeFieldsAndValues.username, function (error, result) {
        //TBD:                                                         //
        if (error) {                                                   // 47
          console.log("Meteor.call >> createUserSlug error: " + error);
        } else {                                                       //
          console.log("Meteor.call >> createUserSlug result: " + result);
        }                                                              //
      });                                                              //
    }                                                                  //
    var updateOptions = {                                              // 55
      $set: changeFieldsAndValues                                      // 56
    };                                                                 //
    _userUpdate(Meteor.userId(), updateOptions);                       // 58
    return doc._id;                                                    // 59
  },                                                                   //
                                                                       //
  updateCreatedByUserDotz: function (userId, dotId) {                  // 62
    check(userId, String);                                             // 63
    check(dotId, String);                                              // 64
    var updateOptions = {                                              // 65
      $addToSet: { "profile.createdByUserDotz": dotId }                // 66
    };                                                                 //
    _userUpdate(userId, updateOptions);                                // 68
  },                                                                   //
  updateCreatedByUserLists: function (userId, dotId) {                 // 70
    check(userId, String);                                             // 71
    check(dotId, String);                                              // 72
    var updateOptions = {                                              // 73
      $addToSet: { "profile.createdByUserLists": dotId }               // 74
    };                                                                 //
    _userUpdate(userId, updateOptions);                                // 76
  },                                                                   //
                                                                       //
  followUser: function (followingUserId, followedUserId) {             // 79
    check(followingUserId, Meteor.userId());                           // 80
    check(followingUserId, String);                                    // 81
    check(followedUserId, String);                                     // 82
                                                                       //
    var updateOptions = {                                              // 84
      $addToSet: { "profile.following": followedUserId }               // 85
    };                                                                 //
    _userUpdate(followingUserId, updateOptions);                       // 87
  },                                                                   //
                                                                       //
  updateFollowedWithFollow: function (followingUserId, followedUserId) {
    check(followingUserId, Meteor.userId());                           // 91
    check(followedUserId, String);                                     // 92
    var updateOptions = {                                              // 93
      $addToSet: { "profile.followers": followingUserId }              // 94
    };                                                                 //
    _userUpdate(followedUserId, updateOptions);                        // 96
  },                                                                   //
                                                                       //
  unFollowUser: function (followingUserId, followedUserId) {           // 99
    check(followingUserId, Meteor.userId());                           // 100
    check(followedUserId, String);                                     // 101
    var updateOptions = {                                              // 102
      $pull: { "profile.following": followedUserId }                   // 103
    };                                                                 //
    _userUpdate(followingUserId, updateOptions);                       // 105
  },                                                                   //
                                                                       //
  updateFollowedWithUnFollow: function (followingUserId, followedUserId) {
    check(followingUserId, Meteor.userId());                           // 109
    check(followedUserId, String);                                     // 110
    var updateOptions = {                                              // 111
      $pull: { "profile.followers": followingUserId }                  // 112
    };                                                                 //
    _userUpdate(followedUserId, updateOptions);                        // 114
  },                                                                   //
                                                                       //
  updateUserConnectivity: function (connectedUserId, dotId, belongsToUserId, parentDotId) {
    check(connectedUserId, String);                                    // 118
    check(dotId, String);                                              // 119
    check(belongsToUserId, String);                                    // 120
    check(parentDotId, String);                                        // 121
    var connectivityItem = {                                           // 122
      userId: connectedUserId,                                         // 123
      dotId: dotId,                                                    // 124
      parentDotId: parentDotId                                         // 125
    };                                                                 //
    var updateOptions = {                                              // 127
      $addToSet: { "profile.userConnections": connectivityItem }       // 128
    };                                                                 //
    console.log("UPDATINGGGG " + belongsToUserId);                     // 130
    _userUpdate(belongsToUserId, updateOptions);                       // 131
  },                                                                   //
                                                                       //
  editUserCoverImage: function (coverImageUrl) {                       // 134
    //change to URL in check                                           //
    check(coverImageUrl, String);                                      // 136
    var updateOptions = {                                              // 137
      $set: { "profile.coverImage": coverImageUrl }                    // 138
    };                                                                 //
    _userUpdate(Meteor.userId(), updateOptions);                       // 140
  },                                                                   //
                                                                       //
  editUserProfileImage: function (profileImageUrl) {                   // 143
    //change to URL in check                                           //
    check(profileImageUrl, String);                                    // 145
    var updateOptions = {                                              // 146
      $set: { "profile.profileImage": profileImageUrl }                // 147
    };                                                                 //
    _userUpdate(Meteor.userId(), updateOptions);                       // 149
  },                                                                   //
                                                                       //
  editUserLocation: function (locationObject) {                        // 152
    //change to URL in check                                           //
    check(locationObject, Object);                                     // 154
                                                                       //
    var locationSchemaObject = {};                                     // 156
    locationSchemaObject = {                                           // 157
      latLng: locationObject.locationLatLng,                           // 158
      name: locationObject.general.name,                               // 159
      address: locationObject.general.formatted_address,               // 160
      googleMapsUrl: locationObject.general.url,                       // 161
      placeId: locationObject.general.place_id,                        // 162
      placePhoneNumber: locationObject.general.formatted_phone_number  // 163
    };                                                                 //
    check(locationSchemaObject, Schema.location);                      // 165
                                                                       //
    var updateOptions = {                                              // 167
      $set: { "profile.location": locationSchemaObject }               // 168
    };                                                                 //
    _userUpdate(Meteor.userId(), updateOptions);                       // 170
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_userUpdate.js.map
