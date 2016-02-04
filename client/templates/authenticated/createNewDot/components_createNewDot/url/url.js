Template.url.onRendered(function(){
  _embedlyFacebookIntegration();
});

function _embedlyFacebookIntegration(){
  var embedlyScript = 'http://cdn.embed.ly/jquery.embedly-3.0.5.min.js';
  DocHead.loadScript(embedlyScript);

  var embedlyPreviewScript = 'http://cdn.embed.ly/jquery.preview-0.3.2.min.js';
  DocHead.loadScript(embedlyPreviewScript, function(){
    $('#url').on('loading', function(){
      //Modules.client.createDotClearForm(); //TODO >>> TBD ?
      Modules.client.createDotLoading();
    });
    $('#url').preview({
      key:'ac95ba6487c94c12a42edafe22cff281',

      success: function(){
        Session.set("embedlyObj", $('#url').data('preview') );
        let data = $('#url').data('preview');
        Modules.client.updateCreateDotFields(undefined, data.title, data.description, data.thumbnail_url);
      },

      error: function(obj){
        //FACEBOOK SECTION
        Session.set("embedlyObj", undefined );
        if (obj.provider_url.indexOf('https://www.facebook.com') > -1){
          Modules.client.facebook.getPostData(function(error,data){
            if (error){
              Bert.alert(error.message, 'danger');
              Modules.client.createDotFinishedLoading();
            }else{
              Modules.client.updateCreateDotFields(undefined,undefined,data.message,undefined);
              Session.set('fbPostAuthorData', data.from); //TODO MOVE IT TO UPDATE CREATE DOT FIELDS.
            }
          });
        }
      }

    });
  });
}
