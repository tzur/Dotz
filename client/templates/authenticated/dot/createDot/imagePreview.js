/**
 * Created by avivhatzir on 27/10/2015.
 */
Template.imagePreview.helpers({

  imagePreviewUrl: function(){
    const imageUrl = Session.get("coverImageUrl");
    return ('"' + imageUrl + '"');
  }
});
