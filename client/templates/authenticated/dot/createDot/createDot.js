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
  })
});
Template.createDot.helpers({

  dotzOptions: function(){
    return Modules.both.Dotz.getDotUserDotz(Meteor.user().profile.profileDotId);
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

