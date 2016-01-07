/**
 * Created by avivhatzir on 07/01/2016.
 */
Schema.userConnectionsSchema = new SimpleSchema({

  userId: {
    type: String,
    index: 1,
    unique: true
  },

  createdByUserDotz:{
    type:[Object],
      label: "Created By User Dotz",
      optional: true,
    blackbox: true,
      defaultValue: [], //TBD
      autoform: {
      type: "hidden",
        label: false
    }
  },

  createdByUserDotzCounter: {
    type: Number,
    optional: true,
    autoValue: function() {
      let createdByUserDotz = this.field("createdByUserDotz");
      if (createdByUserDotz.isSet) {
        return createdByUserDotz.value.length;
      } else {
        this.unset();
      }
    }
  },

  peopleLikedMyDotz: {
    type: [Object],
      defaultValue: [],
      optional:true
  },
  peopleLikedMyDotzCounter: {
    type: Number,
      optional: true,
      autoValue: function() {
      let peopleLikedMyDotz = this.field("peopleLikedMyDotz");
      if (peopleLikedMyDotz.isSet) {
        return peopleLikedMyDotz.value.length;
      } else {
        this.unset();
      }
    }
  },

  peopleLikedMyConnections: {
    type: [Object],
      defaultValue: [],
      optional:true
  },

  peopleLikedMyConnectionsCounter: {
    type: Number,
      optional: true,
      autoValue: function() {
      let peopleLikedMyConnections = this.field("peopleLikedMyConnections");
      if (peopleLikedMyConnections.isSet) {
        return peopleLikedMyConnections.value.length;
      } else {
        this.unset();
      }
    }
  },

  peopleConnectedMyDotz: {
    type: [Object],
      defaultValue: [],
      optional:true
  },

  peopleConnectedMyDotzCounter: {
    type: Number,
      optional: true,
      autoValue: function() {
      let peopleConnectedMyDotz = this.field("peopleConnectedMyDotz");
      if (peopleConnectedMyDotz.isSet) {
        return peopleConnectedMyDotz.value.length;
      } else {
        this.unset();
      }
    }
  },

  connectionsMadeByUser: {
    type: [Object],
      defaultValue: [],
      optional: true,
      blackbox: true
  },

  connectionsMadeByUserCounter: {
    type: Number,
      optional: true,
      autoValue: function() {
      let connectionsMadeByUser = this.field("connectionsMadeByUser");
      if (connectionsMadeByUser.isSet) {
        return connectionsMadeByUser.value.length;
      } else {
        this.unset();
      }
    }
  },

  likesMadeByUser: {
    type: [Object],
      defaultValue: [],
      optional: true,
      blackbox: true
  },

  likesMadeByUserCounter: {
    type: Number,
      optional: true,
      autoValue: function() {
      let likesMadeByUser = this.field("likesMadeByUser");
      if (likesMadeByUser.isSet) {
        return likesMadeByUser.value.length;
      } else {
        this.unset();
      }
    }
  }
});

UserConnections = new Meteor.Collection('userConnections');

UserConnections.attachSchema(Schema.userConnectionsSchema);

UserConnections.allow({
  insert: () => false,
  //update: function (userId, doc, fields, modifier) {
  //  // can only change your own documents
  //  //console.log("this is the user id##########################" + userId);
  //  return doc._id === userId;
  //},
  update: () => false,
  remove: () => false
});

UserConnections.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});



