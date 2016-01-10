Schema.dotSmartRef = new SimpleSchema({

//
//  this.dot = {
//  _id: dotId,
//  ownerUserId: dotOwnerUserId
//};
//this.connection = {
//  toParentDotId: parentDotId,
//  actionName: actionName,
//  personalDescription: personalDescription,
//  likes: []
//};
  dot: {
    type: Object
  },
  "dot._id": {
    type: String
  },
  "dot.ownerUserId": {
    type: String
  },
  connection: {
    type:Object
  },
  "connection.toParentDotId": {
    type: String
  },
  "connection.actionName": {
    type: String
  },
  "connection.personalDescription": {
    type:String,
    max: 100,
    optional: true
  },
  "connection.connectedByUserId": {
    type: String
  },
  "connection.date":{
    type: Date,
    optional: true
  },
  //userIDs Array:
  "connection.likes":{
    type: [String]
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
Schema.dotSchema = new SimpleSchema({

  //Basic info:
  dotSlug: {
    type: String,
    //TBD:
    //autoValue: function(){
    //},
    index: 1,
    unique: true,
    label: "dotSlug",
    optional: true
  },

  quickStartListId: {
    type: String,
    label: "quickStartListId",
    optional: true
  },

  dotType: {
    type: String,
    optional: true,
    allowedValues: ['Dot', 'List', '_profileDot', 'Event', 'Place', 'Text', 'Link', 'Product', 'shareList', 'FBDot'],
    label: "The Dot type:"
  },

  ownerUserId: {
    type: String
    //autoValue: function(){
      //return Meteor.userId()
  },

  title: {
    type: String,
    max: 100,
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
    //defaultValue: "https://dotz-deployment.s3.amazonaws.com/qFpzRxMf3RdQjcmJt/rsz_hotairballoon_newdot-list.jpg" //TBD
  },
  dotImagesUrls:{
    type: [String],
    optional: true
  },

  embedlyObj:{
    type: Object,
    optional: true,
    blackbox: true
  },

  //The link section:
  linkUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },

  linkName: {
    type: String,
    optional: true
  },

  linkAuthorName: {
    type: String,
    optional: true
  },

  linkAuthorUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  facebookAuthorId:{
    type:String,
    optional: true
  },
  facebookAuthorName: {
    type: String,
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
    type: Boolean,
    optional: true
  },

  multipleEventsNote:{
    type: String,
    optional: true
  },

  dotColor:{
    type: String,
    optional: true,
    allowedValues: ['#0099e5','#fd5c63', '#7fbb00', '#ff9900', '#553a99', '#1ca0de','#237f52', '#ed008c', '#4dc47d'],
    autoValue: function() {
      let colorsArray = ['#0099e5','#fd5c63', '#7fbb00', '#ff9900', '#553a99', '#1ca0de','#237f52', '#ed008c', '#4dc47d'];
      let i = Math.floor(Math.random() * 8);
      return colorsArray[i];
    }
  },

  startRepeatedDate: {
    type: Date,
      optional: true,
      autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
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
    type: [Schema.dotSmartRef],
    defaultValue: [], //TBD
    optional: true
  },

  isOpen:{
    type: Boolean,
    defaultValue: false,
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
    label: "Tags"
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
