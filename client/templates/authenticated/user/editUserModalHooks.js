
let locationObject;
let editUserHooks = {

  before: {
    "method-update": function(doc){

        let docFields = ["profile.description", "profile.location", "profile.websiteUrl", "profile.facebookAccountUrl",
                              "profile.twitterAccountUrl", "profile.googleAccountUrl"];
        docFields.forEach(function(fieldName){
          if(!doc.$set[fieldName]){
            doc.$set[fieldName] = null
          }
        });

    return (doc);
    }
  },

  onSuccess: function (update, result) {
    FlowRouter.go('/' + Meteor.user().profile.userSlug);
  }
};

AutoForm.addHooks('editUserAccountForm', editUserHooks);



