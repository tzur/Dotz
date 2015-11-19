
//Template.signUpModal.onRendered( () => {
//  Modules.client.signup({
//    form: "#signup",
//    template: Template.instance()
//  });
//});


Template.signUpModal.events({

  //'submit form': ( event ) => event.preventDefault(),

  'click #exitBtn': function(){
    Modal.hide('signUpModal');
  }

});
