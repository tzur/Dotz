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
  });

});

Template.createDot.onRendered(function(){

  $('#myTabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show')
  });

});


Template.createDot.helpers({

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
  'click #createToOneOfMyDotz': function(e){
    e.preventDefault();
    Modal.show('createToOneOfMyDotzModal', {
      data:{
        isActionTypeCreate: true
      }
    })
  }

});

