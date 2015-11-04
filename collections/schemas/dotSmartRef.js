
Schema.dotSmartRef = new SimpleSchema({
  dotId:{
    type: String,
    index: 1
  },
  parentDot:{
    type: String
  },
  connectedByUserId:{
    type: String
  },
  actionName:{
    type: String
  },
  upVotes:{
    type: [String],
    optional: true
  },
  personalDescription:{
    type: String,
    optional: true
  },
  likes:{
    type: [String],
    optional: true
  },
  isConnectedToOthers:{
    type: Boolean
  }
});

