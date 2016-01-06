/**
 * Created by avivhatzir on 04/01/2016.
 */

Schema.userConnectionsCounterSchema = new SimpleSchema({

  peopleLikedMyDotz: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  peopleConnectedMyDotz: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  peopleLikedMyConnections: {
    type: Number,
    defaultValue: 0,
    optional: true
  },

  connectionsMadeByUser: {
    type: Number,
    defaultValue: 0,
    optional: true
  },

  likesMadeByUser: {
    type: Number,
    defaultValue: 0,
    optional: true
  }

});
