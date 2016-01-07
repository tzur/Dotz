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
    let createdByUserDotzData = UserConnections.findOne({userId: this.data.userId});
    if(createdByUserDotzData.createdByUserDotz.length >= 0) {
      return {smartRefArray: createdByUserDotzData.createdByUserDotz, length: createdByUserDotzData.createdByUserDotz.length}
    }
  },

  createdByUserListsData: function(){
    let createdByUserListsData = Meteor.users.findOne({_id: this.data.userId});
    if(createdByUserListsData.profile.createdByUserLists.length >= 0) {
      return {smartRefArray: createdByUserListsData.profile.createdByUserLists, length: createdByUserListsData.profile.createdByUserLists.length}
    }
  },

  connectionsMadeByUserData: function(){
    let connectionsMadeByUserData = UserConnections.findOne({userId: this.data.userId}).connectionsMadeByUser;
    if(connectionsMadeByUserData.length >= 0){
      return {smartRefArray : connectionsMadeByUserData, length: connectionsMadeByUserData.length}

    }
  },

  likesMadeByUserData: function(){
    let likesMadeByUserData = UserConnections.findOne({userId: this.data.userId});
    if(likesMadeByUserData.likesMadeByUser.length > 0) {
      return {smartRefArray: likesMadeByUserData.likesMadeByUser, length: likesMadeByUserData.likesMadeByUser.length}
    }
  },

  isDotStillActive: function(){
    let dot = Dotz.findOne(this.dot._id);
    if(dot){
      return true
    }
  },

  connectivityData: function(){
    let connectivityData = UserConnections.findOne({userId: this.data.userId});
    let peopleConnectedMyDotz = connectivityData.peopleConnectedMyDotz;
    let connectivityArray = peopleConnectedMyDotz.concat(connectivityData.peopleLikedMyConnections,connectivityData.peopleLikedMyDotz)
    if( connectivityArray.length > 0) {
      return {smartRefArray: connectivityArray, length: connectivityArray.length}
    }
  }

});
