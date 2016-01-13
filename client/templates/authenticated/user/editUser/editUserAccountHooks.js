
let locationObject;
let editUserHooks = {

  before: {
    "method-update": function(doc){

      let docFields = ["profile.description", "profile.websiteUrl", "profile.facebookAccountUrl",
                              "profile.twitterAccountUrl", "profile.googleAccountUrl"];
      docFields.forEach(function(fieldName){
          if(!doc.$set[fieldName]){
            doc.$set[fieldName] = null
          }
      });

      if(Session.get('userCoverImageUrl')){
        doc.$set["profile.coverImage"]= Session.get('userCoverImageUrl');
      }
      if(Session.get('userProfileImageUrl')) {
        doc.$set["profile.profileImage"]= Session.get('userProfileImageUrl');
      }
      if(Session.get('locationObject')){
        doc.$set["profile.location"]= Modules.client.Dotz.createLocationObject(Session.get('locationObject'));
      }

    return (doc);
    }
  },

  onSuccess: function (update, result) {
    Session.set("userCoverImageUrl", undefined);
    Session.set("userProfileImageUrl", undefined);
    Session.set("locationObject", undefined);
    Modal.hide('editUserAccountModal');
    Meteor.call('addOrEditObjectInAlgolia', Meteor.user().profile.userSlug, true);
    FlowRouter.go('/' + Meteor.user().profile.userSlug);
  }
};

AutoForm.addHooks('editUserAccountForm', editUserHooks);



