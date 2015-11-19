(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/modules/createDotModule.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/*                                                                     //
 * "Fake module" createDot (aka Meteor Method..)                       //
 * will insert the new dot and connect it to the parent dot.           //
 */                                                                    //
                                                                       //
var _docValidation = function (doc) {                                  // 6
  if (doc.dotType === "List" && doc.inDotz.length > 100) {             // 7
    return false;                                                      // 8
  } else {                                                             //
    return doc.ownerUserId === Meteor.userId() && doc.inDotz.length === 1;
  }                                                                    //
};                                                                     //
                                                                       //
//add an unique slug:                                                  //
var _slugUniquenessValidation = function (dotId, slug) {               // 16
  Meteor.call('updateDotSlug', dotId, slug, function (error, result) {
    //TBD:                                                             //
    if (error) {                                                       // 19
      newSlug = slug + '-2';                                           // 20
      _slugUniquenessValidation(dotId, newSlug);                       // 21
    } else {                                                           //
      return slug; //TBD                                               // 24
    }                                                                  //
  });                                                                  //
};                                                                     //
                                                                       //
Meteor.methods({                                                       // 29
                                                                       //
  createDot: function (doc) {                                          // 31
    check(doc, Schema.dotSchema);                                      // 32
    if (doc.location) {                                                // 33
      check(doc.location, Schema.location);                            // 34
    }                                                                  //
    var Future = Meteor.npmRequire('fibers/future');                   // 36
    var myFuture = new Future();                                       // 37
                                                                       //
    if (_docValidation(doc)) {                                         // 39
                                                                       //
      Meteor.call('insertDot', doc, function (error, result) {         // 41
        if (!error) {                                                  // 42
          (function () {                                               //
                                                                       //
            var dotId = result;                                        // 44
            var titleRegex = doc.title.replace(/ /g, "-");             // 45
            var slug = (Meteor.user().profile.userSlug + '/' + doc.dotType + '/' + titleRegex).toLowerCase();
                                                                       //
            //slug Process:                                            //
            if (_slugUniquenessValidation(dotId, slug)) {              // 49
              //TBD                                                    //
            }                                                          //
            var dotSlug = Dotz.findOne(result).dotSlug;                // 52
                                                                       //
            var smartRef = new Modules.both.Dotz.smartRef(dotId, Meteor.userId(), doc.inDotz[0], CREATE_ACTION, doc.ownerUserId);
            Modules.both.Dotz.connectDot(smartRef);                    // 55
                                                                       //
            if (dotSlug && doc.dotType === "List") {                   // 57
              Meteor.call('updateCreatedByUserLists', Meteor.userId(), dotId, function (error, result) {
                if (error) {                                           // 59
                  console.log("THE ERROR IS:" + error);                // 60
                  myFuture['throw'](error);                            // 61
                } else if (!error) {                                   //
                  myFuture['return'](dotSlug);                         // 64
                }                                                      //
              });                                                      //
            } else if (dotSlug && doc.dotType === "Dot") {             //
              Meteor.call('updateCreatedByUserDotz', Meteor.userId(), dotId, function (error, result) {
                if (error) {                                           // 70
                  console.log("THE ERROR IS:" + error);                // 71
                  myFuture['throw'](error);                            // 72
                } else if (!error) {                                   //
                  myFuture['return'](dotSlug);                         // 75
                }                                                      //
              });                                                      //
            }                                                          //
          })();                                                        //
        } else {                                                       //
          console.log("ASD ASD ASD ASD ASD ASD");                      // 82
          myFuture['throw'](error);                                    // 83
        }                                                              //
      });                                                              //
    } else {                                                           //
      // can be refactored and put it to the _docValidation method this specific exceptions
      console.log("there is a problem with one of the follows: " + "          doc.ownerUserId, doc.inDotz.length, doc.dotzConnectedByOthers.length ");
    }                                                                  //
    return myFuture.wait();                                            // 93
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=createDotModule.js.map
