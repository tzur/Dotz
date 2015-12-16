(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/methods/remove/collection.js                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  removeMethod: function (argument) {                                  // 2
    check(argument, String);                                           // 3
                                                                       //
    try {                                                              // 5
      Collection.remove(argument);                                     // 6
    } catch (exception) {                                              //
      return exception;                                                // 8
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=collection.js.map
