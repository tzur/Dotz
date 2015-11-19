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
Dotz = new Meteor.Collection('dotz'), DotzIndex = new EasySearch.Index({
  collection: Dotz,                                                    // 6
  fields: ['title', 'bodyText'],                                       // 7
  engine: new EasySearch.MongoDB()                                     // 8
});                                                                    //
                                                                       //
//TBD!!!@#!@#!@#!@#                                                    //
Dotz.allow({                                                           // 13
  insert: function () {                                                // 14
    return true;                                                       //
  },                                                                   //
  update: function () {                                                // 15
    return true;                                                       //
  },                                                                   //
  remove: function () {                                                // 16
    return true;                                                       //
  }                                                                    //
                                                                       //
});                                                                    //
                                                                       //
Dotz.deny({                                                            // 20
  insert: function () {                                                // 21
    return false;                                                      //
  },                                                                   //
  update: function () {                                                // 22
    return false;                                                      //
  },                                                                   //
  remove: function () {                                                // 23
    return false;                                                      //
  }                                                                    //
});                                                                    //
                                                                       //
Dotz.attachSchema(Schema.dotSchema);                                   // 26
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=dotz.js.map
