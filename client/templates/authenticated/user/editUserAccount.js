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
    if (Session.get("userProfileImageUrl") || this.data.user.profile.profileImage) {
      return true
    }
  },

  userProfileImagePreviewUrl: function () {
    if (Session.get("userProfileImageUrl")) {
      let imageUrl = Session.get("userProfileImageUrl");
      return (imageUrl);
    }
    else if (this.data.user.profile.profileImage) {
      return this.data.user.profile.profileImage
    }
  },

  isUserCoverImageUrl: function () {
    if (Session.get("userCoverImageUrl") || this.data.user.profile.coverImage) {
      return true
    }
  },

  userCoverImagePreviewUrl: function () {
    if (Session.get("userCoverImageUrl")) {
      let imageUrl = Session.get("userCoverImageUrl");
      return (imageUrl);
    }
    else if (this.data.user.profile.coverImageUrl) {
      return this.data.user.profile.coverImageUrl
    }
  }

});

Template.editUserAccount.events({
  'change #profilePicInput':function(){
    if(document.getElementById('profilePicInput').files[0]) {
      document.getElementById("submit").disabled = true;
      Session.set('isUploading', true);
      Session.set('downloadUrl', false);
      var i = 0;
      var loadingInterval = setInterval(function () {
        i = ++i % 4;
        document.getElementById("profileLoading").innerHTML = ("Loading " + Array(i + 1).join("."));
      }, 800);
      uploader.send(document.getElementById('profilePicInput').files[0], function (error, downloadUrl) {
        if (error) {
          // Log service detailed response.
          console.error('Error uploading', uploader.xhr.response);
          alert(error);
        }
        else {
          Session.set("downloadUrl", downloadUrl);
          clearInterval(loadingInterval);
          document.getElementById("profileLoading").innerHTML = "Done :)";
          document.getElementById("submit").disabled = false;
          Meteor.call('addImageToUser', Meteor.userId(), downloadUrl, true);

        }
      });
    }
  },

  'change #coverPicInput':function(){
    if(document.getElementById('coverPicInput').files[0]) {
      document.getElementById("submit").disabled = true;
      Session.set('isUploading', true);
      Session.set('downloadUrl', false);
      var i = 0;
      var loadingInterval = setInterval(function () {
        i = ++i % 4;
        document.getElementById("coverLoading").innerHTML = ("Loading " + Array(i + 1).join("."));
      }, 800);
      uploader.send(document.getElementById('coverPicInput').files[0], function (error, downloadUrl) {
        if (error) {
          // Log service detailed response.
          console.error('Error uploading', uploader.xhr.response);
          alert(error);
        }
        else {
          Session.set("downloadUrl", downloadUrl);
          clearInterval(loadingInterval);
          var dotId = Session.get("dotId");
          document.getElementById("coverLoading").innerHTML = "Done :)";
          document.getElementById("submit").disabled = false;
          Meteor.call('addImageToUser', Meteor.userId(), downloadUrl, false);

        }
      });
    }
  },

  'click .submit':function(){
    //if we need some force edit :)
    //console.log("im here");
    //Meteor.call('forceUpdate', Meteor.userId(),website, descriptoin);
    Session.set("isUploading", undefined);
    Session.set("downloadUrl", undefined);
  }
});
