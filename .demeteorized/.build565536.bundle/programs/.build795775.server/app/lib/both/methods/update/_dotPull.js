(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/methods/update/_dotPull.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
Meteor.methods({                                                       // 2
                                                                       //
  pullDotFromInDotz: function (dotId, pulledParentDot) {               // 4
    check(dotId, String);                                              // 5
    check(pulledParentDot, String);                                    // 6
    try {                                                              // 7
      Dotz.update(dotId, {                                             // 8
        $pull: { "inDotz": pulledParentDot }                           // 9
      });                                                              //
    } catch (exception) {                                              //
      return exception;                                                // 13
    }                                                                  //
  },                                                                   //
                                                                       //
  pullDotFromDotzConnectedArray: function (disconnectDot, parentDotId) {
    check(parentDotId, String);                                        // 18
    check(disconnectDot, Object);                                      // 19
    //check( parentDot, String );                                      //
    try {                                                              // 21
      Dotz.update(parentDotId, {                                       // 22
        $pull: { connectedDotzArray: { dot: disconnectDot } }          // 23
      });                                                              //
    } catch (exception) {                                              //
      return exception;                                                // 27
    }                                                                  //
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_dotPull.js.map
