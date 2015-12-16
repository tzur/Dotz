(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/schemas/dotSchema.js                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
Schema.dotSchema = new SimpleSchema({                                  // 2
                                                                       //
  //Basic info:                                                        //
  dotSlug: {                                                           // 5
    type: String,                                                      // 6
    //TBD:                                                             //
    //autoValue: function(){                                           //
    //  Session.get('idPath');                                         //
    //},                                                               //
    index: 1,                                                          // 11
    unique: true,                                                      // 12
    label: "dotSlug",                                                  // 13
    optional: true                                                     // 14
  },                                                                   //
                                                                       //
  quickStartListId: {                                                  // 17
    type: String,                                                      // 18
    label: "quickStartListId",                                         // 19
    optional: true                                                     // 20
  },                                                                   //
  dotType: {                                                           // 22
    type: String,                                                      // 23
    optional: true,                                                    // 24
    allowedValues: ['Dot', 'List', '_profileDot', 'Event', 'Place', 'Text', 'Link', 'Product', 'shareList'],
    label: "The Dot type:"                                             // 26
  },                                                                   //
  ownerUserId: {                                                       // 28
    type: String                                                       // 29
    //autoValue: function(){                                           //
    //return Meteor.userId()                                           //
  },                                                                   //
  title: {                                                             // 33
    type: String,                                                      // 34
    max: 50,                                                           // 35
    label: "Dot title"                                                 // 36
  },                                                                   //
                                                                       //
  bodyText: {                                                          // 39
    type: String,                                                      // 40
    label: "Dot body",                                                 // 41
    optional: true                                                     // 42
  },                                                                   //
  createdAtDate: {                                                     // 44
    type: Date                                                         // 45
    //autoValue: function(){                                           //
    //return new Date();                                               //
    //}                                                                //
  },                                                                   //
  modifiedAt: {                                                        // 50
    type: Date,                                                        // 51
    optional: true                                                     // 52
  },                                                                   //
                                                                       //
  //The images Section:                                                //
  coverImageUrl: {                                                     // 57
    type: String,                                                      // 58
    optional: true,                                                    // 59
    defaultValue: "https://dotz-deployment.s3.amazonaws.com/qFpzRxMf3RdQjcmJt/rsz_hotairballoon_newdot-list.jpg" //TBD
  },                                                                   //
  dotImagesUrls: {                                                     // 62
    type: [String],                                                    // 63
    optional: true                                                     // 64
  },                                                                   //
                                                                       //
  //The link section:                                                  //
  linkUrl: {                                                           // 68
    type: String,                                                      // 69
    regEx: SimpleSchema.RegEx.Url,                                     // 70
    optional: true                                                     // 71
  },                                                                   //
                                                                       //
  //The Location Section:                                              //
  location: {                                                          // 75
    type: Object,                                                      // 76
    blackbox: true,                                                    // 77
    optional: true                                                     // 78
  },                                                                   //
                                                                       //
  //The Event Fields Section:                                          //
  startDateAndHour: {                                                  // 83
    type: Date,                                                        // 84
    optional: true,                                                    // 85
    autoform: {                                                        // 86
      afFieldInput: {                                                  // 87
        type: "bootstrap-datetimepicker"                               // 88
      }                                                                //
    }                                                                  //
  },                                                                   //
  endDateAndHour: {                                                    // 92
    type: Date,                                                        // 93
    optional: true,                                                    // 94
    autoform: {                                                        // 95
      afFieldInput: {                                                  // 96
        type: "bootstrap-datetimepicker"                               // 97
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  repeated: {                                                          // 102
    type: Boolean,                                                     // 103
    optional: true                                                     // 104
  },                                                                   //
                                                                       //
  multipleEventsNote: {                                                // 107
    type: String,                                                      // 108
    optional: true                                                     // 109
  },                                                                   //
                                                                       //
  startRepeatedDate: {                                                 // 112
    type: Date,                                                        // 113
    optional: true,                                                    // 114
    autoform: {                                                        // 115
      afFieldInput: {                                                  // 116
        type: "bootstrap-datetimepicker"                               // 117
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  endRepeatedDate: {                                                   // 122
    type: Date,                                                        // 123
    optional: true,                                                    // 124
    autoform: {                                                        // 125
      afFieldInput: {                                                  // 126
        type: "bootstrap-datetimepicker"                               // 127
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  //Price Fields Section:                                              //
  price: {                                                             // 133
    type: Number,                                                      // 134
    optional: true                                                     // 135
  },                                                                   //
                                                                       //
  currency: {                                                          // 138
    type: String,                                                      // 139
    allowedValues: ['$', '₪'],                                         // 140
    defaultValue: "$",                                                 // 141
    optional: true,                                                    // 142
    autoform: {                                                        // 143
      options: [{ label: "$", value: "$" }, { label: "₪", value: "₪" }]
    }                                                                  //
  },                                                                   //
                                                                       //
  // All the dotz that were connected.                                 //
  connectedDotzArray: {                                                // 152
    type: [Object],                                                    // 153
    defaultValue: [], //TBD                                            // 154
    blackbox: true,                                                    // 155
    optional: true                                                     // 156
  },                                                                   //
                                                                       //
  isOpen: {                                                            // 159
    type: Boolean,                                                     // 160
    defaultValue: false,                                               // 161
    optional: true, //TBD!!                                            // 162
    autoform: {                                                        // 163
      type: 'select',                                                  // 164
      options: function () {                                           // 165
        return [{ label: "Yes", value: true }, { label: "No", value: false }];
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  //The id's of the dotz that this current dot is inside them ("in mexes")
  inDotz: {                                                            // 175
    type: [String],                                                    // 176
    defaultValue: [], //TBD                                            // 177
    optional: true                                                     // 178
  },                                                                   //
                                                                       //
  totalUpvotes: {                                                      // 181
    type: [Object],                                                    // 182
    defaultValue: [], //TBD                                            // 183
    blackbox: true,                                                    // 184
    optional: true                                                     // 185
  },                                                                   //
                                                                       //
  // Tagging section:                                                  //
  category: {                                                          // 189
    type: [String],                                                    // 190
    defaultValue: [], //TBD                                            // 191
    optional: true                                                     // 192
  },                                                                   //
  tags: {                                                              // 194
    type: [String],                                                    // 195
    defaultValue: [], //TBD                                            // 196
    optional: true,                                                    // 197
    autoform: {                                                        // 198
      type: 'tags'                                                     // 199
      //afFieldInput:{                                                 //
      //  type: "bootstrap-tagsinput"                                  //
      //}                                                              //
    }                                                                  //
  },                                                                   //
                                                                       //
  //more-info Fields:                                                  //
  dotContext: {                                                        // 207
    type: [String],                                                    // 208
    defaultValue: [], //TBD                                            // 209
    optional: true,                                                    // 210
    autoform: {                                                        // 211
      type: "hidden",                                                  // 212
      label: false                                                     // 213
    }                                                                  //
  },                                                                   //
  dotInfo: {                                                           // 216
    type: [String],                                                    // 217
    defaultValue: [], //TBD                                            // 218
    optional: true,                                                    // 219
    autoform: {                                                        // 220
      type: "hidden",                                                  // 221
      label: false                                                     // 222
    }                                                                  //
  },                                                                   //
                                                                       //
  //Search fields:                                                     //
  searchInfo: {                                                        // 227
    type: [Object],                                                    // 228
    defaultValue: [], //TBD                                            // 229
    blackbox: true,                                                    // 230
    optional: true,                                                    // 231
    autoform: {                                                        // 232
      type: "hidden",                                                  // 233
      label: false                                                     // 234
    }                                                                  //
  },                                                                   //
                                                                       //
  //Flexible object :)                                                 //
  moreInfo: {                                                          // 239
    type: Object,                                                      // 240
    defaultValue: {}, //TBD                                            // 241
    blackbox: true,                                                    // 242
    optional: true,                                                    // 243
    autoform: {                                                        // 244
      type: "hidden",                                                  // 245
      label: false                                                     // 246
    }                                                                  //
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=dotSchema.js.map
