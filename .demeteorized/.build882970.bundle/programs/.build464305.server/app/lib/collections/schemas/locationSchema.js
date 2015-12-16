(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/schemas/locationSchema.js                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 08/11/2015.                                //
 */                                                                    //
Schema.location = new SimpleSchema({                                   // 4
  name: {                                                              // 5
    type: String,                                                      // 6
    optional: true                                                     // 7
  },                                                                   //
                                                                       //
  address: {                                                           // 10
    type: String,                                                      // 11
    optional: true                                                     // 12
  },                                                                   //
                                                                       //
  placeId: {                                                           // 15
    type: String,                                                      // 16
    optional: true                                                     // 17
  },                                                                   //
                                                                       //
  googleMapsUrl: {                                                     // 20
    type: String,                                                      // 21
    optional: true                                                     // 22
                                                                       //
  },                                                                   //
                                                                       //
  latLng: {                                                            // 26
    type: [Number],                                                    // 27
    decimal: true,                                                     // 28
    optional: true                                                     // 29
  },                                                                   //
                                                                       //
  placePhoneNumber: {                                                  // 32
    type: String,                                                      // 33
    optional: true                                                     // 34
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=locationSchema.js.map
