
let locationObject;
let editUserHooks = {
  onSuccess: function (update, result) {
    FlowRouter.go('/' + Meteor.user().profile.userSlug);
  }
};

AutoForm.addHooks('editUserAccountForm', editUserHooks);



