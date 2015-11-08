let template;

let _getFileFromInput = ( event ) => event.target.files[0];

let _setPlaceholderText = ( string = "Click or Drag a File Here to Upload" ) => {
  template.find( ".alert span" ).innerText = string;
};

let _addImageUrlToDatabase = ( url ) => {
  Meteor.call( "storeImageUrlInDatabase", url, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, "warning" );
      _setPlaceholderText();
    } else {
      Bert.alert( "File uploaded!", "success" );
      _setPlaceholderText();
    }
  });
};

let _addImageUrlToUser = (url) => {
  //Session.set('coverImageUrl', url)
  Meteor.call('editUserCoverImage', url, function(error,result){
    if (error){
      console.log("editUserCoverImage >> Error " + error);
    }
  });

  _setPlaceholderText();
};

let _uploadFileToAmazon = ( file ) => {
  const uploader = new Slingshot.Upload( "uploadToAmazonS3" );

  uploader.send( file, ( error, url ) => {
    if ( error ) {
      Bert.alert( error.message, "warning" );
      _setPlaceholderText();
    } else {
      _addImageUrlToUser( url );
    }
  });
};


let upload = ( options ) => {
  template = options.template;
  let file = _getFileFromInput( options.event );

  _setPlaceholderText( `Uploading ${file.name}...` );
  _uploadFileToAmazon( file );
};

Modules.client.uploadImguserEdit = upload;
