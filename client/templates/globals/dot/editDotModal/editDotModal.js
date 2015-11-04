/**
 * Created by avivhatzir on 04/11/2015.
 */
Template.editDotModal.helpers({
  selectedDotDoc: function () {
    console.log("search result " + Dotz.findOne({_id: this.data.dotId}));
    //for the events
    Session.set("dotId", this.data.dotId);
    return Dotz.findOne({_id: this.data.dotId});
  },
  isImageUrl: function(){
    if(this.dot.coverImageUrl){
      return true
    }
  },

  dotImage: function(){
    if(Session.get('downloadUrl')){
      console.log(Session.get('downloadUrl'));
      return (Session.get('downloadUrl'));
    }
    else if (this.data.dotImage){
      return (this.data.dotImage);

    }

  }
});

Template.editDotModal.events({
  //exit the modal window after submmiting the edits
  'click .editDot': function () {
    Session.set("dotId", undefined);
    Session.set("downloadUrl", undefined);
    Modal.hide('editDotModal');
  },

  'change #inputPic':function(){
    if(document.getElementById('inputPic').files[0]) {
      document.getElementById("submit").disabled = true;
      Session.set('isUploading', true);
      Session.set('downloadUrl', false);
      var i = 0;
      var loadingInterval = setInterval(function () {
        i = ++i % 4;
        document.getElementById("loading").innerHTML = ("Loading " + Array(i + 1).join("."));
      }, 800);
      uploader.send(document.getElementById('inputPic').files[0], function (error, downloadUrl) {
        if (error) {
          // Log service detailed response.
          console.error('Error uploading', uploader.xhr.response);
          alert(error);
        }
        else {
          Session.set("downloadUrl", downloadUrl);
          clearInterval(loadingInterval);
          var dotId = Session.get("dotId");
          document.getElementById("loading").innerHTML = "Done :)";
          document.getElementById("submit").disabled = false;
          if(Session.get('dotId')){
            Meteor.call('addImageToDot', dotId, downloadUrl);
          }
        }
      });
    }
  }
});
