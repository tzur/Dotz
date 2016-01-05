
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
  //userIDs Array:
  "connection.likes":{
    type: [String]
  },
  "connection.date":{
    type: Date,
    optional: true
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

