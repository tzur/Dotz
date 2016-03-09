
//NOTE: this is the smartRef schema!!!
Schema.dotSmartRef = new SimpleSchema({
  dot: {
    type: Object
  },
  "dot._id": {
    type: String,
    index: 1 //TBD
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
  }
});

//NOTE: this is the totalUpvotes Schema:
Schema.dotUpvoteObject = new SimpleSchema({
  userId: {
    type: String,
    optional: true
  },
  upvotedInDotId: {
    type: String,
    optional: true
  }
  //createdAtDate:{
  //  type: Date,
  //  //TODO optional or not? @otni
  //  optional: true,
  //  autoValue: function() {
  //    return new Date();
  //  }
  //}
});


//The DOT schema (also LIST...):

Schema.dotSchema = new SimpleSchema({

  //The basic Dot's data:

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
  ownerUserId: {
    type: String
    //defaultValue: function(){
    //return Meteor.userId()
    //}
    // TBD
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
    type: Date,
    //TODO optional or not? @otni
    optional: true,
    autoValue: function() {
      return new Date();
    }
  },
  //TODO: is it works? we need to save it to the DB as an Array (for documentation purposes) @otni
  modifiedAt:{
    type: Date,
    optional: true
  },
  //NOTE: The random dotColor selected at the createDot module file:
  dotColor:{
    type: String,
    optional: true,
    allowedValues:['darkGreenDot','brightGreenDot', 'greenDot', 'purpleDot', 'blueDot', 'redDot','pinkDot', 'orangeDot']
  },
  //----------End----------//


  //Types (Dot & List):

  dotType: {
    type: String,
    optional: true,
    defaultValue: "Dot",
    allowedValues:
      ['_profileDot',
      'Dot',
      'List',
      'shareList',
      'FBDot']
  },
  dotSubType: {
    type: String,
    optional: true,
    defaultValue: "StartDot", //TODO is it the right/best defaultValue? maybe we need to cancel the defaultValue at all? @otni
    allowedValues:
      ['Event', 'Place', 'Text', 'Link', 'Person', 'Media','Product',
        'StartDot',
        'Public List', 'Closed List', 'Secret List']
  },
  isOpen:{
    type: Boolean,
    //defaultValue: false,
    optional: true //TBD!!
  },
  isPrivate:{
    type: Boolean,
    optional: true //TBD!!
  },
  //show Dotz counter (for lists..):
  showDotzCounter:{
    type: Boolean,
    defaultValue: true,
    optional: true //TBD!!
  },

  //isDot:{
  //  type: Boolean,
  //  //defaultValue: false,
  //  optional: true, //TBD!!
  //  blackbox: true,
  //  autoValue: function() {
  //    let dotType = this.field("dotType");
  //    //return dotType();
  //    if (dotType.isSet) {
  //      return true;
  //    } else {
  //      //this.unset();
  //      return false;
  //    }
  //  }
  //},

  //listType: {
  //  type: String,
  //  optional: true,
  //  defaultValue: "Public", //TODO: is it needed? @otni
  //  allowedValues: ['Public', 'Closed', 'Secret'],
  //  label: "The List type:",
  //  autoform: {
  //    type: 'select',
  //    options: function () {
  //      return [
  //        {label: "Public", value: "Public"},
  //        {label: "Closed", value: "Closed"},
  //        {label: "Secret", value: "Secret"}
  //      ]
  //    }
  //  }
  //},

  //----------End----------//


  //The Dot's relationship :)

  // All the dotz that were connected.
  connectedDotzArray: {
    type: [Schema.dotSmartRef],
    defaultValue: [], //TBD
    optional: true
  },
  //The id's of the dotz that this current dot is "inside" them (i.e. connected to those dotz..):
  inDotz: {
    type: [String],
    defaultValue: [], //TBD
    optional: true
  },
  totalUpvotesArray: {
    type: [Schema.dotUpvoteObject],
    optional: true
  },
  totalUpvotesCouner: {
    type: Number,
    optional: true,
    blackbox: true, //TBD
    autoValue: function() {
      let totalUpvotesArray = this.field("totalUpvotesArray");
      if (totalUpvotesArray.isSet) {
        return totalUpvotesArray.value.length;
      } else {
        this.unset();
      }
    }
  },
  //----------End----------//


  //The images Section:
  coverImageUrl: {
    type: String,
    optional: true
    //defaultValue: "https://dotz-deployment.s3.amazonaws.com/qFpzRxMf3RdQjcmJt/rsz_hotairballoon_newdot-list.jpg" //TBD
  },
  moreMediaUrls:{
    type: [String],
    optional: true
  },
  //----------End----------//


  //The link section:

  linkUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    index: 1
  },
  linkName: {
    type: String,
    optional: true,
    autoValue: function() {
      let linkUrl = this.field("linkUrl");
      if (linkUrl.isSet) {

        let linkUrlWithoutWWW = linkUrl.value.replace('www.','').replace('http://','').replace('https://','');
        let urlSplitArray = linkUrlWithoutWWW.split('/');
        return urlSplitArray [0];

        //return linkUrl.value.length;
      } else {
        this.unset();
      }
    }
  },
  //TODO: add an autoValue here:
  linkFavicon: {
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
  //TODO: we need to add a schema for the embedlyObj.. @otni
  embedlyObj:{
    type: Object,
    optional: true,
    blackbox: true
  },
  //----------End----------//


  //The Location Section:
  //TODO: we need to add schema or so.. @otni
  location: {
    type: Object,
    blackbox: true,
    optional: true
  },
  //----------End----------//


  //The Event Fields Section:
  startDateAndHour: {
    type: Date,
    optional: true
  },
  endDateAndHour: {
    type: Date,
    optional: true
  },
  repeated:{
    type: Boolean,
    optional: true
  },
  multipleEventsNote:{
    type: String,
    optional: true
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
  //----------End----------//


  //Price Fields Section:
  price: {
    type: Number,
    optional: true
  },
  priceMax: {
    type: Number,
    optional: true
  },
  currency: {
    type:String,
    allowedValues: ['$', '₪'],
    //defaultValue: "$",
    optional: true
  },
  free:{
    type: Boolean,
    optional: true
  },
  //----------End----------//



  //-----------------------------------------:
  //TODO: we need to check the next property's necessity @otni

  //TBD:
  quickStartListId: {
    type: String,
    label: "quickStartListId",
    optional: true
  },


  ////The Q section:
  //theQ: {
  //  type: [Schema.dotSmartRef],
  //  defaultValue: [], //TBD
  //  optional: true
  //},
  //notQ: {
  //  type: [Schema.dotSmartRef],
  //  defaultValue: [], //TBD
  //  optional: true
  //},

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
    optional: true
  },
  dotInfo: {
    type: [String],
    optional: true
  }

});
