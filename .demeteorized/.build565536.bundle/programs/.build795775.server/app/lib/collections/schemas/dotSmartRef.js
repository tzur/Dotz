(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/schemas/dotSmartRef.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
Schema.dotSmartRef = new SimpleSchema({                                // 2
                                                                       //
  //                                                                   //
  //  this.dot = {                                                     //
  //  _id: dotId,                                                      //
  //  ownerUserId: dotOwnerUserId                                      //
  //};                                                                 //
  //this.connection = {                                                //
  //  toParentDotId: parentDotId,                                      //
  //  actionName: actionName,                                          //
  //  personalDescription: personalDescription,                        //
  //  likes: []                                                        //
  //};                                                                 //
  dot: {                                                               // 15
    type: Object                                                       // 16
  },                                                                   //
  "dot._id": {                                                         // 18
    type: String                                                       // 19
  },                                                                   //
  "dot.ownerUserId": {                                                 // 21
    type: String                                                       // 22
  },                                                                   //
  connection: {                                                        // 24
    type: Object                                                       // 25
  },                                                                   //
  "connection.toParentDotId": {                                        // 27
    type: String                                                       // 28
  },                                                                   //
  "connection.actionName": {                                           // 30
    type: String                                                       // 31
  },                                                                   //
  "connection.personalDescription": {                                  // 33
    type: String,                                                      // 34
    max: 100,                                                          // 35
    optional: true                                                     // 36
  },                                                                   //
  "connection.connectedByUserId": {                                    // 38
    type: String                                                       // 39
  },                                                                   //
  "connection.likes": {                                                // 41
    type: [String]                                                     // 42
  },                                                                   //
  //Search fields:                                                     //
  searchInfo: {                                                        // 45
    type: [Object],                                                    // 46
    defaultValue: [], //TBD                                            // 47
    blackbox: true,                                                    // 48
    optional: true,                                                    // 49
    autoform: {                                                        // 50
      type: "hidden",                                                  // 51
      label: false                                                     // 52
    }                                                                  //
  },                                                                   //
                                                                       //
  //Flexible object :)                                                 //
  moreInfo: {                                                          // 57
    type: Object,                                                      // 58
    defaultValue: {}, //TBD                                            // 59
    blackbox: true,                                                    // 60
    optional: true,                                                    // 61
    autoform: {                                                        // 62
      type: "hidden",                                                  // 63
      label: false                                                     // 64
    }                                                                  //
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=dotSmartRef.js.map
