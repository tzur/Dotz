
Template.signup.onCreated(function(){
  Session.set('spinnerOn', false);
});


Template.signup.onRendered( () => {
  Modules.client.signup({
    form: "#signup",
    template: Template.instance()
  });
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
  },
  'click .btn-facebook': () => {
    return Meteor.loginWithFacebook({
      requestPermissions: ['email']
    }, function(error,result) {
      if (error) {
        return console.log(error.reason);
      }
      else{
        Meteor.call('signInWithFaceBook', function(error,result){
          if (error){
            console.log(error);
          }
          else{
            Modal.hide('signUpModal');
            console.log(result + "  facebook slug");
            FlowRouter.go('/' + Meteor.user().profile.userSlug);
            Bert.alert( 'Welcome!', 'success' );
            let userCategory;
            if(!Session.get('landingPageCategory')){
              userCategory = "Tech"
            }
            else{
              userCategory = Session.get('landingPageCategory');
            }
            Meteor.call('convertUsersToRoleOwner', userCategory, 'firstGroup', Meteor.userId() , function(error){
              if(!error){
                //Algolia:
                Meteor.call('addOrEditObjectInAlgolia', Meteor.user().profile.userSlug, true, function(error, result){
                  if (error) {
                    console.log(" addOrEditObjectInAlgolia Error >> " + error);
                  }
                });
              }
            });
          }
        })
      }
    });
  }
});


  //Discover 3rd part accounts: https://themeteorchef.com/recipes/roll-your-own-authentication/


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

