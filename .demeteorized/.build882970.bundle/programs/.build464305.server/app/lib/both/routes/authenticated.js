(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/routes/authenticated.js                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var authenticatedRedirect = function () {                              // 1
  if (!Meteor.loggingIn() && !Meteor.userId()) {                       // 2
    //FlowRouter.go( 'index-signup' );                                 //
    //BlazeLayout.render( 'default', { yield: 'landingLogin' } );      //
    BlazeLayout.render('landingLogin');                                // 5
  }                                                                    //
};                                                                     //
var authenticatedRoutes = FlowRouter.group({                           // 8
  name: 'authenticated',                                               // 9
  triggersEnter: [authenticatedRedirect]                               // 10
});                                                                    //
                                                                       //
//authenticatedRoutes.route( '/', {                                    //
//  name: 'index',                                                     //
//  action() {                                                         //
//    BlazeLayout.render( 'default', { yield: 'index' } );             //
//  }                                                                  //
//});                                                                  //
                                                                       //
authenticatedRoutes.route('/main/feed', {                              // 20
  name: 'feed',                                                        // 21
  action: function () {                                                // 22
    BlazeLayout.render('default', { 'yield': 'feed' });                // 23
  }                                                                    //
});                                                                    //
                                                                       //
authenticatedRoutes.route('/dashboard', {                              // 27
  name: 'dashboard',                                                   // 28
  action: function () {                                                // 29
    BlazeLayout.render('default', { 'yield': 'dashboard' });           // 30
  }                                                                    //
});                                                                    //
                                                                       //
authenticatedRoutes.route('/main/newDot', {                            // 34
  name: 'newDot',                                                      // 35
  action: function () {                                                // 36
    BlazeLayout.render('default', { 'yield': 'createDot' });           // 37
  }                                                                    //
});                                                                    //
                                                                       //
authenticatedRoutes.route('/main/newCollection', {                     // 41
  name: 'newCollection',                                               // 42
  action: function () {                                                // 43
    BlazeLayout.render('default', { 'yield': 'createCollection' });    // 44
  }                                                                    //
});                                                                    //
                                                                       //
authenticatedRoutes.route('/main/addImage', {                          // 48
  name: 'form',                                                        // 49
  action: function () {                                                // 50
    BlazeLayout.render('default', { 'yield': 'upload' });              // 51
  }                                                                    //
});                                                                    //
                                                                       //
authenticatedRoutes.route('/editprofile', {                            // 55
  name: 'editprofile',                                                 // 56
  action: function () {                                                // 57
    BlazeLayout.render('default', { 'yield': 'editUserAccount' });     // 58
  }                                                                    //
});                                                                    //
                                                                       //
//TBD:                                                                 //
//authenticatedRoutes.route( '/:userSlug/shared-lists', {              //
//  name: 'shared-lists',                                              //
//  action() {                                                         //
//    BlazeLayout.render( 'default', { yield: 'userShow' } );          //
//  }                                                                  //
//});                                                                  //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=authenticated.js.map
