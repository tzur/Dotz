Template.createDotModal.onCreated(function(){
  var self = this;
  self.autorun(function(){
    if(Meteor.userId()){
      self.subscribe('profileDot', Meteor.userId());
    }
    let profileDot = Dotz.findOne({_id: Meteor.user().profile.profileDotId});
    if (profileDot){
      self.subscribe('availableDotzForCreate', profileDot);
    }
  });
});


Template.createDotModal.onRendered(function(){
  Modules.client.Dotz.limitCharactersAndCounter('#titleField', 50, '#titleFieldFeedback');
  Session.set("dotType", "Dot")
  //tagsArray = Tools.findOne({docName: "dotzTags"});
  //Meteor.typeahead(".typeahead", tagsArray.tags);


  //$('#myTabs a').click(function (e) {
  //  e.preventDefault();
  //  $(this).tab('show')
  //});
  //$(document).ready(function() {
  //  $(window).keydown(function(event){
  //    if(event.keyCode == 13) {
  //      event.preventDefault();
  //      return false;
  //    }
  //  });
  //});


});

Template.createDotModal.onDestroyed(function(){
  Session.set('mapTabActive', undefined);
  Session.set('coverImageUrl', undefined);
  Session.set('dotType', undefined);

});


Template.createDotModal.helpers({

  isImageUrl: function(){
    if(Session.get("coverImageUrl")){
      return true
    }
  },

  imagePreviewUrl: function(){
    const imageUrl = Session.get("coverImageUrl");
    return (imageUrl);
  },
  profileDotId: function(){
    return Meteor.user().profile.profileDotId;
  },

  mapTabActive: function() {
    return (Session.get("mapTabActive"))
  },

  dotzTags: function(){
    tagsArray = Tools.findOne({docName: "dotzTags"});
    return tagsArray.tags;
  }
});


Template.createDotModal.events({
  //'click #createToOneOfMyDotz': function(e){
  //  e.preventDefault();
  //  Modal.show('createToOneOfMyDotzModal', {
  //    data:{
  //      isActionTypeCreate: true
  //    }
  //  })
  //},

  'click #exitBtn': function(){
    Modal.hide('createDotModal');
  },

  'click .toggle-form': function() {
    $('#form-body').slideToggle(700);
  },

  //'click #createToMyProfile': function(){
  //  Modal.hide('createToOneOfMyDotzModal');
  //},

  'change #addDotImageWraper input[type="file"]': function(){
    Session.set('coverImageUrl', undefined);
    Tracker.autorun(function(c) {
      document.getElementById("createToMyProfile").disabled = true;
      if(document.getElementById("createToMyLists")){
        document.getElementById("createToMyLists").disabled = true;
      }
      if (Session.get('coverImageUrl')) {
        c.stop();
        document.getElementById("createToMyProfile").disabled = false;
        if(document.getElementById("createToMyLists")){
          document.getElementById("createToMyLists").disabled = false;
        }
      }
    });
  },

  'click #mapTab': function(){
    Session.set('mapTabActive', true);
  },

  'click .dotTypeBtn': function(e){
    Session.set("dotType", e.target.id);
  },

  'change input[type="file"]' ( event, template ) {
    Modules.client.uploadToAmazonS3( { event: event, template: template } );
  }

});

