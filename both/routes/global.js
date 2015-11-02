//const globalRedirect = () => {
//  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
//    FlowRouter.go( 'index' );
//  }
//};
//
//const globalRoutes = FlowRouter.group({
//  name: 'global',
//  triggersEnter: [ globalRedirect ]
//});
//
////TBD:
//globalRoutes.route( '/dot/:dotId', {
//  name: 'user-show',
//  action() {
//    BlazeLayout.render( 'default', { yield: 'userShow' } );
//  }
//});
