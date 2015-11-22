
Schema.tools = new SimpleSchema({
  name:{
    type: String
  },
  tags:{
    type: [String],
    optional: true
  },

  category:{
    type: [String],
    optional: true
  },

  featuredUsers:{
    type: [Object],
    optional: true
  }
});
