/**
 * Created by avivhatzir on 12/11/2015.
 */

Schema.editUserAccount = new SimpleSchema({

  //User - basic info:
  "profile.userSlug": {
    type: String,
    label: "Slug",
    defaultValue: " ",
    optional: true
  },
  "profile.description": {
    type: String,
    label: "Description",
    defaultValue: " ",
    optional: true
  },

  //User Images:
  "profile.profileImage": {
    type: String,
    optional: true,
    label: "Profile Image",
    defaultValue: "https://dotz-tlv-development.s3.amazonaws.com/33nkhiBnh3eWh7sbo/dotz.jpg", //TBD
    //optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  "profile.coverImage": {
    type: String,
    optional: true,
    label: "Cover Image",
    defaultValue: "https://dotz-tlv-development.s3.amazonaws.com/33nkhiBnh3eWh7sbo/city-dotz.jpg", //TBD
    //optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  "profile.userImagesUrls": {
    type: [String],
    optional: true,
    defaultValue: [],
    autoform: {
      type: "hidden",
      label: false
    }
  },

  //User Links and Location:

  "profile.location": {
    type: Schema.location,
    blackbox: true,
    optional: true
  },

  "profile.websiteUrl": {
    type: String,
    label: "Website",
    optional: true,
    defaultValue: ""
  },
  "profile.facebookAccountUrl": {
    type: String,
    label: "Facebook",
    optional: true
  },
  "profile.twitterAccountUrl": {
    type: String,
    label: "Twitter",
    optional: true
  },
  "profile.googleAccountUrl": {
    type: String,
    label: "Google",
    optional: true
  },
  "profile.pinterestAccountUrl": {
    type: String,
    label: "Pinterest",
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  "profile.tripAdvisorAccountUrl": {
    type: String,
    label: "Pinterest",
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  "profile.foursquareAccountUrl": {
    type: String,
    label: "Pinterest",
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  username: {
    type: String,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  }
});

  //User feed and following/followers

//TBD: especially the "blackBox" and the roles (and the username >> Regex..?)
