(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/routes/authenticated.js                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var authenticatedRedirect = function () {                              // 1
  if (!Meteor.loggingIn() && !Meteor.userId()) {                       // 2
    FlowRouter.go('index');                                            // 3
  }                                                                    //
};                                                                     //
var authenticatedRoutes = FlowRouter.group({                           // 6
  name: 'authenticated',                                               // 7
  triggersEnter: [authenticatedRedirect]                               // 8
});                                                                    //
                                                                       //
authenticatedRoutes.route('/', {                                       // 11
  name: 'index',                                                       // 12
  action: function () {                                                // 13
    BlazeLayout.render('default', { 'yield': 'index' });               // 14
  }                                                                    //
});                                                                    //
authenticatedRoutes.route('/dashboard', {                              // 17
  name: 'dashboard',                                                   // 18
  action: function () {                                                // 19
    BlazeLayout.render('default', { 'yield': 'dashboard' });           // 20
  }                                                                    //
});                                                                    //
authenticatedRoutes.route('/main/feed', {                              // 23
  name: 'feed',                                                        // 24
  action: function () {                                                // 25
    BlazeLayout.render('default', { 'yield': 'feed' });                // 26
  }                                                                    //
});                                                                    //
                                                                       //
authenticatedRoutes.route('/main/newDot', {                            // 30
  name: 'newDot',                                                      // 31
  action: function () {                                                // 32
    BlazeLayout.render('default', { 'yield': 'createDot' });           // 33
  }                                                                    //
});                                                                    //
                                                                       //
authenticatedRoutes.route('/main/newCollection', {                     // 37
  name: 'newCollection',                                               // 38
  action: function () {                                                // 39
    BlazeLayout.render('default', { 'yield': 'createCollection' });    // 40
  }                                                                    //
});                                                                    //
                                                                       //
authenticatedRoutes.route('/main/addImage', {                          // 44
  name: 'form',                                                        // 45
  action: function () {                                                // 46
    BlazeLayout.render('default', { 'yield': 'upload' });              // 47
  }                                                                    //
});                                                                    //
                                                                       //
authenticatedRoutes.route('/editprofile', {                            // 51
  name: 'editprofile',                                                 // 52
  action: function () {                                                // 53
    BlazeLayout.render('default', { 'yield': 'editUserAccount' });     // 54
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=authenticated.js.map
