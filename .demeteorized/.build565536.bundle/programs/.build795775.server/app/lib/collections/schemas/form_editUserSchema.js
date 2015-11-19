(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/schemas/form_editUserSchema.js                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 12/11/2015.                                //
 */                                                                    //
                                                                       //
Schema.editUserAccount = new SimpleSchema({                            // 5
                                                                       //
  //User - basic info:                                                 //
  "profile.userSlug": {                                                // 8
    type: String,                                                      // 9
    label: "Slug",                                                     // 10
    defaultValue: " ",                                                 // 11
    optional: true                                                     // 12
  },                                                                   //
  "profile.description": {                                             // 14
    type: String,                                                      // 15
    label: "Description",                                              // 16
    defaultValue: " ",                                                 // 17
    optional: true                                                     // 18
  },                                                                   //
                                                                       //
  //User Images:                                                       //
  "profile.profileImage": {                                            // 22
    type: String,                                                      // 23
    optional: true,                                                    // 24
    label: "Profile Image",                                            // 25
    defaultValue: "https://dotz-tlv-development.s3.amazonaws.com/33nkhiBnh3eWh7sbo/dotz.jpg", //TBD
    //optional: true,                                                  //
    autoform: {                                                        // 28
      type: "hidden",                                                  // 29
      label: false                                                     // 30
    }                                                                  //
  },                                                                   //
  "profile.coverImage": {                                              // 33
    type: String,                                                      // 34
    optional: true,                                                    // 35
    label: "Cover Image",                                              // 36
    defaultValue: "https://dotz-tlv-development.s3.amazonaws.com/33nkhiBnh3eWh7sbo/city-dotz.jpg", //TBD
    //optional: true,                                                  //
    autoform: {                                                        // 39
      type: "hidden",                                                  // 40
      label: false                                                     // 41
    }                                                                  //
  },                                                                   //
  "profile.userImagesUrls": {                                          // 44
    type: [String],                                                    // 45
    optional: true,                                                    // 46
    defaultValue: [],                                                  // 47
    autoform: {                                                        // 48
      type: "hidden",                                                  // 49
      label: false                                                     // 50
    }                                                                  //
  },                                                                   //
                                                                       //
  //User Links and Location:                                           //
                                                                       //
  "profile.location": {                                                // 56
    type: Schema.location,                                             // 57
    blackbox: true,                                                    // 58
    optional: true                                                     // 59
  },                                                                   //
                                                                       //
  "profile.websiteUrl": {                                              // 62
    type: String,                                                      // 63
    label: "Website",                                                  // 64
    optional: true,                                                    // 65
    defaultValue: ""                                                   // 66
  },                                                                   //
  "profile.facebookAccountUrl": {                                      // 68
    type: String,                                                      // 69
    label: "Facebook",                                                 // 70
    optional: true                                                     // 71
  },                                                                   //
  "profile.twitterAccountUrl": {                                       // 73
    type: String,                                                      // 74
    label: "Twitter",                                                  // 75
    optional: true                                                     // 76
  },                                                                   //
  "profile.googleAccountUrl": {                                        // 78
    type: String,                                                      // 79
    label: "Google",                                                   // 80
    optional: true                                                     // 81
  },                                                                   //
  "profile.pinterestAccountUrl": {                                     // 83
    type: String,                                                      // 84
    label: "Pinterest",                                                // 85
    optional: true,                                                    // 86
    autoform: {                                                        // 87
      type: "hidden",                                                  // 88
      label: false                                                     // 89
    }                                                                  //
  },                                                                   //
  "profile.tripAdvisorAccountUrl": {                                   // 92
    type: String,                                                      // 93
    label: "Pinterest",                                                // 94
    optional: true,                                                    // 95
    autoform: {                                                        // 96
      type: "hidden",                                                  // 97
      label: false                                                     // 98
    }                                                                  //
  },                                                                   //
  "profile.foursquareAccountUrl": {                                    // 101
    type: String,                                                      // 102
    label: "Pinterest",                                                // 103
    optional: true,                                                    // 104
    autoform: {                                                        // 105
      type: "hidden",                                                  // 106
      label: false                                                     // 107
    }                                                                  //
  },                                                                   //
  username: {                                                          // 110
    type: String,                                                      // 111
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true                                                     // 115
  }                                                                    //
});                                                                    //
                                                                       //
//User feed and following/followers                                    //
                                                                       //
//TBD: especially the "blackBox" and the roles (and the username >> Regex..?)
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=form_editUserSchema.js.map
