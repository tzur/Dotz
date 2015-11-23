Template.index.onCreated( () => {
  DocHead.setTitle("Dotz");

  if ( Meteor.user() ) {
    FlowRouter.go('/' + Meteor.user().profile.userSlug);
  }
  //Template.instance().subscribe( 'template' );

});


Template.index.events({

  'click .signup': function() {
    Modal.show('signUpModal');
  },

  'click .login': function() {
    Modal.show('loginModal');
  }


});
