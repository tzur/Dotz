///**
// * Created by avivhatzir on 04/11/2015.
// */
//Schema.dotSchema = new SimpleSchema({
//  dotType: {
//    type: String,
//    allowedValues: ['Event', 'Place', 'Concept Dot', 'Text', 'Link', 'Product', '_profileDot'],
//    autoform: {
//      options: [
//        {label: "Event", value: "Event"},
//        {label: "Place", value: "Place"},
//        {label: "Concept Dot", value: "Concept Dot"},
//        {label: "Text", value: "Text"},
//        {label: "Link", value: "Link"},
//        {label: "Product", value: "Product"}
//      ]
//    },
//    label: "The Dot type:"
//  },
//
//  title: {
//    type: String,
//    label: "Dot title"
//  },
//
//  bodyText: {
//    type: String,
//    label: "Dot body",
//    optional: true
//  },
//
//  modifiedAt:{
//    type: Date,
//    optional: true
//  },
//
//  //****The images Section
//
//  coverImageUrl: {
//    type: String,
//    optional: true
//  },
//
//  dotImagesUrls:{
//    type: [String],
//    optional: true
//  },
//
//  //Image Section End****
//
//  linkUrl: {
//    type: String,
//    regEx: SimpleSchema.RegEx.Url,
//    optional: true
//  },
//
//  //****The Location Section
//
//  locationName: {
//    type: String,
//    optional: true
//  },
//
//  locationLatLng:{
//    type: [Number],
//    decimal:true,
//    optional: true
//  },
//
//  locationAddress: {
//    type: String,
//    decimal:true,
//    optional: true
//  },
//
//  locationLat:{
//    type: String,
//    decimal:true,
//    optional: true
//  },
//
//  locationLng: {
//    type: String,
//    optional: true
//  },
//
//  //Location Section End****
//
//  //****The Event Fields Section
//
//  startDateAndHour: {
//    type: Date,
//    optional: true,
//    autoform: {
//      afFieldInput: {
//        type: "bootstrap-datetimepicker"
//      }
//    }
//  },
//
//  endDateAndHour: {
//    type: Date,
//    optional: true,
//    autoform: {
//      afFieldInput: {
//        type: "bootstrap-datetimepicker"
//      }
//    }
//  },
//
//  repeated:{
//    type: String,
//    allowedValues: [ 'daily', 'weekly', 'monthly', 'yearly', false],
//    optional: true,
//    autoform: {
//      options: [
//        {label: "Daily", value: "daily"},
//        {label: "Weekly", value: "weekly"},
//        {label: "Monthly", value: "monthly"},
//        {label: "Yearly", value: "yearly"}
//      ]
//    }
//  },
//
//  endRepeatedDate: {
//    type: Date,
//    optional: true,
//    autoform: {
//      afFieldInput: {
//        type: "bootstrap-datepicker"
//      }
//    }
//
//  },
//
//  //Event Fields Section End****
//
//  //****Price Fields Section
//
//  price: {
//    type: Number,
//    optional: true
//  },
//
//  currency: {
//    type:String,
//    allowedValues: ['Dollar', 'Shekels'],
//    optional: true,
//    autoform: {
//      options: [
//        {label: "Dollar", value: "Dollar"},
//        {label: "Shekels", value: "Shekels"}
//      ]
//    }
//  }
//
//  //Price Fields Section End****
//
//});
