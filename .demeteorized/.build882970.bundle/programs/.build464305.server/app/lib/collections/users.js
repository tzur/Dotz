(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/users.js                                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/*                                                                     //
 * Users Schema:                                                       //
 */                                                                    //
                                                                       //
//allow+deny >>>> TBD!!!!                                              //
                                                                       //
Meteor.users.allow({                                                   // 7
  insert: function () {                                                // 8
    return false;                                                      //
  },                                                                   //
  //update: function (userId, doc, fields, modifier) {                 //
  //  // can only change your own documents                            //
  //  //console.log("this is the user id##########################" + userId);
  //  return doc._id === userId;                                       //
  //},                                                                 //
  update: function () {                                                // 14
    return false;                                                      //
  },                                                                   //
  remove: function () {                                                // 15
    return false;                                                      //
  }                                                                    //
});                                                                    //
                                                                       //
Meteor.users.deny({                                                    // 18
  insert: function () {                                                // 19
    return true;                                                       //
  },                                                                   //
  update: function () {                                                // 20
    return true;                                                       //
  },                                                                   //
  remove: function () {                                                // 21
    return true;                                                       //
  }                                                                    //
});                                                                    //
                                                                       //
var userProfile = new SimpleSchema({                                   // 25
                                                                       //
  //User - basic info:                                                 //
  userSlug: {                                                          // 28
    type: String,                                                      // 29
    index: 1,                                                          // 30
    unique: true,                                                      // 31
    label: "userSlug",                                                 // 32
    optional: true                                                     // 33
  },                                                                   //
  userType: {                                                          // 35
    type: String,                                                      // 36
    optional: true,                                                    // 37
    defaultValue: "User",                                              // 38
    allowedValues: ['User', 'Hotel', 'Business', 'Guide', 'ContentMaker'],
    label: "userType"                                                  // 40
  },                                                                   //
  userSearchType: {                                                    // 42
    type: String,                                                      // 43
    optional: true,                                                    // 44
    allowedValues: ['top', 'md', 'hidden'],                            // 45
    label: "userSearchType"                                            // 46
  },                                                                   //
                                                                       //
  description: {                                                       // 49
    type: String,                                                      // 50
    label: "Description",                                              // 51
    defaultValue: " ",                                                 // 52
    optional: true                                                     // 53
  },                                                                   //
  shareDotId: {                                                        // 55
    type: String,                                                      // 56
    optional: true, //TBD                                              // 57
    autoform: {                                                        // 58
      type: "hidden",                                                  // 59
      label: false                                                     // 60
    }                                                                  //
  },                                                                   //
  profileDotId: {                                                      // 63
    type: String,                                                      // 64
    label: "Profile Dot Id",                                           // 65
    optional: true, //TBD                                              // 66
    autoform: {                                                        // 67
      type: "hidden",                                                  // 68
      label: false                                                     // 69
    }                                                                  //
  },                                                                   //
  createdByUserDotz: {                                                 // 72
    type: [String],                                                    // 73
    label: "Created By User Dotz",                                     // 74
    optional: true,                                                    // 75
    defaultValue: [], //TBD                                            // 76
    autoform: {                                                        // 77
      type: "hidden",                                                  // 78
      label: false                                                     // 79
    }                                                                  //
  },                                                                   //
  createdByUserLists: {                                                // 82
    type: [String],                                                    // 83
    label: "Created By User Lists",                                    // 84
    optional: true,                                                    // 85
    defaultValue: [], //TBD                                            // 86
    autoform: {                                                        // 87
      type: "hidden",                                                  // 88
      label: false                                                     // 89
    }                                                                  //
  },                                                                   //
  userConnections: {                                                   // 92
    type: [Object],                                                    // 93
    blackbox: true,                                                    // 94
    label: "User Connections",                                         // 95
    optional: true,                                                    // 96
    defaultValue: [], //TBD                                            // 97
    autoform: {                                                        // 98
      type: "hidden",                                                  // 99
      label: false                                                     // 100
    }                                                                  //
  },                                                                   //
                                                                       //
  //User Images:                                                       //
  profileImage: {                                                      // 105
    type: String,                                                      // 106
    label: "Profile Image",                                            // 107
    defaultValue: "https://dotz-deployment.s3.amazonaws.com/LbioLJaWMBKnqbtrm/dotz-user-avatar.png", //TBD
    //optional: true,                                                  //
    autoform: {                                                        // 110
      type: "hidden",                                                  // 111
      label: false                                                     // 112
    }                                                                  //
  },                                                                   //
  coverImage: {                                                        // 115
    type: String,                                                      // 116
    label: "Cover Image",                                              // 117
    defaultValue: "https://dotz-deployment.s3.amazonaws.com/qFpzRxMf3RdQjcmJt/dotz_new_cover.jpg", //TBD
    //optional: true,                                                  //
    autoform: {                                                        // 120
      type: "hidden",                                                  // 121
      label: false                                                     // 122
    }                                                                  //
  },                                                                   //
  userImagesUrls: {                                                    // 125
    type: [String],                                                    // 126
    optional: true,                                                    // 127
    defaultValue: [],                                                  // 128
    autoform: {                                                        // 129
      type: "hidden",                                                  // 130
      label: false                                                     // 131
    }                                                                  //
  },                                                                   //
                                                                       //
  //User Links and Location:                                           //
                                                                       //
  location: {                                                          // 137
    type: Schema.location,                                             // 138
    optional: true                                                     // 139
  },                                                                   //
                                                                       //
  userAddress: {                                                       // 142
    type: String,                                                      // 143
    label: "Home Address",                                             // 144
    optional: true                                                     // 145
  },                                                                   //
                                                                       //
  userAddressLatLng: {                                                 // 148
    type: [Number],                                                    // 149
    decimal: true,                                                     // 150
    optional: true                                                     // 151
  },                                                                   //
                                                                       //
  userAddressPlaceId: {                                                // 154
    type: String,                                                      // 155
    optional: true                                                     // 156
  },                                                                   //
                                                                       //
  userAddressName: {                                                   // 159
    type: String,                                                      // 160
    optional: true                                                     // 161
  },                                                                   //
                                                                       //
  websiteUrl: {                                                        // 164
    type: String,                                                      // 165
    label: "Website",                                                  // 166
    optional: true,                                                    // 167
    defaultValue: ""                                                   // 168
  },                                                                   //
  facebookAccountUrl: {                                                // 170
    type: String,                                                      // 171
    label: "Facebook",                                                 // 172
    optional: true                                                     // 173
  },                                                                   //
  twitterAccountUrl: {                                                 // 175
    type: String,                                                      // 176
    label: "Twitter",                                                  // 177
    optional: true                                                     // 178
  },                                                                   //
  googleAccountUrl: {                                                  // 180
    type: String,                                                      // 181
    label: "Google",                                                   // 182
    optional: true                                                     // 183
  },                                                                   //
  pinterestAccountUrl: {                                               // 185
    type: String,                                                      // 186
    label: "Pinterest",                                                // 187
    optional: true,                                                    // 188
    autoform: {                                                        // 189
      type: "hidden",                                                  // 190
      label: false                                                     // 191
    }                                                                  //
  },                                                                   //
  tripAdvisorAccountUrl: {                                             // 194
    type: String,                                                      // 195
    label: "Pinterest",                                                // 196
    optional: true,                                                    // 197
    autoform: {                                                        // 198
      type: "hidden",                                                  // 199
      label: false                                                     // 200
    }                                                                  //
  },                                                                   //
  foursquareAccountUrl: {                                              // 203
    type: String,                                                      // 204
    label: "Pinterest",                                                // 205
    optional: true,                                                    // 206
    autoform: {                                                        // 207
      type: "hidden",                                                  // 208
      label: false                                                     // 209
    }                                                                  //
  },                                                                   //
  spareAccountsUrlArray: {                                             // 212
    type: [String],                                                    // 213
    label: "Pinterest",                                                // 214
    optional: true,                                                    // 215
    autoform: {                                                        // 216
      type: "hidden",                                                  // 217
      label: false                                                     // 218
    }                                                                  //
  },                                                                   //
                                                                       //
  //User feed and following/followers                                  //
  following: {                                                         // 223
    type: [String],                                                    // 224
    optional: true,                                                    // 225
    defaultValue: [], //TBD                                            // 226
    autoform: {                                                        // 227
      type: "hidden",                                                  // 228
      label: false                                                     // 229
    }                                                                  //
  },                                                                   //
  followers: {                                                         // 232
    type: [String],                                                    // 233
    optional: true,                                                    // 234
    defaultValue: [], //TBD                                            // 235
    autoform: {                                                        // 236
      type: "hidden",                                                  // 237
      label: false                                                     // 238
    }                                                                  //
  },                                                                   //
  feedDotz: {                                                          // 241
    type: [Object],                                                    // 242
    blackbox: true,                                                    // 243
    optional: true,                                                    // 244
    autoform: {                                                        // 245
      type: "hidden",                                                  // 246
      label: false                                                     // 247
    }                                                                  //
  },                                                                   //
                                                                       //
  //info Fields:                                                       //
  userContext: {                                                       // 252
    type: [String],                                                    // 253
    defaultValue: [], //TBD                                            // 254
    optional: true,                                                    // 255
    autoform: {                                                        // 256
      type: "hidden",                                                  // 257
      label: false                                                     // 258
    }                                                                  //
  },                                                                   //
  userInfo: {                                                          // 261
    type: [String],                                                    // 262
    defaultValue: [], //TBD                                            // 263
    optional: true,                                                    // 264
    autoform: {                                                        // 265
      type: "hidden",                                                  // 266
      label: false                                                     // 267
    }                                                                  //
  },                                                                   //
                                                                       //
  //Search fields:                                                     //
  searchInfo: {                                                        // 272
    type: [Object],                                                    // 273
    defaultValue: [], //TBD                                            // 274
    blackbox: true,                                                    // 275
    optional: true,                                                    // 276
    autoform: {                                                        // 277
      type: "hidden",                                                  // 278
      label: false                                                     // 279
    }                                                                  //
  },                                                                   //
                                                                       //
  //Flexible object :)                                                 //
  moreInfo: {                                                          // 284
    type: Object,                                                      // 285
    defaultValue: {}, //TBD                                            // 286
    blackbox: true,                                                    // 287
    optional: true,                                                    // 288
    autoform: {                                                        // 289
      type: "hidden",                                                  // 290
      label: false                                                     // 291
    }                                                                  //
  }                                                                    //
                                                                       //
});                                                                    //
                                                                       //
//TBD: especially the "blackBox" and the roles (and the username >> Regex..?)
var user = new SimpleSchema({                                          // 298
  username: {                                                          // 299
    type: String,                                                      // 300
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true                                                     // 304
  },                                                                   //
  emails: {                                                            // 306
    type: Array,                                                       // 307
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true                                                     // 311
  },                                                                   //
  "emails.$": {                                                        // 313
    type: Object                                                       // 314
  },                                                                   //
  "emails.$.address": {                                                // 316
    type: String,                                                      // 317
    regEx: SimpleSchema.RegEx.Email                                    // 318
  },                                                                   //
  "emails.$.verified": {                                               // 320
    type: Boolean                                                      // 321
  },                                                                   //
  createdAt: {                                                         // 323
    type: Date                                                         // 324
  },                                                                   //
  profile: {                                                           // 326
    type: userProfile,                                                 // 327
    optional: true                                                     // 328
  },                                                                   //
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {                                                          // 331
    type: Object,                                                      // 332
    optional: true,                                                    // 333
    blackbox: true                                                     // 334
  },                                                                   //
  // Add `roles` to your schema if you use the meteor-roles package.   //
  // Option 1: Object type                                             //
  // If you specify that type as Object, you must also specify the     //
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.     //
  // Example:                                                          //
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);     //
  // You can't mix and match adding with and without a group since     //
  // you will fail validation in some cases.                           //
  roles: {                                                             // 344
    type: Object,                                                      // 345
    optional: true,                                                    // 346
    blackbox: true                                                     // 347
  }                                                                    //
  //// Option 2: [String] type                                         //
  //// If you are sure you will never need to use role groups, then    //
  //// you can specify [String] as the type                            //
  //roles: {                                                           //
  //  type: [String],                                                  //
  //  optional: true                                                   //
  //}                                                                  //
});                                                                    //
                                                                       //
Meteor.users.attachSchema(user);                                       // 358
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=users.js.map
