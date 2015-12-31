const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    //FlowRouter.go( 'index-signup' );
    //BlazeLayout.render( 'default', { yield: 'landingLogin' } );
    BlazeLayout.render( 'landingLogin' );
  }
};
const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

//authenticatedRoutes.route( '/', {
//  name: 'index',
//  action() {
//    BlazeLayout.render( 'default', { yield: 'index' } );
//  }
//});

authenticatedRoutes.route( '/main/feed', {
  name: 'feed',
  action() {
    BlazeLayout.render( 'default', { yield: 'feed' } );
  }
});

authenticatedRoutes.route( '/main/fb', {
  name: 'fb',
  action() {
    BlazeLayout.render( 'default', { yield: 'fb' } );
  }
});
authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

authenticatedRoutes.route( '/main/newDot', {
  name: 'newDot',
  action() {
    BlazeLayout.render( 'default', { yield: 'createDot' } );
  }
});

authenticatedRoutes.route( '/main/newCollection', {
  name: 'newCollection',
  action() {
    BlazeLayout.render( 'default', { yield: 'createCollection' } );
  }
});

authenticatedRoutes.route( '/main/addImage', {
  name: 'form',
  action() {
    BlazeLayout.render( 'default', { yield: 'upload' } );
  }
});

authenticatedRoutes.route( '/editprofile', {
  name: 'editprofile',
  action() {
    BlazeLayout.render( 'default', { yield: 'editUserAccount' } );
  }
});

//TBD:
//authenticatedRoutes.route( '/:userSlug/shared-lists', {
//  name: 'shared-lists',
//  action() {
//    BlazeLayout.render( 'default', { yield: 'userShow' } );
//  }
//});

