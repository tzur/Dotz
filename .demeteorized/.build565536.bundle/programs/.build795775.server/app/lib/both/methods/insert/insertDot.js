(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/methods/insert/insertDot.js                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  insertDot: function (doc) {                                          // 2
    check(doc, Schema.dotSchema);                                      // 3
    try {                                                              // 4
      var dotId = Dotz.insert(doc);                                    // 5
      return dotId;                                                    // 6
    } catch (expection) {                                              //
      return expection;                                                // 8
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=insertDot.js.map
