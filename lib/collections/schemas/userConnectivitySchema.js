/**
 * Created by avivhatzir on 04/01/2016.
 */

Schema.userConnectionsSchema = new SimpleSchema({

  peopleLikedMyDotz: {
    type: [Object],
    optional:true
  },

  peopleLikedMyConnections: {
    type: [Object],
    optional:true
  },

  peopleConnectedMyDotz: {
    type: [Object],
    optional:true
  },

  connectionsMadeByUser: {
    type: [Object],
    defaultValue: [],
    optional: true,
    blackbox: true
  },

  likesMadeByUser: {
    type: [Object],
    defaultValue: [],
    optional: true,
    blackbox: true
  }


});
