Template.createCollection.onCreated(function(){
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


Template.createCollection.onRendered(function(){

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


Template.createCollection.onDestroyed(function(){
  Session.set('mapTabActive', undefined);
  Session.set('coverImageUrl', undefined);
});


Template.createCollection.helpers({

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
  }
});


Template.createCollection.events({
  'click #createToOneOfMyDotz': function(e){
    e.preventDefault();
    Modal.show('createToOneOfMyDotzModal', {
      data:{
        isActionTypeCreate: true
      }
    })
  },

  'click #createToOneOfMyDotz, click #createToMyProfile': function(){
    Session.set('dotType', "Collection");
  },

  //'click #createToMyProfile': function(){
  //  Modal.hide('createToOneOfMyDotzModal');
  //},

  'change #addDotImage input[type="file"]': function(){
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
  }

});

