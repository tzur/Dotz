(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/dotz.js                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 26/10/2015.                                //
 */                                                                    //
Dotz = new Meteor.Collection('dotz');                                  // 4
//TBD!!!@#!@#!@#!@#                                                    //
Dotz.allow({                                                           // 6
  insert: function () {                                                // 7
    return false;                                                      //
  },                                                                   //
  update: function () {                                                // 8
    return false;                                                      //
  },                                                                   //
  remove: function () {                                                // 9
    return false;                                                      //
  }                                                                    //
                                                                       //
});                                                                    //
                                                                       //
Dotz.deny({                                                            // 13
  insert: function () {                                                // 14
    return true;                                                       //
  },                                                                   //
  update: function () {                                                // 15
    return true;                                                       //
  },                                                                   //
  remove: function () {                                                // 16
    return true;                                                       //
  }                                                                    //
});                                                                    //
                                                                       //
Dotz.attachSchema(Schema.dotSchema);                                   // 19
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=dotz.js.map
