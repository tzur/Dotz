const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

authenticatedRoutes.route( '/createdot', {
  name: 'createDot',
  action() {
    BlazeLayout.render( 'default', { yield: 'createDot' } );
  }
});

authenticatedRoutes.route( '/addimage', {
  name: 'form',
  action() {
    BlazeLayout.render( 'default', { yield: 'upload' } );
  }
});



//TBD: we nee to move the user page to the global-route area (coming soon):
authenticatedRoutes.route( '/user/:userId', {
  name: 'user-show',
  action() {
    BlazeLayout.render( 'default', { yield: 'userShow' } );
  }
});
