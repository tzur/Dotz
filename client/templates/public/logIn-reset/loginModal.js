
//Template.loginModal.onRendered( () => {
//  Modules.client.login( { form: "#login", template: Template.instance() } );
//});


Template.loginModal.events({

  'submit form': ( event ) => event.preventDefault(),

  //'click #exitBtn': function(){
  //  Modal.hide('loginModal');
  //}

});
