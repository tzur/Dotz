/**
 * Created by avivhatzir on 05/01/2016.
 */
Template.userConnectivity.onCreated(function(){
  let self = this;
  self.subs = new SubsManager({
    // maximum number of cache subscriptions
    cacheLimit: 10,
    // any subscription will be expire after 5 minute, if it's not subscribed again
    expireIn: 5
  });
  self.subs.subscribe('userConnections', this.data.data.userId);

});

Template.userConnectivity.helpers({
  createdByUserDotzData: function(){
    let createdByUserDotzData = UserConnections.findOne({userId: this.data.userId})
    //dot: Dotz.findOne(this.dot._id),
    //  smartRef: this,
    //  ownerUser: Meteor.users.findOne(this.dot.ownerUserId),
    //  connectedByUser: Meteor.users.findOne(this.connection.connectedByUserId)
    return createdByUserDotzData.createdByUserDotz
  },

  createdByUserListsData: function(){
    let createdByUserListsData = Meteor.users.findOne({_id: this.data.userId})
    //dot: Dotz.findOne(this.dot._id),
    //  smartRef: this,
    //  ownerUser: Meteor.users.findOne(this.dot.ownerUserId),
    //  connectedByUser: Meteor.users.findOne(this.connection.connectedByUserId)
    return createdByUserListsData.profile.createdByUserLists
  },

  connectionsMadeByUserData: function(){
    let connectionsMadeByUserData = UserConnections.findOne({userId: this.data.userId})
    return connectionsMadeByUserData.connectionsMadeByUser
  },

  likesMadeByUserData: function(){
    let likesMadeByUserData = UserConnections.findOne({userId: this.data.userId})
    return likesMadeByUserData.likesMadeByUser
  },

  connectivityData: function(){
    let connectivityData = UserConnections.findOne({userId: this.data.userId})
    return (connectivityData.peopleConnectedMyDotz + connectivityData.peopleLikedMyConnections + connectivityData.peopleLikedMyDotz)
  }

});
