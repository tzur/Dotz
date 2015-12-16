(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/routes/public.js                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var publicRedirect = function () {                                     // 1
  if (Meteor.userId()) {                                               // 2
    var userSlug = Meteor.user().profile.userSlug;                     // 3
    FlowRouter.go('/' + userSlug);                                     // 4
  }                                                                    //
};                                                                     //
                                                                       //
var publicRoutes = FlowRouter.group({                                  // 8
  name: 'public'                                                       // 9
});                                                                    //
                                                                       //
publicRoutes.route('/', {                                              // 12
  name: 'landing',                                                     // 13
  action: function () {                                                // 14
    if (Meteor.user()) {                                               // 15
      var userSlug = Meteor.user().profile.userSlug;                   // 16
      FlowRouter.go('/' + userSlug);                                   // 17
    } else {                                                           //
      //BlazeLayout.render( 'landingSignup' );                         //
      //Session.set('joinUsDivOn', true);                              //
      //Session.set('iAmAHotel', true);                                //
      //Session.set('iAmFromTheHomePage', true);                       //
      //console.log("joinUsDivOn is " + Session.get('joinUsDivOn') );  //
      //console.log("iAmFromTheHomePage is " + Session.get('iAmFromTheHomePage') );
      FlowRouter.go('/dotz');                                          // 25
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
publicRoutes.route('/signup', {                                        // 30
  name: 'signup',                                                      // 31
  action: function () {                                                // 32
    if (Meteor.user()) {                                               // 33
      var userSlug = Meteor.user().profile.userSlug;                   // 34
      FlowRouter.go('/' + userSlug);                                   // 35
    } else {                                                           //
      BlazeLayout.render('landingSignup');                             // 37
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
publicRoutes.route('/login', {                                         // 42
  name: 'login',                                                       // 43
  action: function () {                                                // 44
    if (Meteor.user()) {                                               // 45
      var userSlug = Meteor.user().profile.userSlug;                   // 46
      FlowRouter.go('/' + userSlug);                                   // 47
    } else {                                                           //
      //BlazeLayout.render( 'default', { yield: 'landing-signup' } );  //
      BlazeLayout.render('landingLogin');                              // 50
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
publicRoutes.route('/recover-password', {                              // 56
  name: 'recover-password',                                            // 57
  action: function () {                                                // 58
    BlazeLayout.render('default', { 'yield': 'recoverPassword' });     // 59
  }                                                                    //
});                                                                    //
publicRoutes.route('/reset-password/:token', {                         // 62
  name: 'reset-password',                                              // 63
  action: function () {                                                // 64
    BlazeLayout.render('default', { 'yield': 'resetPassword' });       // 65
  }                                                                    //
});                                                                    //
                                                                       //
publicRoutes.route('/main/search', {                                   // 69
  name: 'search',                                                      // 70
  action: function () {                                                // 71
    BlazeLayout.render('default', { 'yield': 'searchBox' });           // 72
  }                                                                    //
});                                                                    //
                                                                       //
//Special Routing:                                                     //
                                                                       //
//Special routing for TLVglobal email list:                            //
publicRoutes.route('/telavivglobal/dec', {                             // 79
  name: 'dec',                                                         // 80
  action: function () {                                                // 81
    Session.set('joinUsDivOn', true);                                  // 82
    Session.set('iAmAHotel', true);                                    // 83
    //console.log("joinUsDivOn is " + Session.get('joinUsDivOn') );    //
    //console.log("iAmAHotel is " + Session.get('iAmAHotel') );        //
    FlowRouter.go('/telavivglobal');                                   // 86
  }                                                                    //
});                                                                    //
                                                                       //
//Special routing for Hotels link:                                     //
publicRoutes.route('/hotels', {                                        // 91
  name: 'hotels',                                                      // 92
  action: function () {                                                // 93
    Session.set('joinUsDivOn', true);                                  // 94
    Session.set('iAmAHotel', true);                                    // 95
    FlowRouter.go('/signup');                                          // 96
  }                                                                    //
});                                                                    //
                                                                       //
//user & dot Show:                                                     //
                                                                       //
//TBD: we need to move the user page to the global-route area (coming soon):
publicRoutes.route('/:userSlug', {                                     // 105
  name: 'user-show',                                                   // 106
  action: function () {                                                // 107
    BlazeLayout.render('default', { 'yield': 'userShow' });            // 108
  }                                                                    //
});                                                                    //
                                                                       //
//TBD: we need to move the dotShow page to the global-route area (coming soon):
///:userSlug/:dotType/:dotSlug                                         //
publicRoutes.route('/:userSlug/:dotType/:dotSlug', {                   // 114
  name: 'dot-show',                                                    // 115
  action: function () {                                                // 116
    BlazeLayout.render('default', { 'yield': 'dotShow' });             // 117
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=public.js.map
