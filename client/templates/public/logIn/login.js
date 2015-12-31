Template.login.onRendered( () => {
  Modules.client.login( { form: "#login", template: Template.instance() } );
});


Template.login.onCreated(function(){
  Session.set('spinnerOn', false);
});


Template.login.helpers({
  isSpinnerOn: function(){
    return Session.get('spinnerOn');
  }
});


Template.login.events({
  'click #loginButton': function(event){
  //event.preventDefault();
  Session.set('spinnerOn', true)
  },

  'click .btn-facebook': () => {
    return Meteor.loginWithFacebook({
      requestPermissions: ['email', 'user_friends', 'user_posts']
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
          }
        })
      }
    });
  },

  'click #switchToSignUp': function() {
    Modal.hide('loginModal');
    setTimeout(function(){ Modal.show('signUpModal'); }, 500);
  },

  'click #recoverPassword': function() {
    Modal.hide('loginModal');
    setTimeout(function(){ Modal.show('recoverPasswordModal'); }, 500);
  }

});
