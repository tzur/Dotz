/**
 * Created by avivhatzir on 21/11/2015.
 */

Schema.totalUpvotes = new SimpleSchema({
  userId:{
    type: String,
    autoform:{
      type:"hidden",
      label: false
    }
  },

  parentDot:{
    type: String,
    autoform:{
      type:"hidden",
      label: false
    }
  }

});

