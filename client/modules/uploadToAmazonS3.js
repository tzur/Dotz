function _dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;
}


let template;

let _getFileFromInput = ( event ) => event.target.files[0];

let _setPlaceholderText = ( string = "Click or Drag a File Here to Upload" ) => {
  if (template){
    //TODO tbd wtf? @otni
    //template.find( ".alert span" ).innerText = string;
  }

};

//let _addImageUrlToDatabase = ( url ) => {
//  Meteor.call( "storeImageUrlInDatabase", url, ( error ) => {
//    if ( error ) {
//      Bert.alert( error.reason, "warning" );
//      _setPlaceholderText();
//    } else {
//      Bert.alert( "File uploaded!", "success" );
//      _setPlaceholderText();
//    }
//  });
//};

//TODO: wtf??? @otni
let _addImageUrlToSession = (url) => {
  Session.set('coverImageUrl', url);
  _setPlaceholderText();
};

let _uploadFileToAmazon = ( file, callback ) => {
  Session.set('spinnerImgUploadedOn', true);
  const uploader = new Slingshot.Upload( "uploadToAmazonS3" );
  uploader.send( file, ( error, url ) => {
    if ( error ) {
      Bert.alert( error.message, "warning" );
      _setPlaceholderText();
      callback(error);
    } else {
      Session.set('spinnerImgUploadedOn', undefined);
      callback(undefined, url );
    }
  });
};

let upload = ( options, callback ) => {
  template = options.template;
  let file = _getFileFromInput( options.event );
  _setPlaceholderText( `Uploading ${file.name}...` );
  console.log(" ${file.name} " + $(file.name) );
  _uploadFileToAmazon( file, callback );
};

let uploadToAmazonViaUrl = function(url, callback){
  Session.set('spinnerImgUploadedOn', true);
  Meteor.call('downloadImage', url ,function(error, data){
    if (error){
      console.log(error);
      if (callback){
        callback(error)
      }
    }
    else {
      var myBlob = _dataURItoBlob(data);
      myBlob.name = Math.random().toString();
      _uploadFileToAmazon(myBlob,callback);
    }
  })
};


Modules.client.uploadToAmazonS3 = upload;
Modules.client.uploadToAmazonViaUrl = uploadToAmazonViaUrl;
