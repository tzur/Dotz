Template.dashboard.onCreated(function() {

  //TODO: fix this BAD practice @otni
  if (Meteor.user().profile.userSlug === ("marvin-bot") ) {
    console.log("Hi hacker! we got you :) Keep calm, and fix this BAD practice + we build normal dashboard soon <3")
  } else {
    FlowRouter.go('/');
  }

});
