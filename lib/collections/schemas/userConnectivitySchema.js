/**
 * Created by avivhatzir on 04/01/2016.
 */

Schema.userConnectivitySchema = new SimpleSchema({

  //Basic info:
  userId: {
    type: String,
    //TBD:
    //autoValue: function(){
    //  Session.get('idPath');
    //},
    index: 1,
    unique: true,
    label: "userId"
  },

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
  }


});
