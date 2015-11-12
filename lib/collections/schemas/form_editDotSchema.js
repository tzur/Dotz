/**
 * Created by avivhatzir on 12/11/2015.
 */

Schema.editDotSchema = new SimpleSchema({
  dotType: {
    type: String,
    optional: true,
    allowedValues: ['Event', 'Place', 'Collection', 'Text', 'Link', 'Product', '_profileDot'],
    label: "The Dot type:"
  },

  title: {
    type: String,
    label: "Dot title"
  },

  bodyText: {
    type: String,
    label: "Dot body",
    optional: true
  },

  //****The images Section

  coverImageUrl: {
    type: String,
    optional: true
  },

  dotImagesUrls:{
    type: [String],
    optional: true
  },

  //Image Section End****

  linkUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },

  location: {
    type: Object,
    blackbox: true,
    optional: true
  },

  //Location Section End****

  //****The Event Fields Section

  startDateAndHour: {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },

  endDateAndHour: {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },

  repeated:{
    type: String,
    allowedValues: [ 'daily', 'weekly', 'monthly', 'yearly', false],
    optional: true,
    autoform: {
      options: [
        {label: "Daily", value: "daily"},
        {label: "Weekly", value: "weekly"},
        {label: "Monthly", value: "monthly"},
        {label: "Yearly", value: "yearly"}
      ]
    }
  },

  endRepeatedDate: {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datepicker"
      }
    }

  },

  //Event Fields Section End****

  //****Price Fields Section

  price: {
    type: Number,
    optional: true
  },

  currency: {
    type:String,
    allowedValues: ['Dollar', 'Shekels'],
    optional: true,
    autoform: {
      options: [
        {label: "Dollar", value: "Dollar"},
        {label: "Shekels", value: "Shekels"}
      ]
    }
  },

  //Price Fields Section End****


  // All the dotz that were connected by OWNER.
  tags: {
    type: [String],
    defaultValue: [], //TBD
    optional: true,
    autoform:{
      type: 'tags',
      afFieldInput:{
        type: "bootstrap-tagsinput"
      }
    }
  }
});