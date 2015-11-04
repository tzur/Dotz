Template.createDot.onCreated(function(){
  var self = this;
  self.autorun(function(){
    if(Meteor.userId()){
      self.subscribe('profileDot', Meteor.userId());
    }
    let profileDot = Dotz.findOne({_id: Meteor.user().profile.profileDotId});
    if (profileDot){
      self.subscribe('availableDotzForCreate', profileDot);
    }
    GoogleMaps.load({key: "AIzaSyC35BXkB-3zxK89xynEq038-mE6Ts9Dg-0", libraries: 'places'});
  });

});
Template.createDot.helpers({

  dotzOptions: function(){
    if(Modules.client.Dotz.getUserProfileDotDotz){
      //return Modules.client.Dotz.getUserProfileDotDotz(Meteor.user().profile.profileDotId);
      return Dotz.find({ownerUserId: Meteor.userId()})
    }
  },

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
  }

});
Template.createDot.events({
  'change #target': function(e){
    let parentIds = $('input[type="checkbox"]:checked').map(function() { return this.value; }).get();
    Session.set('parentDot', parentIds);
  }
});

