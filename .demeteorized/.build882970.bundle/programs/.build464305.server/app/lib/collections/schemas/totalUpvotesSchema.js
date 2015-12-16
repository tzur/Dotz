(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/schemas/totalUpvotesSchema.js                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 21/11/2015.                                //
 */                                                                    //
                                                                       //
Schema.totalUpvotes = new SimpleSchema({                               // 5
  userId: {                                                            // 6
    type: String,                                                      // 7
    autoform: {                                                        // 8
      type: "hidden",                                                  // 9
      label: false                                                     // 10
    }                                                                  //
  },                                                                   //
                                                                       //
  parentDot: {                                                         // 14
    type: String,                                                      // 15
    autoform: {                                                        // 16
      type: "hidden",                                                  // 17
      label: false                                                     // 18
    }                                                                  //
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=totalUpvotesSchema.js.map
