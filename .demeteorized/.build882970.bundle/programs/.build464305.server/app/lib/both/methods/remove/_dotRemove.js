(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/methods/remove/_dotRemove.js                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  removeDotFromDotzCollection: function (dotId, userId) {              // 2
    check(dotId, String);                                              // 3
    check(userId, Meteor.userId());                                    // 4
    try {                                                              // 5
      Dotz.remove(dotId);                                              // 6
    } catch (exception) {                                              //
      return exception;                                                // 8
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_dotRemove.js.map
