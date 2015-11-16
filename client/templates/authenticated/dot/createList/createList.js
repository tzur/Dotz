Template.createListModal.onCreated(function(){
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


Template.createListModal.onRendered(function(){
  Session.set("dotType", "List");
  Modules.client.Dotz.limitCharactersAndCounter('#titleField', 50, '#titleFieldFeedback');
});

Template.createListModal.onDestroyed(function(){
  Session.set('mapTabActive', undefined);
  Session.set('coverImageUrl', undefined);
  Session.set('dotType', undefined);

});


Template.createListModal.helpers({

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
  },
  //dotType: function(){
  //  console.log("im running");
  //  return
  //
  //}
});


Template.createListModal.events({
  'click #createToOneOfMyDotz': function(e){
    e.preventDefault();
    Modal.show('createToOneOfMyDotzModal', {
      data:{
        isActionTypeCreate: true
      }
    })
  },

  'click #exitBtn': function(){
    Modal.hide('createListModal');
  },

  //'click #createToMyProfile': function(){
  //  Modal.hide('createToOneOfMyDotzModal');
  //},

  'change #addDotImage-list input[type="file"]': function(){
    Tracker.autorun(function(c) {
      document.getElementById("createToMyProfile").disabled = true;
      if(document.getElementById("createToOneOfMyDotz")){
        document.getElementById("createToOneOfMyDotz").disabled = true;
      }
      if (Session.get('coverImageUrl')) {
        c.stop();
        document.getElementById("createToMyProfile").disabled = false;
        if(document.getElementById("createToOneOfMyDotz")){
          document.getElementById("createToOneOfMyDotz").disabled = false;
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

