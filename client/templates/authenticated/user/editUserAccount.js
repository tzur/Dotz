/**
 * Created by avivhatzir on 06/11/2015.
 */
var uploader = new Slingshot.Upload("myFileUploads");

//if we need some force edit :), just fill the vars and push insert

//var descriptoin= "";
//var website= "";

Template.editUserAccount.helpers({
  selectedUserDoc: function () {
    return Meteor.user()
  },
  isUserProfileImageUrl: function () {
    if (Session.get("userProfileImageUrl") || Meteor.user().profile.profileImage) {
      return true
    }
  },

  userProfileImagePreviewUrl: function () {
    if (Session.get("userProfileImageUrl")) {
      let imageUrl = Session.get("userProfileImageUrl");
      return (imageUrl);
    }
    else if (Meteor.user().profile.profileImage) {
      return Meteor.user().profile.profileImage
    }
  },

  isUserCoverImageUrl: function () {
    if (Session.get("userCoverImageUrl") || Meteor.user().profile.coverImage) {
      return true
    }
  },

  userCoverImagePreviewUrl: function () {
    if (Session.get("userCoverImageUrl")) {
      let imageUrl = Session.get("userCoverImageUrl");
      return (imageUrl);
    }
    else if (Meteor.user().profile.coverImage) {
      return Meteor.user().profile.coverImage
    }
  }

});

Template.editUserAccount.events({
  'change #coverImageUpload input[type="file"]': function(){
    Tracker.autorun(function(c) {
      document.getElementById("submitEditUser").disabled = true;
      if (Session.get('coverImageUrl')) {
        Session.set('userCoverImageUrl', Session.get('coverImageUrl'));
        c.stop();
        document.getElementById("submitEditUser").disabled = false;
        Session.set('coverImageUrl', undefined);


      }
    });
  },

  'change #profileImageUpload input[type="file"]': function(){
    Tracker.autorun(function(c) {
      document.getElementById("submitEditUser").disabled = true;
      if (Session.get('coverImageUrl')) {
        Session.set('userProfileImageUrl', Session.get('coverImageUrl'));
        c.stop();
        document.getElementById("submitEditUser").disabled = false;
        Session.set('coverImageUrl', undefined);

      }
    });
  },

  'click #submitEditUser':function(){
    //if we need some force edit :)
    //console.log("im here");
    //Meteor.call('forceUpdate', Meteor.userId(),website, descriptoin);
    if(Session.get('userCoverImageUrl')){
      Meteor.call('editUserCoverImage', Session.get('userCoverImageUrl'));
    }
    if(Session.get('userProfileImageUrl')) {
      Meteor.call('editUserProfileImage', Session.get('userProfileImageUrl'));
    }
    if(Session.get('locationObject')){
      Meteor.call('editUserLocation', Session.get('locationObject'));

    }
    Session.set("userCoverImageUrl", undefined);
    Session.set("userProfileImageUrl", undefined);
    Session.set("locationObject", undefined);




  }
});
