/*
 * Users Schema:
 */

//allow+deny >>>> TBD!!!!

Meteor.users.allow({
  insert: () => true,
  //update: function (userId, doc, fields, modifier) {
  //  // can only change your own documents
  //  //console.log("this is the user id##########################" + userId);
  //  return doc._id === userId;
  //},
  update: () => true,
  remove: () => true
});

Meteor.users.deny({
  insert: () => false,
  update: () => false,
  remove: () => false
});


let userProfile = new SimpleSchema({

  //User - basic info:
  userSlug: {
    type: String,
    label: "Slug",
    defaultValue: " ",
    optional: true
  },
  description: {
    type: String,
    label: "Description",
    defaultValue: " ",
    optional: true
  },
  profileDotId:{
    type: String,
    label: "Profile Dot Id",
    optional: true, //TBD
    autoform: {
      type: "hidden",
      label: false
    }
  },
  createdByUserDotz:{
    type:[String],
    label: "Created By User Dotz",
    optional: true,
    defaultValue: [], //TBD
    autoform: {
      type: "hidden",
      label: false
    }
  },

  createdByUserLists:{
    type:[String],
    label: "Created By User Lists",
    optional: true,
    defaultValue: [], //TBD
    autoform: {
      type: "hidden",
      label: false
    }
  },

  userConnections:{
    type:[Object],
    blackbox:true,
    label: "User Connections",
    optional: true,
    defaultValue: [], //TBD
    autoform: {
      type: "hidden",
      label: false
    }
  },

  ////User Counters - TBD:
  //dotsCounter:{
  //  type: String,
  //  label: "Dots",
  //  defaultValue: "0",
  //  autoform: {
  //    type: "hidden",
  //    label: false
  //  }
  //},
  //connectionsCounter:{
  //  type: String,
  //  label: "Connections",
  //  defaultValue: "0",
  //  autoform: {
  //    type: "hidden",
  //    label: false
  //  }
  //},

  //User Images:
  profileImage:{
    type: String,
    label: "Profile Image",
    defaultValue: "https://dotz-tlv-development.s3.amazonaws.com/33nkhiBnh3eWh7sbo/dotz.jpg", //TBD
    //optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  coverImage:{
    type: String,
    label: "Cover Image",
    defaultValue: "https://dotz-tlv-development.s3.amazonaws.com/33nkhiBnh3eWh7sbo/city-dotz.jpg", //TBD
    //optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  userImagesUrls:{
    type: [String],
    optional: true,
    defaultValue: [],
    autoform: {
      type: "hidden",
      label: false
    }
  },

  //User Links and Location:

  location: {
    type: Schema.location,
    optional: true
  },

  userAddress:{
    type: String,
    label: "Home Address",
    optional: true
  },

  userAddressLatLng:{
    type: [Number],
    decimal:true,
    optional: true
  },

  userAddressPlaceId:{
    type: String,
    optional: true
  },

  userAddressName:{
    type: String,
    optional: true
  },

  websiteUrl:{
    type: String,
    label: "Website",
    optional: true,
    defaultValue: ""
  },
  facebookAccountUrl:{
    type: String,
    label: "Facebook",
    optional: true
  },
  twitterAccountUrl:{
    type: String,
    label: "Twitter",
    optional: true
  },
  googleAccountUrl:{
    type: String,
    label: "Google",
    optional: true
  },
  pinterestAccountUrl:{
    type: String,
    label: "Pinterest",
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  tripAdvisorAccountUrl:{
    type: String,
    label: "Pinterest",
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  foursquareAccountUrl:{
    type: String,
    label: "Pinterest",
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  spareAccountsUrlArray:{
    type: [String],
    label: "Pinterest",
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },

  //User feed and following/followers
  following:{
    type: [String],
    optional: true,
    defaultValue: [], //TBD
    autoform:{
      type:"hidden",
      label: false
    }
  },
  followers:{
    type: [String],
    optional: true,
    defaultValue: [], //TBD
    autoform:{
      type:"hidden",
      label: false
    }
  },
  feedDotz:{
    type: [Object],
    blackbox: true,
    optional: true,
    autoform:{
      type:"hidden",
      label: false
    }
  },

  //info Fields:
  userContext: {
    type: [String],
    defaultValue: [], //TBD
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  userInfo: {
    type: [String],
    defaultValue: [], //TBD
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },

  //Search fields:
  searchInfo:{
    type: [Object],
    defaultValue: [], //TBD
    blackbox: true,
    optional: true,
    autoform:{
      type:"hidden",
      label: false
    }
  },

  //Flexible object :)
  moreInfo:{
      type: Object,
    defaultValue: {}, //TBD
    blackbox: true,
      optional: true,
      autoform:{
        type:"hidden",
        label: false
      }
  }

});

//TBD: especially the "blackBox" and the roles (and the username >> Regex..?)
let user = new SimpleSchema({
  username: {
    type: String,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  },
  emails: {
    type: Array,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: userProfile,
    optional: true
  },
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // Add `roles` to your schema if you use the meteor-roles package.
  // Option 1: Object type
  // If you specify that type as Object, you must also specify the
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // Example:
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
  // You can't mix and match adding with and without a group since
  // you will fail validation in some cases.
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  }
  //// Option 2: [String] type
  //// If you are sure you will never need to use role groups, then
  //// you can specify [String] as the type
  //roles: {
  //  type: [String],
  //  optional: true
  //}
});

Meteor.users.attachSchema(user);
