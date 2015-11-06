/**
 * Created by avivhatzir on 04/11/2015.
 */

Template.editDotModal.helpers({
  selectedDotDoc: function () {
    //for the events
    Session.set("dotId", this.data.dot._id);
    return Dotz.findOne({_id: this.data.dot._id});
  },
  isImageUrl: function(){
    if(Session.get("coverImageUrl") || this.data.dot.coverImageUrl){
      return true
    }
  },

  imagePreviewUrl: function() {
    if (Session.get("coverImageUrl")) {
      let imageUrl = Session.get("coverImageUrl");
      return (imageUrl);
    }
    else if (this.data.dot.coverImageUrl){
      return this.data.dot.coverImageUrl
    }
  }

  //dotImage: function(){
  //  if(Session.get('coverImageUrl')){
  //    console.log(Session.get('coverImageUrl'));
  //    return (Session.get('coverImageUrl'));
  //  }
  //  else if (this.data.dot.coverImageUrl){
  //    return (this.data.dot.coverImageUrl);
  //
  //  }
  //
  //}
});

Template.editDotModal.events({
  //exit the modal window after submmiting the edits
  'click .editDot': function () {
    if(Session.get('coverImageUrl')){
      Meteor.call('editDotImage', Session.get('coverImageUrl'), this.data.dot._id);
    }
    Session.set("dotId", undefined);
    Session.set("coverImageUrl", undefined);
    Modal.hide('editDotModal');
  }




  //'change #inputPic':function(){
  //  if(document.getElementById('inputPic').files[0]) {
  //    document.getElementById("submit").disabled = true;
  //    Session.set('isUploading', true);
  //    Session.set('coverImageUrl', false);
  //    var i = 0;
  //    var loadingInterval = setInterval(function () {
  //      i = ++i % 4;
  //      document.getElementById("loading").innerHTML = ("Loading " + Array(i + 1).join("."));
  //    }, 800);
  //    uploader.send(document.getElementById('inputPic').files[0], function (error, downloadUrl) {
  //      if (error) {
  //        // Log service detailed response.
  //        console.error('Error uploading', uploader.xhr.response);
  //        alert(error);
  //      }
  //      else {
  //        Session.set("coverImageUrl", downloadUrl);
  //        clearInterval(loadingInterval);
  //        var dotId = Session.get("dotId");
  //        document.getElementById("loading").innerHTML = "Done :)";
  //        document.getElementById("submit").disabled = false;
  //        if(Session.get('dotId')){
  //          Meteor.call('addImageToDot', dotId, downloadUrl);
  //        }
  //      }
  //    });
  //  }
  //}
});
