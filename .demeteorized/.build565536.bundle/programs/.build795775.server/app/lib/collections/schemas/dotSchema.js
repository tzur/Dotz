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
  dotType: {                                                           // 16
    type: String,                                                      // 17
    optional: true,                                                    // 18
    allowedValues: ['Dot', 'List', '_profileDot', 'Event', 'Place', 'Text', 'Link', 'Product'],
    label: "The Dot type:"                                             // 20
  },                                                                   //
  ownerUserId: {                                                       // 22
    type: String                                                       // 23
    //autoValue: function(){                                           //
    //return Meteor.userId()                                           //
  },                                                                   //
  title: {                                                             // 27
    type: String,                                                      // 28
    max: 50,                                                           // 29
    label: "Dot title"                                                 // 30
  },                                                                   //
                                                                       //
  bodyText: {                                                          // 33
    type: String,                                                      // 34
    label: "Dot body",                                                 // 35
    optional: true                                                     // 36
  },                                                                   //
  createdAtDate: {                                                     // 38
    type: Date                                                         // 39
    //autoValue: function(){                                           //
    //return new Date();                                               //
    //}                                                                //
  },                                                                   //
  modifiedAt: {                                                        // 44
    type: Date,                                                        // 45
    optional: true                                                     // 46
  },                                                                   //
                                                                       //
  //The images Section:                                                //
  coverImageUrl: {                                                     // 51
    type: String,                                                      // 52
    optional: true                                                     // 53
  },                                                                   //
  dotImagesUrls: {                                                     // 55
    type: [String],                                                    // 56
    optional: true                                                     // 57
  },                                                                   //
                                                                       //
  //The link section:                                                  //
  linkUrl: {                                                           // 61
    type: String,                                                      // 62
    regEx: SimpleSchema.RegEx.Url,                                     // 63
    optional: true                                                     // 64
  },                                                                   //
                                                                       //
  //The Location Section:                                              //
  location: {                                                          // 68
    type: Object,                                                      // 69
    blackbox: true,                                                    // 70
    optional: true                                                     // 71
  },                                                                   //
                                                                       //
  //The Event Fields Section:                                          //
  startDateAndHour: {                                                  // 76
    type: Date,                                                        // 77
    optional: true,                                                    // 78
    autoform: {                                                        // 79
      afFieldInput: {                                                  // 80
        type: "bootstrap-datetimepicker"                               // 81
      }                                                                //
    }                                                                  //
  },                                                                   //
  endDateAndHour: {                                                    // 85
    type: Date,                                                        // 86
    optional: true,                                                    // 87
    autoform: {                                                        // 88
      afFieldInput: {                                                  // 89
        type: "bootstrap-datetimepicker"                               // 90
      }                                                                //
    }                                                                  //
  },                                                                   //
  repeated: {                                                          // 94
    type: String,                                                      // 95
    allowedValues: ['daily', 'weekly', 'monthly', 'yearly', false],    // 96
    optional: true,                                                    // 97
    autoform: {                                                        // 98
      options: [{ label: "Daily", value: "daily" }, { label: "Weekly", value: "weekly" }, { label: "Monthly", value: "monthly" }, { label: "Yearly", value: "yearly" }]
    }                                                                  //
  },                                                                   //
  endRepeatedDate: {                                                   // 107
    type: Date,                                                        // 108
    optional: true,                                                    // 109
    autoform: {                                                        // 110
      afFieldInput: {                                                  // 111
        type: "bootstrap-datepicker"                                   // 112
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  //Price Fields Section:                                              //
  price: {                                                             // 118
    type: Number,                                                      // 119
    optional: true                                                     // 120
  },                                                                   //
  currency: {                                                          // 122
    type: String,                                                      // 123
    allowedValues: ['Dollar', 'Shekels'],                              // 124
    optional: true,                                                    // 125
    autoform: {                                                        // 126
      options: [{ label: "Dollar", value: "Dollar" }, { label: "Shekels", value: "Shekels" }]
    }                                                                  //
  },                                                                   //
                                                                       //
  // All the dotz that were connected.                                 //
  connectedDotzArray: {                                                // 136
    type: [Object],                                                    // 137
    defaultValue: [], //TBD                                            // 138
    blackbox: true,                                                    // 139
    optional: true                                                     // 140
  },                                                                   //
                                                                       //
  isOpen: {                                                            // 143
    type: Boolean,                                                     // 144
    defaultValue: true,                                                // 145
    optional: true, //TBD!!                                            // 146
    autoform: {                                                        // 147
      type: 'select',                                                  // 148
      options: function () {                                           // 149
        return [{ label: "Yes", value: true }, { label: "No", value: false }];
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  //The id's of the dotz that this current dot is inside them ("in mexes")
  inDotz: {                                                            // 159
    type: [String],                                                    // 160
    defaultValue: [], //TBD                                            // 161
    optional: true                                                     // 162
  },                                                                   //
  totalUpvotes: {                                                      // 164
    type: Array,                                                       // 165
    defaultValue: [],                                                  // 166
    optional: true                                                     // 167
  },                                                                   //
  'totalUpvotes.$': {                                                  // 169
    type: Object                                                       // 170
  },                                                                   //
  'totalUpvotes.$.parentDotId': {                                      // 172
    type: String                                                       // 173
  },                                                                   //
  'totalUpvotes.$.userId': {                                           // 175
    type: String                                                       // 176
  },                                                                   //
  //totalUpvotes.$                                                     //
                                                                       //
  // Tagging section:                                                  //
  category: {                                                          // 182
    type: [String],                                                    // 183
    defaultValue: [], //TBD                                            // 184
    optional: true                                                     // 185
  },                                                                   //
  tags: {                                                              // 187
    type: [String],                                                    // 188
    defaultValue: [], //TBD                                            // 189
    optional: true,                                                    // 190
    autoform: {                                                        // 191
      type: 'tags'                                                     // 192
      //afFieldInput:{                                                 //
      //  type: "bootstrap-tagsinput"                                  //
      //}                                                              //
    }                                                                  //
  },                                                                   //
                                                                       //
  //more-info Fields:                                                  //
  dotContext: {                                                        // 200
    type: [String],                                                    // 201
    defaultValue: [], //TBD                                            // 202
    optional: true,                                                    // 203
    autoform: {                                                        // 204
      type: "hidden",                                                  // 205
      label: false                                                     // 206
    }                                                                  //
  },                                                                   //
  dotInfo: {                                                           // 209
    type: [String],                                                    // 210
    defaultValue: [], //TBD                                            // 211
    optional: true,                                                    // 212
    autoform: {                                                        // 213
      type: "hidden",                                                  // 214
      label: false                                                     // 215
    }                                                                  //
  },                                                                   //
                                                                       //
  //Search fields:                                                     //
  searchInfo: {                                                        // 220
    type: [Object],                                                    // 221
    defaultValue: [], //TBD                                            // 222
    blackbox: true,                                                    // 223
    optional: true,                                                    // 224
    autoform: {                                                        // 225
      type: "hidden",                                                  // 226
      label: false                                                     // 227
    }                                                                  //
  },                                                                   //
                                                                       //
  //Flexible object :)                                                 //
  moreInfo: {                                                          // 232
    type: Object,                                                      // 233
    defaultValue: {}, //TBD                                            // 234
    blackbox: true,                                                    // 235
    optional: true,                                                    // 236
    autoform: {                                                        // 237
      type: "hidden",                                                  // 238
      label: false                                                     // 239
    }                                                                  //
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=dotSchema.js.map
