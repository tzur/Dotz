/**
 * Created by avivhatzir on 26/10/2015.
 */

Template.createDot.helpers({

  dotzOptions: function(){
    return Modules.client.dotzToConnectToOptions
  },

  isImageUrl: function(){
    if(Session.get("coverImageUrl")){
      return true
    }
  },

  imagePreviewUrl: function(){
    const imageUrl = Session.get("coverImageUrl");
    return (imageUrl);
  }

});
