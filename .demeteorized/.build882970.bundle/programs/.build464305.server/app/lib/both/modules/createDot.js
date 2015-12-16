(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/createDot.js                                       //
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
//add an url-format slug:                                              //
var _formatSlug = function (value) {                                   // 16
  var formatted = value.toLowerCase().replace(/ /g, '-').replace(/[-]+/g, '-').replace(/[^\w\x80-\xFF-]+/g, '');
  return formatted;                                                    // 22
};                                                                     //
                                                                       //
//add an unique slug:                                                  //
var _slugUniquenessValidation = function (dotId, slug) {               // 26
  var uniqueSlug = undefined;                                          // 27
  Meteor.call('updateDotSlug', dotId, slug, function (error, result) {
    //TBD:                                                             //
    if (error) {                                                       // 30
      newSlug = slug + '-2';                                           // 31
      _slugUniquenessValidation(dotId, newSlug);                       // 32
    } else {                                                           //
      //TBD                                                            //
      uniqueSlug = slug;                                               // 36
    }                                                                  //
  });                                                                  //
                                                                       //
  if (uniqueSlug) {                                                    // 40
    return uniqueSlug;                                                 // 41
  }                                                                    //
};                                                                     //
                                                                       //
Meteor.methods({                                                       // 46
  createDot: function (doc) {                                          // 47
                                                                       //
    check(doc, Schema.dotSchema);                                      // 49
    if (!Meteor.userId()) {                                            // 50
      return false;                                                    // 51
    }                                                                  //
    if (doc.location) {                                                // 53
      check(doc.location, Schema.location);                            // 54
    }                                                                  //
    if (Meteor.isServer) {                                             // 56
      var _ret = (function () {                                        //
        var Future = Meteor.npmRequire('fibers/future');               // 57
        var myFuture = new Future();                                   // 58
        if (_docValidation(doc)) {                                     // 59
          Meteor.call('insertDot', doc, function (error, result) {     // 60
            if (!error) {                                              // 61
              (function () {                                           //
                var dotId = result;                                    // 62
                //slug Process:                                        //
                Meteor.call('updateDotSlug', doc, dotId, doc.title, function (error, result) {
                  if (error) {                                         // 65
                    console.log('error' + error);                      // 66
                  } else {                                             //
                    (function () {                                     //
                      var dotSlug = result;                            // 69
                      var smartRef = new Modules.both.Dotz.smartRef(dotId, Meteor.userId(), doc.inDotz[0], CREATE_ACTION, doc.ownerUserId);
                      Meteor.call('connectDot', smartRef);             // 71
                      if (dotSlug && doc.dotType === "List") {         // 72
                        Meteor.call('updateCreatedByUserLists', Meteor.userId(), dotId, function (error, result) {
                          if (error) {                                 // 74
                            console.log("THE ERROR IS:" + error);      // 75
                            myFuture['throw'](error);                  // 76
                          } else if (!error) {                         //
                            myFuture['return'](dotSlug);               // 79
                          }                                            //
                        });                                            //
                      } else if (dotSlug && doc.dotType === "Dot") {   //
                        Meteor.call('updateCreatedByUserDotz', Meteor.userId(), dotId, function (error, result) {
                          if (error) {                                 // 85
                            console.log("THE ERROR IS:" + error);      // 86
                            myFuture['throw'](error);                  // 87
                          } else if (!error) {                         //
                            myFuture['return'](dotSlug);               // 90
                          }                                            //
                        });                                            //
                      }                                                //
                    })();                                              //
                  }                                                    //
                });                                                    //
                //TBD:                                                 //
                //let dotSlug = Dotz.findOne(result).dotSlug;          //
              })();                                                    //
            } else {                                                   //
                console.log("ASD ASD ASD ASD ASD ASD");                // 100
                myFuture['throw'](error);                              // 101
              }                                                        //
          });                                                          //
        } else {                                                       //
          // can be refactored and put it to the _docValidation method this specific exceptions
          console.log("there is a problem with one of the follows: " + "          doc.ownerUserId, doc.inDotz.length, doc.dotzConnectedByOthers.length ");
        }                                                              //
        return {                                                       // 111
          v: myFuture.wait()                                           //
        };                                                             //
      })();                                                            //
                                                                       //
      if (typeof _ret === 'object') return _ret.v;                     //
    } else if (Meteor.isClient) {                                      //
      if (_docValidation(doc)) {                                       // 115
        Meteor.call('insertDot', doc, function (error, result) {       // 116
          if (!error) {                                                // 117
            (function () {                                             //
              var dotId = result;                                      // 118
              //slug Process:                                          //
              Meteor.call('updateDotSlug', doc, dotId, doc.title, function (error, result) {
                if (error) {                                           // 121
                  console.log('error' + error);                        // 122
                } else {                                               //
                  var smartRef = new Modules.both.Dotz.smartRef(dotId, Meteor.userId(), doc.inDotz[0], CREATE_ACTION, doc.ownerUserId);
                  Meteor.call('connectDot', smartRef, function (error, result) {
                    if (!error) {                                      // 127
                      Modal.hide();                                    // 128
                      Bert.alert('Created :)', 'success', 'growl-bottom-left');
                      FlowRouter.go('/' + Session.get('redirectAfterCreate'));
                      setTimeout(function () {                         // 131
                        var n = $(document).height();                  // 132
                        $('html, body').animate({ scrollTop: n }, 1000);
                      }, 1000);                                        //
                    }                                                  //
                  });                                                  //
                }                                                      //
              });                                                      //
              //TBD:                                                   //
              //let dotSlug = Dotz.findOne(result).dotSlug;            //
            })();                                                      //
          } else {                                                     //
              console.log("ASD ASD ASD ASD ASD ASD");                  // 143
            }                                                          //
        });                                                            //
      } else {                                                         //
        // can be refactored and put it to the _docValidation method this specific exceptions
        console.log("there is a problem with one of the follows: " + "          doc.ownerUserId, doc.inDotz.length, doc.dotzConnectedByOthers.length ");
      }                                                                //
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=createDot.js.map
