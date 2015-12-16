(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/tools/toolsSchema.js                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
Schema.tools = new SimpleSchema({                                      // 2
  name: {                                                              // 3
    type: String                                                       // 4
  },                                                                   //
  tags: {                                                              // 6
    type: [String],                                                    // 7
    optional: true                                                     // 8
  },                                                                   //
                                                                       //
  category: {                                                          // 11
    type: [String],                                                    // 12
    optional: true                                                     // 13
  },                                                                   //
                                                                       //
  featuredUsers: {                                                     // 16
    type: [Object],                                                    // 17
    optional: true                                                     // 18
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=toolsSchema.js.map
