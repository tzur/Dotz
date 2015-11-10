/**
 * Created by avivhatzir on 04/11/2015.
 */
Template.editDotModal.onRendered(function(){

});

Template.editDotModal.onDestroyed(function(){
  Session.set("editModalMapTabActive", undefined);
  Session.set('coverImageUrl', undefined);
});

Template.editDotModal.helpers({
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
  }
});


Template.editDotModal.events({
  //exit the modal window after submmiting the edits
  'click .editDot': function () {
    if(Session.get('coverImageUrl')){
      Meteor.call('editDotImage', Session.get('coverImageUrl'), this.data.dot._id);
    }
    if(Session.get('locationObject')) {
      Meteor.call('editDotLocation', Session.get('locationObject'), this.data.dot._id);
    }
    Session.set("coverImageUrl", undefined);
    Session.set("locationObject", undefined);
    if(Session.get("isUserameEdited")) {
      FlowRouter.go('/user/' + dotId)
    }

    Modal.hide('editDotModal');
  },

  'change #editDotImage input[type="file"]': function(){
    Tracker.autorun(function(c) {
      document.getElementById("submitEditDot").disabled = true;
      if (Session.get('coverImageUrl')) {
        c.stop();
        document.getElementById("submitEditDot").disabled = false;
      }
    });
  },

  'click #mapTab': function(){
    Session.set('editModalMapTabActive', true);
  }


});
