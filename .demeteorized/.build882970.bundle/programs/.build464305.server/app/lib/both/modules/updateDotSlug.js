(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/updateDotSlug.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
var _formatSlug = function (value) {                                   // 2
  var formatted = value.toLowerCase().replace(/ /g, '-').replace(/[-]+/g, '-').replace(/[^\w\x80-\xFF-]+/g, '');
  return formatted;                                                    // 8
};                                                                     //
var _slugUniquenessValidation = function (dotId, slug) {               // 10
  var uniqueSlug = undefined;                                          // 11
  Meteor.call('makeUpdateDotSlug', dotId, slug, function (error, result) {
    if (error) {                                                       // 13
      var newSlug = slug + "-2";                                       // 14
      _slugUniquenessValidation(dotId, newSlug);                       // 15
    } else {                                                           //
      uniqueSlug = slug;                                               // 18
      if (Meteor.isServer) {                                           // 19
        myFutureSlug['return'](slug);                                  // 20
      }                                                                //
    }                                                                  //
  });                                                                  //
};                                                                     //
                                                                       //
Meteor.methods({                                                       // 26
  updateDotSlug: function (doc, dotId, dotFirstSlug) {                 // 27
    check(doc, Object);                                                // 28
    check(dotId, String);                                              // 29
    check(dotFirstSlug, String);                                       // 30
    if (Meteor.isServer) {                                             // 31
      var Future = Meteor.npmRequire('fibers/future');                 // 32
      myFutureSlug = new Future();                                     // 33
    }                                                                  //
                                                                       //
    var formattedSlug = _formatSlug(dotFirstSlug);                     // 36
    var fullSlug = Meteor.user().profile.userSlug + '/' + doc.dotType.toLowerCase() + '/' + formattedSlug;
    _slugUniquenessValidation(dotId, fullSlug);                        // 38
    if (Meteor.isServer) {                                             // 39
      return myFutureSlug.wait();                                      // 40
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=updateDotSlug.js.map
