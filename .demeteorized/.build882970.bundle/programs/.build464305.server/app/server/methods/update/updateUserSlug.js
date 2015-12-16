(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/update/updateUserSlug.js                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var Future = Meteor.npmRequire('fibers/future');                       // 1
                                                                       //
var _formatSlug = function (value) {                                   // 3
  var formatted = value.toLowerCase().replace(/ /g, '-').replace(/[-]+/g, '-').replace(/[^\w\x80-\xFF-]+/g, '');
  return formatted;                                                    // 9
};                                                                     //
                                                                       //
var _slugUniquenessValidation = function (userId, slug) {              // 12
  Meteor.call('setUserSlug', slug, function (error, result) {          // 13
    //TBD:                                                             //
    if (error) {                                                       // 15
      var random = Math.floor(Math.random() * 9 + 1);                  // 16
      var newSlug = slug + random;                                     // 17
      _slugUniquenessValidation(userId, newSlug);                      // 18
    } else {                                                           //
      myFutureUserSlug['return'](slug);                                // 21
    }                                                                  //
  });                                                                  //
};                                                                     //
                                                                       //
Meteor.methods({                                                       // 26
  createUserSlug: function (slug) {                                    // 27
    check(slug, String);                                               // 28
    var userId = Meteor.userId();                                      // 29
    myFutureUserSlug = new Future();                                   // 30
    var formattedSlug = _formatSlug(slug);                             // 31
    //let fullSlug = (Meteor.user().profile.userSlug + '/' + doc.dotType.toLowerCase() + '/' + formattedSlug);
    _slugUniquenessValidation(userId, formattedSlug);                  // 33
    return myFutureUserSlug.wait();                                    // 34
  },                                                                   //
                                                                       //
  setUserSlug: function (slug) {                                       // 37
    check(slug, String);                                               // 38
    var userId = Meteor.userId();                                      // 39
    Meteor.users.update({ _id: userId }, { $set: { "profile.userSlug": slug } });
  },                                                                   //
                                                                       //
  //TBD: special method for user-signUp process:                       //
  // Does not work with try/exception..                                //
  updateUserSlug: function (userId, slug) {                            // 45
    check(userId, String);                                             // 46
    check(slug, String);                                               // 47
    Meteor.users.update({ _id: userId }, { $set: { "profile.userSlug": slug } });
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=updateUserSlug.js.map
