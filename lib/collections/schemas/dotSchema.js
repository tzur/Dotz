
Schema.dotSchema = new SimpleSchema({

  //Basic info:
  dotSlug: {
    type: String,
    //TBD:
    //autoValue: function(){
    //  Session.get('idPath');
    //},
    index: 1,
    unique: true,
    label: "dotSlug",
    optional: true
  },
  dotType: {
    type: String,
    optional: true,
    allowedValues: ['Dot', 'List', '_profileDot', 'Event', 'Place', 'Text', 'Link', 'Product'],
    label: "The Dot type:"
  },
  ownerUserId: {
    type: String
    //autoValue: function(){
      //return Meteor.userId()
  },
  title: {
    type: String,
    max: 50,
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


  //The images Section:
  coverImageUrl: {
    type: String,
    optional: true
  },
  dotImagesUrls:{
    type: [String],
    optional: true
  },

  //The link section:
  linkUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },

  //The Location Section:
  location: {
    type: Object,
    blackbox: true,
    optional: true
  },


  //The Event Fields Section:
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

  //Price Fields Section:
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


  // All the dotz that were connected.
  connectedDotzArray: {
    type: [Object],
    defaultValue: [], //TBD
    blackbox: true,
    optional: true
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
  },

  //The id's of the dotz that this current dot is inside them ("in mexes")
  inDotz: {
    type: [String],
    defaultValue: [], //TBD
    optional: true
  },

  totalUpvotes: {
    type: [Object],
    defaultValue: [], //TBD
    blackbox: true,
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
    autoform:{
      type: 'tags'
      //afFieldInput:{
      //  type: "bootstrap-tagsinput"
      //}
      }
    },

  //more-info Fields:
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
