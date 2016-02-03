Template.imgUploader.helpers({
  isImageUrl: function(){
    return Session.get('dotCoverImg');
  },
  imagePreviewUrl: function(){
    return Session.get('dotCoverImg');
  }
});
Template.imgUploader.events({
  'change input[type="file"]': function ( event, template ) {
    console.log("Spinner On");
    Modules.client.uploadToAmazonS3( { event: event, template: template }, function(error, result){
      if (error){
        console.log(error);
        console.log("Spinner Off");
      }else{
        Session.set('dotCoverImg', result);
        console.log("spinner off");
      }
    } );
  }
});
