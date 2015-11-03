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

authenticatedRoutes.route( '/createDot', {
  name: 'createDot',
  action() {
    BlazeLayout.render( 'default', { yield: 'createDot' } );
  }
});

authenticatedRoutes.route( '/addImage', {
  name: 'form',
  action() {
    BlazeLayout.render( 'default', { yield: 'upload' } );
  }
});



//TBD: we need to move the user page to the global-route area (coming soon):
authenticatedRoutes.route( '/user/:username', {
  name: 'user-show',
  action() {
    BlazeLayout.render( 'default', { yield: 'userShow' } );
  }
});

//TBD: we need to move the dotShow page to the global-route area (coming soon):
authenticatedRoutes.route( '/dot/:dotId', {
  name: 'dot-show',
  action() {
    BlazeLayout.render( 'default', { yield: 'dotShow' } );
  }
});
