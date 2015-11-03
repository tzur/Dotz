const publicRedirect = () => {
  if ( Meteor.userId() ) {
    FlowRouter.go( 'index' );
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render( 'default', { yield: 'signup' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});


//TBD:
//
//publicRoutes.route( '/:username', {
//  name: 'user-show',
//  action() {
//    BlazeLayout.render( 'default', { yield: 'userShow' } );
//  }
//});

////TBD: we need to move the user page to the global-route area (coming soon):
//authenticatedRoutes.route( '/:username', {
//  name: 'user-show',
//  action() {
//    BlazeLayout.render( 'default', { yield: 'userShow' } );
//  }
//});

