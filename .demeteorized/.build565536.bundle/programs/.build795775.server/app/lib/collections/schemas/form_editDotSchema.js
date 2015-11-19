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
                                                                       //
  coverImageUrl: {                                                     // 26
    type: String,                                                      // 27
    optional: true                                                     // 28
  },                                                                   //
                                                                       //
  dotImagesUrls: {                                                     // 31
    type: [String],                                                    // 32
    optional: true                                                     // 33
  },                                                                   //
                                                                       //
  //Image Section End****                                              //
                                                                       //
  linkUrl: {                                                           // 38
    type: String,                                                      // 39
    regEx: SimpleSchema.RegEx.Url,                                     // 40
    optional: true                                                     // 41
  },                                                                   //
                                                                       //
  location: {                                                          // 44
    type: Object,                                                      // 45
    blackbox: true,                                                    // 46
    optional: true                                                     // 47
  },                                                                   //
                                                                       //
  //Location Section End****                                           //
                                                                       //
  //****The Event Fields Section                                       //
                                                                       //
  startDateAndHour: {                                                  // 54
    type: Date,                                                        // 55
    optional: true,                                                    // 56
    autoform: {                                                        // 57
      afFieldInput: {                                                  // 58
        type: "bootstrap-datetimepicker"                               // 59
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  endDateAndHour: {                                                    // 64
    type: Date,                                                        // 65
    optional: true,                                                    // 66
    autoform: {                                                        // 67
      afFieldInput: {                                                  // 68
        type: "bootstrap-datetimepicker"                               // 69
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  repeated: {                                                          // 74
    type: String,                                                      // 75
    allowedValues: ['daily', 'weekly', 'monthly', 'yearly', false],    // 76
    optional: true,                                                    // 77
    autoform: {                                                        // 78
      options: [{ label: "Daily", value: "daily" }, { label: "Weekly", value: "weekly" }, { label: "Monthly", value: "monthly" }, { label: "Yearly", value: "yearly" }]
    }                                                                  //
  },                                                                   //
                                                                       //
  endRepeatedDate: {                                                   // 88
    type: Date,                                                        // 89
    optional: true,                                                    // 90
    autoform: {                                                        // 91
      afFieldInput: {                                                  // 92
        type: "bootstrap-datepicker"                                   // 93
      }                                                                //
    }                                                                  //
                                                                       //
  },                                                                   //
                                                                       //
  //Event Fields Section End****                                       //
                                                                       //
  //****Price Fields Section                                           //
                                                                       //
  price: {                                                             // 103
    type: Number,                                                      // 104
    optional: true                                                     // 105
  },                                                                   //
                                                                       //
  currency: {                                                          // 108
    type: String,                                                      // 109
    allowedValues: ['Dollar', 'Shekels'],                              // 110
    optional: true,                                                    // 111
    autoform: {                                                        // 112
      options: [{ label: "Dollar", value: "Dollar" }, { label: "Shekels", value: "Shekels" }]
    }                                                                  //
  },                                                                   //
                                                                       //
  //Price Fields Section End****                                       //
                                                                       //
  // All the dotz that were connected by OWNER.                        //
  tags: {                                                              // 124
    type: [String],                                                    // 125
    defaultValue: [], //TBD                                            // 126
    optional: true,                                                    // 127
    autoform: {                                                        // 128
      type: 'tags',                                                    // 129
      afFieldInput: {                                                  // 130
        type: "bootstrap-tagsinput"                                    // 131
      }                                                                //
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=form_editDotSchema.js.map
