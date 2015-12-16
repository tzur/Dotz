(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/tools/tools.js                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 10/11/2015.                                //
 */                                                                    //
/**                                                                    //
 * Created by avivhatzir on 26/10/2015.                                //
 */                                                                    //
Tools = new Meteor.Collection('tools');                                // 7
                                                                       //
//TBD!!!@#!@#!@#!@#                                                    //
Tools.allow({                                                          // 11
  insert: function () {                                                // 12
    return true;                                                       //
  },                                                                   //
  update: function () {                                                // 13
    return true;                                                       //
  },                                                                   //
  remove: function () {                                                // 14
    return false;                                                      //
  }                                                                    //
                                                                       //
});                                                                    //
                                                                       //
Tools.deny({                                                           // 18
  insert: function () {                                                // 19
    return false;                                                      //
  },                                                                   //
  update: function () {                                                // 20
    return false;                                                      //
  },                                                                   //
  remove: function () {                                                // 21
    return true;                                                       //
  }                                                                    //
});                                                                    //
                                                                       //
Tools.attachSchema(Schema.tools);                                      // 24
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=tools.js.map
