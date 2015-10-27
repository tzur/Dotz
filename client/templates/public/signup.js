Template.signup.onRendered( () => {
  Modules.client.signup({
    form: "#signup",
    template: Template.instance()
  });
});

Template.signup.events({
  'submit form': ( event ) => event.preventDefault()


  //Discover 3rd part accounts: https://themeteorchef.com/recipes/roll-your-own-authentication/

  //'click .btn-facebook': () => {
  //  return Meteor.loginWithFacebook({
  //    requestPermissions: ['email']
  //  }, function(error) {
  //    if (error) {
  //      return console.log(error.reason);
  //    }
  //  });
  //},
  //'click .btn-google': function() {
  //  return Meteor.loginWithGoogle({
  //    requestPermissions: ['email']
  //  }, function(error) {
  //    if (error) {
  //      return console.log(error.reason);
  //    }
  //  });
  //},
  //'click .btn-twitter': function() {
  //  return Meteor.loginWithTwitter(function(error) {
  //    if (error) {
  //      return console.log(error.reason);
  //    }
  //  });
  //}

});
