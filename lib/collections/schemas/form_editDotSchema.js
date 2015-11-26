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
    optional: true
  },

  endRepeatedDate: {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
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
    allowedValues: ['$', '₪'],
    defaultValue: "$",
    optional: true,
    autoform: {
      options: [
        {label: "$", value: "$"},
        {label: "₪", value: "₪"}
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
  },

  isOpen:{
    type: Boolean,
    defaultValue: true,
    optional: true, //TBD!!
    autoform: {
      type: 'select',
      options: function () {
        return [
          {label: "Yes", value: true},
          {label: "No", value: false}
        ]
      }
    }
  }
});
