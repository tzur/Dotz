(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/routes/public.js                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
//const publicRedirect = () => {                                       //
//  if ( Meteor.userId() ) {                                           //
//    FlowRouter.go( 'index' );                                        //
//  }                                                                  //
//};                                                                   //
                                                                       //
var publicRoutes = FlowRouter.group({                                  // 7
  name: 'public'                                                       // 8
});                                                                    //
                                                                       //
publicRoutes.route('/signup', {                                        // 11
  name: 'signup',                                                      // 12
  action: function () {                                                // 13
    BlazeLayout.render('default', { 'yield': 'signup' });              // 14
  }                                                                    //
});                                                                    //
publicRoutes.route('/login', {                                         // 17
  name: 'login',                                                       // 18
  action: function () {                                                // 19
    BlazeLayout.render('default', { 'yield': 'login' });               // 20
  }                                                                    //
});                                                                    //
publicRoutes.route('/recover-password', {                              // 23
  name: 'recover-password',                                            // 24
  action: function () {                                                // 25
    BlazeLayout.render('default', { 'yield': 'recoverPassword' });     // 26
  }                                                                    //
});                                                                    //
publicRoutes.route('/reset-password/:token', {                         // 29
  name: 'reset-password',                                              // 30
  action: function () {                                                // 31
    BlazeLayout.render('default', { 'yield': 'resetPassword' });       // 32
  }                                                                    //
});                                                                    //
                                                                       //
//TBD: we need to move the user page to the global-route area (coming soon):
publicRoutes.route('/:userSlug', {                                     // 37
  name: 'user-show',                                                   // 38
  action: function () {                                                // 39
    BlazeLayout.render('default', { 'yield': 'userShow' });            // 40
  }                                                                    //
});                                                                    //
                                                                       //
//TBD: we need to move the dotShow page to the global-route area (coming soon):
///:userSlug/:dotType/:dotSlug                                         //
publicRoutes.route('/:userSlug/:dotType/:dotSlug', {                   // 46
  name: 'dot-show',                                                    // 47
  action: function () {                                                // 48
    BlazeLayout.render('default', { 'yield': 'dotShow' });             // 49
  }                                                                    //
});                                                                    //
                                                                       //
publicRoutes.route('/main/search', {                                   // 53
  name: 'search',                                                      // 54
  action: function () {                                                // 55
    BlazeLayout.render('default', { 'yield': 'searchBox' });           // 56
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=public.js.map
