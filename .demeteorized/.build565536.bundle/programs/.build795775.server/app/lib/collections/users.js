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
    return true;                                                       //
  },                                                                   //
  //update: function (userId, doc, fields, modifier) {                 //
  //  // can only change your own documents                            //
  //  //console.log("this is the user id##########################" + userId);
  //  return doc._id === userId;                                       //
  //},                                                                 //
  update: function () {                                                // 14
    return true;                                                       //
  },                                                                   //
  remove: function () {                                                // 15
    return true;                                                       //
  }                                                                    //
});                                                                    //
                                                                       //
Meteor.users.deny({                                                    // 18
  insert: function () {                                                // 19
    return false;                                                      //
  },                                                                   //
  update: function () {                                                // 20
    return false;                                                      //
  },                                                                   //
  remove: function () {                                                // 21
    return false;                                                      //
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
    label: "User Slug",                                                // 32
    optional: true                                                     // 33
  },                                                                   //
  description: {                                                       // 35
    type: String,                                                      // 36
    label: "Description",                                              // 37
    defaultValue: " ",                                                 // 38
    optional: true                                                     // 39
  },                                                                   //
  profileDotId: {                                                      // 41
    type: String,                                                      // 42
    label: "Profile Dot Id",                                           // 43
    optional: true, //TBD                                              // 44
    autoform: {                                                        // 45
      type: "hidden",                                                  // 46
      label: false                                                     // 47
    }                                                                  //
  },                                                                   //
  createdByUserDotz: {                                                 // 50
    type: [String],                                                    // 51
    label: "Created By User Dotz",                                     // 52
    optional: true,                                                    // 53
    defaultValue: [], //TBD                                            // 54
    autoform: {                                                        // 55
      type: "hidden",                                                  // 56
      label: false                                                     // 57
    }                                                                  //
  },                                                                   //
  createdByUserLists: {                                                // 60
    type: [String],                                                    // 61
    label: "Created By User Lists",                                    // 62
    optional: true,                                                    // 63
    defaultValue: [], //TBD                                            // 64
    autoform: {                                                        // 65
      type: "hidden",                                                  // 66
      label: false                                                     // 67
    }                                                                  //
  },                                                                   //
  userConnections: {                                                   // 70
    type: [Object],                                                    // 71
    blackbox: true,                                                    // 72
    label: "User Connections",                                         // 73
    optional: true,                                                    // 74
    defaultValue: [], //TBD                                            // 75
    autoform: {                                                        // 76
      type: "hidden",                                                  // 77
      label: false                                                     // 78
    }                                                                  //
  },                                                                   //
                                                                       //
  //User Images:                                                       //
  profileImage: {                                                      // 83
    type: String,                                                      // 84
    label: "Profile Image",                                            // 85
    defaultValue: "https://dotz-tlv-development.s3.amazonaws.com/33nkhiBnh3eWh7sbo/dotz.jpg", //TBD
    //optional: true,                                                  //
    autoform: {                                                        // 88
      type: "hidden",                                                  // 89
      label: false                                                     // 90
    }                                                                  //
  },                                                                   //
  coverImage: {                                                        // 93
    type: String,                                                      // 94
    label: "Cover Image",                                              // 95
    defaultValue: "https://dotz-tlv-development.s3.amazonaws.com/33nkhiBnh3eWh7sbo/city-dotz.jpg", //TBD
    //optional: true,                                                  //
    autoform: {                                                        // 98
      type: "hidden",                                                  // 99
      label: false                                                     // 100
    }                                                                  //
  },                                                                   //
  userImagesUrls: {                                                    // 103
    type: [String],                                                    // 104
    optional: true,                                                    // 105
    defaultValue: [],                                                  // 106
    autoform: {                                                        // 107
      type: "hidden",                                                  // 108
      label: false                                                     // 109
    }                                                                  //
  },                                                                   //
                                                                       //
  //User Links and Location:                                           //
                                                                       //
  location: {                                                          // 115
    type: Schema.location,                                             // 116
    optional: true                                                     // 117
  },                                                                   //
                                                                       //
  userAddress: {                                                       // 120
    type: String,                                                      // 121
    label: "Home Address",                                             // 122
    optional: true                                                     // 123
  },                                                                   //
                                                                       //
  userAddressLatLng: {                                                 // 126
    type: [Number],                                                    // 127
    decimal: true,                                                     // 128
    optional: true                                                     // 129
  },                                                                   //
                                                                       //
  userAddressPlaceId: {                                                // 132
    type: String,                                                      // 133
    optional: true                                                     // 134
  },                                                                   //
                                                                       //
  userAddressName: {                                                   // 137
    type: String,                                                      // 138
    optional: true                                                     // 139
  },                                                                   //
                                                                       //
  websiteUrl: {                                                        // 142
    type: String,                                                      // 143
    label: "Website",                                                  // 144
    optional: true,                                                    // 145
    defaultValue: ""                                                   // 146
  },                                                                   //
  facebookAccountUrl: {                                                // 148
    type: String,                                                      // 149
    label: "Facebook",                                                 // 150
    optional: true                                                     // 151
  },                                                                   //
  twitterAccountUrl: {                                                 // 153
    type: String,                                                      // 154
    label: "Twitter",                                                  // 155
    optional: true                                                     // 156
  },                                                                   //
  googleAccountUrl: {                                                  // 158
    type: String,                                                      // 159
    label: "Google",                                                   // 160
    optional: true                                                     // 161
  },                                                                   //
  pinterestAccountUrl: {                                               // 163
    type: String,                                                      // 164
    label: "Pinterest",                                                // 165
    optional: true,                                                    // 166
    autoform: {                                                        // 167
      type: "hidden",                                                  // 168
      label: false                                                     // 169
    }                                                                  //
  },                                                                   //
  tripAdvisorAccountUrl: {                                             // 172
    type: String,                                                      // 173
    label: "Pinterest",                                                // 174
    optional: true,                                                    // 175
    autoform: {                                                        // 176
      type: "hidden",                                                  // 177
      label: false                                                     // 178
    }                                                                  //
  },                                                                   //
  foursquareAccountUrl: {                                              // 181
    type: String,                                                      // 182
    label: "Pinterest",                                                // 183
    optional: true,                                                    // 184
    autoform: {                                                        // 185
      type: "hidden",                                                  // 186
      label: false                                                     // 187
    }                                                                  //
  },                                                                   //
  spareAccountsUrlArray: {                                             // 190
    type: [String],                                                    // 191
    label: "Pinterest",                                                // 192
    optional: true,                                                    // 193
    autoform: {                                                        // 194
      type: "hidden",                                                  // 195
      label: false                                                     // 196
    }                                                                  //
  },                                                                   //
                                                                       //
  //User feed and following/followers                                  //
  following: {                                                         // 201
    type: [String],                                                    // 202
    optional: true,                                                    // 203
    defaultValue: [], //TBD                                            // 204
    autoform: {                                                        // 205
      type: "hidden",                                                  // 206
      label: false                                                     // 207
    }                                                                  //
  },                                                                   //
  followers: {                                                         // 210
    type: [String],                                                    // 211
    optional: true,                                                    // 212
    defaultValue: [], //TBD                                            // 213
    autoform: {                                                        // 214
      type: "hidden",                                                  // 215
      label: false                                                     // 216
    }                                                                  //
  },                                                                   //
  feedDotz: {                                                          // 219
    type: [Object],                                                    // 220
    blackbox: true,                                                    // 221
    optional: true,                                                    // 222
    autoform: {                                                        // 223
      type: "hidden",                                                  // 224
      label: false                                                     // 225
    }                                                                  //
  },                                                                   //
                                                                       //
  //info Fields:                                                       //
  userContext: {                                                       // 230
    type: [String],                                                    // 231
    defaultValue: [], //TBD                                            // 232
    optional: true,                                                    // 233
    autoform: {                                                        // 234
      type: "hidden",                                                  // 235
      label: false                                                     // 236
    }                                                                  //
  },                                                                   //
  userInfo: {                                                          // 239
    type: [String],                                                    // 240
    defaultValue: [], //TBD                                            // 241
    optional: true,                                                    // 242
    autoform: {                                                        // 243
      type: "hidden",                                                  // 244
      label: false                                                     // 245
    }                                                                  //
  },                                                                   //
                                                                       //
  //Search fields:                                                     //
  searchInfo: {                                                        // 250
    type: [Object],                                                    // 251
    defaultValue: [], //TBD                                            // 252
    blackbox: true,                                                    // 253
    optional: true,                                                    // 254
    autoform: {                                                        // 255
      type: "hidden",                                                  // 256
      label: false                                                     // 257
    }                                                                  //
  },                                                                   //
                                                                       //
  //Flexible object :)                                                 //
  moreInfo: {                                                          // 262
    type: Object,                                                      // 263
    defaultValue: {}, //TBD                                            // 264
    blackbox: true,                                                    // 265
    optional: true,                                                    // 266
    autoform: {                                                        // 267
      type: "hidden",                                                  // 268
      label: false                                                     // 269
    }                                                                  //
  }                                                                    //
                                                                       //
});                                                                    //
                                                                       //
//TBD: especially the "blackBox" and the roles (and the username >> Regex..?)
var user = new SimpleSchema({                                          // 276
  username: {                                                          // 277
    type: String,                                                      // 278
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true                                                     // 282
  },                                                                   //
  emails: {                                                            // 284
    type: Array,                                                       // 285
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true                                                     // 289
  },                                                                   //
  "emails.$": {                                                        // 291
    type: Object                                                       // 292
  },                                                                   //
  "emails.$.address": {                                                // 294
    type: String,                                                      // 295
    regEx: SimpleSchema.RegEx.Email                                    // 296
  },                                                                   //
  "emails.$.verified": {                                               // 298
    type: Boolean                                                      // 299
  },                                                                   //
  createdAt: {                                                         // 301
    type: Date                                                         // 302
  },                                                                   //
  profile: {                                                           // 304
    type: userProfile,                                                 // 305
    optional: true                                                     // 306
  },                                                                   //
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {                                                          // 309
    type: Object,                                                      // 310
    optional: true,                                                    // 311
    blackbox: true                                                     // 312
  },                                                                   //
  // Add `roles` to your schema if you use the meteor-roles package.   //
  // Option 1: Object type                                             //
  // If you specify that type as Object, you must also specify the     //
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.     //
  // Example:                                                          //
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);     //
  // You can't mix and match adding with and without a group since     //
  // you will fail validation in some cases.                           //
  roles: {                                                             // 322
    type: Object,                                                      // 323
    optional: true,                                                    // 324
    blackbox: true                                                     // 325
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
Meteor.users.attachSchema(user);                                       // 336
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=users.js.map
