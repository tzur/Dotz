//const publicRedirect = () => {
//  if ( Meteor.userId() ) {
//    FlowRouter.go( 'index' );
//  }
//};

const publicRoutes = FlowRouter.group({
  name: 'public'
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

//TBD: we need to move the user page to the global-route area (coming soon):
publicRoutes.route( '/:userSlug', {
  name: 'user-show',
  action() {
    BlazeLayout.render( 'default', { yield: 'userShow' } );
  }
});

//TBD: we need to move the dotShow page to the global-route area (coming soon):
///:userSlug/:dotType/:dotSlug
publicRoutes.route( '/:userSlug/:dotType/:dotSlug', {
  name: 'dot-show',
  action() {
    BlazeLayout.render( 'default', { yield: 'dotShow' } );
  }
});

publicRoutes.route( '/main/search', {
  name: 'search',
  action() {
    BlazeLayout.render( 'default', { yield: 'searchBox' } );
  }
});
