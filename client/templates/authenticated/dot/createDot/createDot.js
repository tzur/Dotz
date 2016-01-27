Template.createDotModal.onCreated(function(){
  Session.set('spinnerOn', false);
  var self = this;
  self.autorun(function(){
    if(Meteor.userId()){
      self.subscribe('profileDot', Meteor.userId());
      self.subscribe('tags');
    }
    let profileDot = Dotz.findOne({_id: Meteor.user().profile.profileDotId});
    if (profileDot){
      self.subscribe('availableDotzForCreate', profileDot);
    }
  });

});
Template.createDotModal.onRendered(function(){
  Modules.client.Dotz.limitCharactersAndCounter('#titleField', 50, '#titleFieldFeedback');
  Modules.client.autoTagger(Template.instance());
  Session.set("dotType", "Dot");

  var embedlyScript = 'http://cdn.embed.ly/jquery.embedly-3.0.5.min.js';
  DocHead.loadScript(embedlyScript);

  var embedlyPreviewScript = 'http://cdn.embed.ly/jquery.preview-0.3.2.min.js';
  DocHead.loadScript(embedlyPreviewScript, function(){
    $('#url').on('loading', function(){
      Modules.client.createDotClearForm();
      Modules.client.createDotLoading();
    });
    $('#url').preview({
      key:'ac95ba6487c94c12a42edafe22cff281',
      success: function(){
        Session.set("embedlyObj", $('#url').data('preview') );
        let embedlyObj = $('#url').data('preview');
          $("#titleField").val(embedlyObj.title);
          $("#descriptionField").val(embedlyObj.description);

          Modules.client.uploadToAmazonViaUrl(embedlyObj.thumbnail_url, function(error){
            if (error){
              console.log(error);
              Modules.client.createDotFinishedLoading();
            }else{
              Modules.client.createDotFinishedLoading();
            }
          });

      },
      error: function(obj){
        if (obj.provider_url.indexOf('https://www.facebook.com') > -1){
          Modules.client.facebook.getPostData(function(error,data){
            if (error){
              Bert.alert(error.message, 'danger');
              Modules.client.createDotFinishedLoading();
            }else{
              $("#descriptionField").val(data.message).trigger('change');
              Session.set('fbPostAuthorData', data.from);
              Modules.client.createDotFinishedLoading();
            }
          });
        }
      }

      });
  });



// On submit add hidden inputs to the form.

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
  Session.set('parentDot', undefined);
  Session.set('spinnerOn', false);


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
  },

  isParentDotSet: function(){
   return (Session.get('parentDot'));
  },
  isSpinnerOn: function(){
    return Session.get('spinnerOn');
  }
});


Template.createDotModal.events({

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
      document.getElementById("publishButton").disabled = true;
      if(document.getElementById("createToMyLists")){
        document.getElementById("createToMyLists").disabled = true;
      }
      if (Session.get('coverImageUrl')) {
        c.stop();
        document.getElementById("publishButton").disabled = false;
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
  },
  'click #publishButton': function(){
    Session.set('spinnerOn', true);
  }



});

