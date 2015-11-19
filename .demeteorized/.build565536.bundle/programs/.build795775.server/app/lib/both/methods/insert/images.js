(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/methods/insert/images.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 26/10/2015.                                //
 */                                                                    //
Meteor.methods({                                                       // 4
  storeImageUrlInDatabase: function (url) {                            // 5
    check(url, String);                                                // 6
    Modules.both.checkUrlValidity(url);                                // 7
                                                                       //
    try {                                                              // 9
      Files.insert({                                                   // 10
        url: url,                                                      // 11
        userId: Meteor.userId(),                                       // 12
        added: new Date()                                              // 13
      });                                                              //
    } catch (exception) {                                              //
      return exception;                                                // 16
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=images.js.map
