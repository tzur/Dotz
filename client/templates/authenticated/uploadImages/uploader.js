

Template.uploader.events({
//  'change input[type="file"]' ( event, template ) {
//    Modules.client.uploadToAmazonS3( { event: event, template: template } );
//  }

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
