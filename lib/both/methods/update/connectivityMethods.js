/**
 * Created by avivhatzir on 05/01/2016.
 */
Meteor.methods({
  updateUserConnectivityDoc(){
    let userConnectivityDocId = UserConnections.insert({userId: Meteor.userId()});
    if(userConnectivityDocId){
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.userConnectivityDocId": userConnectivityDocId}})
    }
  },

  updateConnectionsMadeByUser(smartRef){
    check(smartRef, Schema.dotSmartRef);
    Meteor.users.update({_id: smartRef.connection.connectedByUserId}, {$addToSet: {"profile.connectionsMadeByUser": smartRef}})
  },

  updateLikesMadeByUser(smartRef){
    check(smartRef, Schema.dotSmartRef);
    Meteor.users.update({_id: Meteor.userId()}, {$addToSet: {"profile.likesMadeByUser": smartRef}})
  },

  updateUserPeopleConnectedMyDotz(smartRef){
    check(smartRef, Schema.dotSmartRef);

    Meteor.call('updateConnectionsMadeByUser', smartRef, function(error){
      if(error){
        console.log('Error in updateConnectionsMadeByUser inside updateUserConnectivity: ' + error)
      }
    });

    if(smartRef.dot.ownerUserId != smartRef.connection.connectedByUserId){
      Meteor.call('updateUserPeopleConnectedMyDotzCounter', smartRef.dot.ownerUserId, function(error){
        if(error){
          console.log('Error in updateUserPeopleConnectedMyDotzCounter inside updateUserConnectivity: ' + error)
        }
      });
      try {
        UserConnections.update({userId: smartRef.dot.ownerUserId}, {$addToSet: {"peopleConnectedMyDotz": smartRef}});
      }
      catch(error){
        return error
      }
    }
  },

  updateUserPeopleLikedMyConnection(smartRef){
    check(smartRef, Schema.dotSmartRef);
    if(Meteor.userId() != smartRef.connection.connectedByUserId && Meteor.userId() != smartRef.dot.ownerUserId ){
      try {
        UserConnections.update({userId: smartRef.connection.connectedByUserId}, {$addToSet: {"peopleLikedMyConnection": smartRef}});
        Meteor.call('updateUserPeopleLikedMyConnectionCounter', smartRef.dot.ownerUserId, function(error){
          if(error){
            console.log('Error in updateUserPeopleConnectedMyDotzCounter inside updateUserConnectivity: ' + error)
          }
        })
      }
      catch(error){
        return error
      }
    }
  },

  updateUserPeopleLikedMyDotz(smartRef){
    check(smartRef, Schema.dotSmartRef);
    if(Meteor.userId() != smartRef.dot.ownerUserId && Meteor.userId() != smartRef.connection.connectedByUserId) {
      try {
        UserConnections.update({userId: smartRef.dot.ownerUserId}, {$addToSet: {"peopleLikedMyDotz": smartRef}});
        Meteor.call('updateUserPeopleLikedMyDotzCounter', smartRef.dot.ownerUserId, function (error) {
          if (error) {
            console.log('Error in updateUserPeopleLikedMyDotzCounter inside updateUserConnectivity: ' + error)
          }
        })
      }
      catch (error) {
        return error
      }
    }
  },



  //update user connectivity counter
  updateUserPeopleConnectedMyDotzCounter(dotOwnerId){
    check(dotOwnerId, String);
    if(dotOwnerId != Meteor.userId()) {
      try {
        Meteor.users.update({_id: dotOwnerId}, {$inc: {"profile.userConnectionsCounter.peopleConnectedMyDotz": 1}});
      }
      catch (error) {
        console.log(error);
        return error
      }
    }
  },

  updateUserPeopleLikedMyDotzCounter(dotOwnerId){
    check(dotOwnerId, String);
    try {
      Meteor.users.update({_id: dotOwnerId}, {$inc: {"profile.userConnectionsCounter.peopleLikedMyDotz": 1}});
    }
    catch(error){
      console.log(error);
      return error
    }
  },

  updateUserPeopleLikedMyConnectionCounter(dotOwnerId){
    check(dotOwnerId, String);
    try {
      Meteor.users.update({_id: dotOwnerId}, {$inc: {"profile.userConnectionsCounter.peopleLikedMyConnections": 1}});
    }
    catch(error){
      console.log(error);
      return error
    }
  }



});
