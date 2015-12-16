(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// both/methods/connectBySearchAuthenticate.js                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 19/11/2015.                                //
 */                                                                    //
Meteor.methods({                                                       // 4
  checkIfUserAuthoriseForConnect: function (dotId) {                   // 5
    check(dotId, String);                                              // 6
    var dot = Dotz.findOne(dotId);                                     // 7
    return dot.isOpen || dot.ownerUserId === Meteor.userId();          // 8
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=connectBySearchAuthenticate.js.map
