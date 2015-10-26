/*
 * Users Schema:
 */


Meteor.users.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Meteor.users.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});


let userProfile = new SimpleSchema({

  //User basic
  description: {
    type: String,
    label: "Description",
    optional: true
  },
  profileDotId:{
    type: String,
    //optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  createdByUserDots:{
    type:[String],
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },


  //User Counters:
  dotsCounter:{
    type: String,
    label: "Dots",
    defaultValue: "0",
    autoform: {
      type: "hidden",
      label: false
    }
  },
  connectionsCounter:{
    type: String,
    label: "Connections",
    defaultValue: "0",
    autoform: {
      type: "hidden",
      label: false
    }
  },

  //User Images:
  profileImage:{
    type: String,
    label: "Profile Image",
    defaultValue: "wwwwwwwwwwwwwwww", //TBD
    //optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  coverImage:{
    type: String,
    label: "Cover Image",
    defaultValue: "wwwwwwwwwwwwwwww", //TBD
    //optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  userImagesUrls:{
    type: [String],
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },

  //User Links and Location:
  userAddress:{
    type: String,
    label: "Home Address",
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
  GoogleAccountUrl:{
    type: String,
    label: "Google+",
    optional: true
  },
  pinterestAccountUrl:{
    type: String,
    label: "Pinterest",
    optional: true
  },

  //User feed and following/followers
  following:{
    type: [String],
    optional: true,
    autoform:{
      type:"hidden",
      label: false
    }
  },
  followers:{
    type: [String],
    optional: true,
    autoform:{
      type:"hidden",
      label: false
    }
  },
  feedDotz:{
    type: [Schema.feedRef],
    optional: true,
    autoform:{
      type:"hidden",
      label: false
    }
  },

  // TBD!!
  //Flexible Fields:
  flexibleString:{
    type: String,
    optional: true,
    autoform:{
      type:"hidden",
      label: false
    },
  flexibleArray:{
    type: [String],
    optional: true,
    autoform:{
      type:"hidden",
      label: false
    }
  }


});

//OTNI: TBD
user = new SimpleSchema({
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
  },
  //// Option 2: [String] type
  //// If you are sure you will never need to use role groups, then
  //// you can specify [String] as the type
  //roles: {
  //  type: [String],
  //  optional: true
  //}
});

Meteor.users.attachSchema(user);
