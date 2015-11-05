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
authenticatedRoutes.route( '/main/feed', {
  name: 'feed',
  action() {
    BlazeLayout.render( 'default', { yield: 'feed' } );
  }
});

authenticatedRoutes.route( '/main/createDot', {
  name: 'createDot',
  action() {
    BlazeLayout.render( 'default', { yield: 'createDot' } );
  }
});

authenticatedRoutes.route( '/main/addImage', {
  name: 'form',
  action() {
    BlazeLayout.render( 'default', { yield: 'upload' } );
  }
});

