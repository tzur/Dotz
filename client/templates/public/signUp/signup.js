Template.signup.onRendered( () => {
  Modules.client.signup({
    form: "#signup",
    template: Template.instance()
  });
});
Template.signup.onCreated(function(){
  Session.set('spinnerOn', false);
});
Template.signup.helpers({
  isSpinnerOn: function(){
    return Session.get('spinnerOn');
  }
});
Template.signup.events({
  'click #signUpButton': function(event){
  },

  'click #switch-login-modal': function() {
    Modal.hide('signUpModal');
    setTimeout(function(){ Modal.show('loginModal'); }, 500);
  }
});


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

