
Schema.dotSchema = new SimpleSchema({
  dotType: {
    type: String,
    optional: true,
    allowedValues: ['Event', 'Place', 'Collection', 'Text', 'Link', 'Product', '_profileDot'],
    label: "The Dot type:"
  },
  ownerUserId: {
    type: String
    //autoValue: function(){
      //return Meteor.userId()
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

  createdAtDate:{
    type: Date
    //autoValue: function(){
      //return new Date();
    //}
  },

  modifiedAt:{
    type: Date,
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

  //****The Location Section

  //locationName: {
  //  type: String,
  //  optional: true
  //},
  //
  //locationLatLng:{
  //  type: [Number],
  //  decimal:true,
  //  optional: true
  //},
  //
  //locationAddress: {
  //  type: String,
  //  decimal:true,
  //  optional: true
  //},
  //
  //locationLink: {
  //  type: String,
  //  optional: true
  //},
  //
  //locationPlaceId: {
  //  type: String,
  //  optional: true
  //},

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
  dotzConnectedByOwner: {
    type: [Object],
    defaultValue: [], //TBD
    blackbox: true,
    optional: true
  },
  //All the dotz that were connected by OTHER users.
  dotzConnectedByOthers: {
    type: [Object],
    defaultValue: [], //TBD
    blackbox: true,
    optional: true
  },


  //**** The id's of the dotz that this current dot is inside them ("in mexes")
  inDotz: {
    type: [String],
    defaultValue: [], //TBD
    optional: true
  },

  // Tagging section:
  category:{
    type: [String],
    defaultValue: [], //TBD
    optional: true
  },
  tags: {
    type: [String],
    defaultValue: [], //TBD
    optional: true,
    autoform: {
      type: 'tags'
    }
  },

  //info Fields:
  dotContext: {
    type: [String],
    defaultValue: [], //TBD
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  dotInfo: {
    type: [String],
    defaultValue: [], //TBD
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },

  //Search fields:
  searchInfo:{
    type: [Object],
    defaultValue: [], //TBD
    blackbox: true,
    optional: true,
    autoform:{
      type:"hidden",
      label: false
    }
  },

  //Flexible object :)
  moreInfo:{
    type: Object,
    defaultValue: {}, //TBD
    blackbox: true,
    optional: true,
    autoform:{
      type:"hidden",
      label: false
    }
  }


});
