(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/routes/configure.js                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
FlowRouter.notFound = {                                                // 1
  action: function () {                                                // 2
    BlazeLayout.render('default', { 'yield': 'notFound' });            // 3
  }                                                                    //
};                                                                     //
                                                                       //
//Accounts.onLogin( () => {                                            //
//  let currentRoute = FlowRouter.current();                           //
//  if ( currentRoute && currentRoute.route.group.name === 'public' ) {
//    FlowRouter.go( 'index' );                                        //
//  }                                                                  //
//});                                                                  //
                                                                       //
if (Meteor.isClient) {                                                 // 14
  Tracker.autorun(function () {                                        // 15
    if (!Meteor.userId() && FlowRouter.current().route) {              // 16
      FlowRouter.go('/');                                              // 17
    }                                                                  //
  });                                                                  //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=configure.js.map
