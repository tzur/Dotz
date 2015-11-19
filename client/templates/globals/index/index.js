Template.index.onCreated( () => {
  Template.instance().subscribe( 'template' );
});



Template.index.events({

  'click .signup': function() {
    Modal.show('signUpModal');
  },

  'click .login': function() {
    Modal.show('loginModal');
  }


});
