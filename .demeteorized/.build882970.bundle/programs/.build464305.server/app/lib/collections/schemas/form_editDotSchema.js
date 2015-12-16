(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/schemas/form_editDotSchema.js                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 12/11/2015.                                //
 */                                                                    //
                                                                       //
Schema.editDotSchema = new SimpleSchema({                              // 5
  dotType: {                                                           // 6
    type: String,                                                      // 7
    optional: true,                                                    // 8
    allowedValues: ['Event', 'Place', 'Collection', 'Text', 'Link', 'Product', '_profileDot'],
    label: "The Dot type:"                                             // 10
  },                                                                   //
                                                                       //
  title: {                                                             // 13
    type: String,                                                      // 14
    label: "Dot title"                                                 // 15
  },                                                                   //
                                                                       //
  bodyText: {                                                          // 18
    type: String,                                                      // 19
    label: "Dot body",                                                 // 20
    optional: true                                                     // 21
  },                                                                   //
                                                                       //
  //****The images Section                                             //
  coverImageUrl: {                                                     // 25
    type: String,                                                      // 26
    optional: true                                                     // 27
  },                                                                   //
  dotImagesUrls: {                                                     // 29
    type: [String],                                                    // 30
    optional: true                                                     // 31
  },                                                                   //
                                                                       //
  //More info Section                                                  //
  linkUrl: {                                                           // 35
    type: String,                                                      // 36
    regEx: SimpleSchema.RegEx.Url,                                     // 37
    optional: true                                                     // 38
  },                                                                   //
  location: {                                                          // 40
    type: Object,                                                      // 41
    blackbox: true,                                                    // 42
    optional: true                                                     // 43
  },                                                                   //
                                                                       //
  //The Event Fields Section:                                          //
  startDateAndHour: {                                                  // 47
    type: Date,                                                        // 48
    optional: true,                                                    // 49
    autoform: {                                                        // 50
      afFieldInput: {                                                  // 51
        type: "bootstrap-datetimepicker"                               // 52
      }                                                                //
    }                                                                  //
  },                                                                   //
  endDateAndHour: {                                                    // 56
    type: Date,                                                        // 57
    optional: true,                                                    // 58
    autoform: {                                                        // 59
      afFieldInput: {                                                  // 60
        type: "bootstrap-datetimepicker"                               // 61
      }                                                                //
    }                                                                  //
  },                                                                   //
  repeated: {                                                          // 65
    type: Boolean,                                                     // 66
    optional: true                                                     // 67
  },                                                                   //
  multipleEventsNote: {                                                // 69
    type: String,                                                      // 70
    optional: true                                                     // 71
  },                                                                   //
  startRepeatedDate: {                                                 // 73
    type: Date,                                                        // 74
    optional: true,                                                    // 75
    autoform: {                                                        // 76
      afFieldInput: {                                                  // 77
        type: "bootstrap-datetimepicker"                               // 78
      }                                                                //
    }                                                                  //
  },                                                                   //
  endRepeatedDate: {                                                   // 82
    type: Date,                                                        // 83
    optional: true,                                                    // 84
    autoform: {                                                        // 85
      afFieldInput: {                                                  // 86
        type: "bootstrap-datetimepicker"                               // 87
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  //****Price Fields Section                                           //
                                                                       //
  price: {                                                             // 95
    type: Number,                                                      // 96
    optional: true                                                     // 97
  },                                                                   //
                                                                       //
  currency: {                                                          // 100
    type: String,                                                      // 101
    allowedValues: ['$', '₪'],                                         // 102
    defaultValue: "$",                                                 // 103
    optional: true,                                                    // 104
    autoform: {                                                        // 105
      options: [{ label: "$", value: "$" }, { label: "₪", value: "₪" }]
    }                                                                  //
  },                                                                   //
                                                                       //
  //Price Fields Section End****                                       //
                                                                       //
  // All the dotz that were connected by OWNER.                        //
  tags: {                                                              // 117
    type: [String],                                                    // 118
    defaultValue: [], //TBD                                            // 119
    optional: true,                                                    // 120
    autoform: {                                                        // 121
      type: 'tags',                                                    // 122
      afFieldInput: {                                                  // 123
        type: "bootstrap-tagsinput"                                    // 124
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  isOpen: {                                                            // 129
    type: Boolean,                                                     // 130
    defaultValue: true,                                                // 131
    optional: true, //TBD!!                                            // 132
    autoform: {                                                        // 133
      type: 'select',                                                  // 134
      options: function () {                                           // 135
        return [{ label: "Yes", value: true }, { label: "No", value: false }];
      }                                                                //
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=form_editDotSchema.js.map
