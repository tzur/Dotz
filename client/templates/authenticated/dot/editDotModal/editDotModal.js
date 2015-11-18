/**
 * Created by avivhatzir on 04/11/2015.
 */
Template.editDotModal.onRendered(function(){
  Session.set('coverImageUrl', undefined);
});

Template.editDotModal.onRendered(function(){
  Modules.client.Dotz.limitCharactersAndCounter('#editTitleField', 50, '#titleFieldFeedback');

});



Template.editDotModal.onDestroyed(function(){
  Session.set("editModalMapTabActive", undefined);
  Session.set('coverImageUrl', undefined);
  Session.set("locationObject", undefined);
  Session.set("dotDoc", undefined);

});

Template.editDotModal.helpers({

  isList: function() {
    return (this.data.dot.dotType === "List")
  },

  selectedDotDoc: function () {
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
  },

  mapTabActive: function() {
    return (Session.get("editModalMapTabActive"))
  },

  editDotSchema: function(){
    return Schema.editDotSchema;
  }
});


Template.editDotModal.events({
  //exit the modal window after submmiting the edits
  'click .editDot': function () {

  },

  'click #exitBtn': function(){
    Modal.hide('createListModal');
  },

  'change input[type="file"]' ( event, template ) {
    Session.set('coverImageUrl', undefined);
    Tracker.autorun(function(c) {
      document.getElementById("submitEditDot").disabled = true;
      if (Session.get('coverImageUrl')) {
        c.stop();
        document.getElementById("submitEditDot").disabled = false;
      }
    });
    Modules.client.uploadToAmazonS3( { event: event, template: template } );
  },

  'click #mapTab': function(){
    Session.set('editModalMapTabActive', true);
  }


});
