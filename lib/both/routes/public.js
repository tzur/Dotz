const publicRedirect = () => {
  if ( Meteor.userId() ) {
    let userSlug = Meteor.user().profile.userSlug;
    FlowRouter.go( '/' + userSlug );
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public'
});

publicRoutes.route( '/', {
  name: 'landing',
  action() {
    if ( Meteor.user() ) {
      let userSlug = Meteor.user().profile.userSlug;
      FlowRouter.go( '/' + userSlug );
    } else {
      BlazeLayout.render( 'landingSignup' );
    }
  }
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    if ( Meteor.user() ) {
      let userSlug = Meteor.user().profile.userSlug;
      FlowRouter.go( '/' + userSlug );
    } else {
      BlazeLayout.render( 'landingSignup' );
    }
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    if ( Meteor.user() ) {
      let userSlug = Meteor.user().profile.userSlug;
      FlowRouter.go( '/' + userSlug );
    } else {
      //BlazeLayout.render( 'default', { yield: 'landing-signup' } );
      BlazeLayout.render( 'landingLogin' );
    }

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

//Special routing for TLVglobal:
publicRoutes.route( '/telavivglobal/new', {
  name: 'new',
  action() {
    Session.set('joinUsDivOn', true);
    Session.set('iAmAHotel', true);
    console.log("joinUsDivOn is " + Session.get('joinUsDivOn') );
    console.log("iAmAHotel is " + Session.get('iAmAHotel') );
    FlowRouter.go('/telavivglobal');
  }
});
