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
  $('#createDotModal').modal({
    backdrop: 'static'
  });


});

Template.createDotModal.onRendered(function(){



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
  }
});

Template.createDotModal.events({
  'click #createToOneOfMyDotz': function(e){
    e.preventDefault();
    Modal.show('createToOneOfMyDotzModal', {
      data:{
        isActionTypeCreate: true
      }
    })
  },

  //'click #createToMyProfile': function(){
  //  Modal.hide('createToOneOfMyDotzModal');
  //},


  'change #addDotImage input[type="file"]': function(){
    Tracker.autorun(function(c) {
      document.getElementById("createToMyProfile").disabled = true;
      document.getElementById("createToOneOfMyDotz").disabled = true;

      if (Session.get('coverImageUrl')) {
        c.stop();
        document.getElementById("createToMyProfile").disabled = false;
        document.getElementById("createToOneOfMyDotz").disabled = false;
      }
    });
  },

  'click #mapTab': function(){
    Session.set('mapTabActive', true);
  }

});

