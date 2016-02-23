Template.dashboard.onCreated(function() {

  //TODO: fix this BAD practice @otni
  let allowedUserSlug = "otniel-levi";
  if (Meteor.user().profile.userSlug === allowedUserSlug) {
    console.log("Keep calm, and fix this BAD practice + build normal dashboard...")
  } else {
    FlowRouter.go('/');
  }

});
