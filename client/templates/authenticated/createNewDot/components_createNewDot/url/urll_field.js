
Template.url.onRendered(function(){
  _embedlyFacebookIntegration();
});


Template.url.events({

  'click #url': function(){
    console.log("click 1 ");
    //_getFromFacebook(linkUrl);
  }

});



function _embedlyFacebookIntegration(){

  //let dotFromGoogleCard = Session.get('dotFromGoogleCard');
  //if ( dotFromGoogleCard ) {
  //  $('#url').val(dotFromGoogleCard);
  //}
  //console.log("dotFromGoogleCard  >> " + dotFromGoogleCard)

  var embedlyScript = 'http://cdn.embed.ly/jquery.embedly-3.0.5.min.js';
  DocHead.loadScript(embedlyScript);

  var embedlyPreviewScript = 'http://cdn.embed.ly/jquery.preview-0.3.2.min.js';
  DocHead.loadScript(embedlyPreviewScript, function(){

  let title = $('#title').val();
  let description = $('#description').val();

  if (! (title || description) ) {
      $('#url').on('loading', function(){
        //Modules.client.createDotClearForm(); //TODO >>> TBD ?
        Modules.client.createDotLoading();
      });

    ////FACEBOOK SECTION:
    //let linkUrl = $('#url').val();
    //console.log("######### linkUrl >>>>> " + linkUrl);
    //if (linkUrl && linkUrl.indexOf('https://www.facebook.com') > -1){
    //  Modules.client.facebook.getPostData(function(error,data){
    //    if (error){
    //      Bert.alert(error.message, 'danger');
    //      Modules.client.createDotFinishedLoading();
    //    }else{
    //      Modules.client.updateCreateDotFields(undefined,undefined,data.message,undefined);
    //      Session.set('fbPostAuthorData', data.from); //TODO MOVE IT TO UPDATE CREATE DOT FIELDS.
    //    }
    //  });
    //} else {
    //    $('#url').preview({
    //    key: EMBEDLY_KEY,
    //    //'a9c7184df19745069d3bccd2b1c17a6a',
    //    //old key:'ac95ba6487c94c12a42edafe22cff281',
    //
    //    success: function(){
    //      Session.set("embedlyObj", $('#url').data('preview') );
    //      let data = $('#url').data('preview');
    //      //console.log("data is >>> " + data)
    //      Modules.client.updateCreateDotFields(undefined, data.title, data.description, data.thumbnail_url);
    //    },
    //    error: function(obj){
    //      Session.set("embedlyObj", undefined );
    //    }
    //  });
    //
    //}


      $('#url').preview({
        key: EMBEDLY_KEY,
        //'a9c7184df19745069d3bccd2b1c17a6a',
        //old key:'ac95ba6487c94c12a42edafe22cff281',

        success: function(){
          Session.set("embedlyObj", $('#url').data('preview') );
          let data = $('#url').data('preview');

          //TODO >>> TBD:
          console.log("In success :)")
          let linkUrl = $('#url').val();
          if (linkUrl && linkUrl.indexOf('https://www.facebook.com') > -1){
            _getFromFacebook(linkUrl);
          } else {
            Modules.client.updateCreateDotFields(undefined, data.title, data.description, data.thumbnail_url);
          }
          //console.log("data is >>> " + data)
        },
        error: function(obj){
          //FACEBOOK SECTION
          Session.set("embedlyObj", undefined );
          if (obj.provider_url.indexOf('https://www.facebook.com') > -1){
            _getFromFacebook(obj.provider_url);
          }
        }
      });
  }

  });
}


function _getFromFacebook(linkUrl){

  console.log("######### linkUrl 33333333 >>>>> " + linkUrl);

  //if (linkUrl && linkUrl.indexOf('https://www.facebook.com') > -1){
    Modules.client.facebook.getPostData(function(error,data) {
      if (error){
        Bert.alert(error.message, 'danger');
        Modules.client.createDotFinishedLoading();
      }else if (data) {
        console.log("data.message >>>>> " + data.message);
        Modules.client.updateCreateDotFields(undefined,undefined,data.message, undefined, linkUrl);
        Session.set('fbPostAuthorData', data.from); //TODO MOVE IT TO UPDATE CREATE DOT FIELDS.
      }
    });
  //}

}
