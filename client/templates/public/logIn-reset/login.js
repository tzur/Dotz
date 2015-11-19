Template.login.onRendered( () => {
  Modules.client.login( { form: "#login", template: Template.instance() } );
});

Template.login.events({
  'submit form': ( event ) => event.preventDefault(),

  //'click #switch-signup-modal': function(){
  //  Modal.hide('loginModal');
  //  Modal.show('signUpModal');
  //}

  'click #switchToSignUp': function() {
    Modal.show('signUpModal');
  }


});
