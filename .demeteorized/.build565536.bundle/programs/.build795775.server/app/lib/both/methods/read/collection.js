(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/methods/read/collection.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  readMethod: function (argument) {                                    // 2
    check(argument, String);                                           // 3
                                                                       //
    var document = Collection.findOne(argument);                       // 5
                                                                       //
    if (!document) {                                                   // 7
      throw new Meteor.Error('document-not-found', 'No documents found matching this query.');
    }                                                                  //
                                                                       //
    return document;                                                   // 11
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=collection.js.map
