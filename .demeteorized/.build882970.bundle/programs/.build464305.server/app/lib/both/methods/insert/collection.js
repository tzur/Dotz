(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/methods/insert/collection.js                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  insertMethod: function (argument) {                                  // 2
    check(argument, Object);                                           // 3
                                                                       //
    try {                                                              // 5
      var documentId = Collection.insert(argument);                    // 6
      return documentId;                                               // 7
    } catch (exception) {                                              //
      return exception;                                                // 9
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=collection.js.map
