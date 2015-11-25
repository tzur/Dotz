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
  Session.set('spinnerOn', true);

  } ,
  'click #switchToSignUp': function() {
    Modal.show('signUpModal');
  }


});
