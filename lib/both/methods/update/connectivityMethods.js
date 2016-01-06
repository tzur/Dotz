/**
 * Created by avivhatzir on 05/01/2016.
 */
Meteor.methods({

  updateConnectionsMadeByUser(smartRef){
    check(smartRef, Schema.dotSmartRef);
    Meteor.users.update({_id: smartRef.connection.connectedByUserId}, {$addToSet: {"userConnections.connectionsMadeByUser": smartRef}})
  },

  updateLikesMadeByUser(smartRef){
    check(smartRef, Schema.dotSmartRef);
    Meteor.users.update({_id: Meteor.userId()}, {$addToSet: {"userConnections.likesMadeByUser": smartRef}})
  },

  updateUserPeopleConnectedMyDotz(smartRef){
    check(smartRef, Schema.dotSmartRef);

    Meteor.call('updateConnectionsMadeByUser', smartRef, function(error){
      if(error){
        console.log('Error in updateConnectionsMadeByUser inside updateUserConnectivity: ' + error)
      }
    });

    if(smartRef.dot.ownerUserId != smartRef.connection.connectedByUserId){
      //Meteor.call('updateUserPeopleConnectedMyDotzCounter', smartRef.dot.ownerUserId, function(error){
      //  if(error){
      //    console.log('Error in updateUserPeopleConnectedMyDotzCounter inside updateUserConnectivity: ' + error)
      //  }
      //});
      try {
        Meteor.users.update({_id: smartRef.dot.ownerUserId}, {$addToSet: {"userConnections.peopleConnectedMyDotz": smartRef}});
      }
      catch(error){
        return error
      }
    }
  },

  updateUserPeopleLikedMyConnection(smartRef){
    check(smartRef, Schema.dotSmartRef);

    if(Meteor.userId() != smartRef.connection.connectedByUserId && Meteor.userId() != smartRef.dot.ownerUserId ){
      //Meteor.call('updateUserPeopleLikedMyConnectionCounter', smartRef.dot.ownerUserId, function(error){
      //  if(error){
      //    console.log('Error in updateUserPeopleConnectedMyDotzCounter inside updateUserConnectivity: ' + error)
      //  }
      //});
      try {
        Meteor.users.update({_id: smartRef.connection.connectedByUserId}, {$addToSet: {"userConnections.peopleLikedMyConnection": smartRef}});
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
        Meteor.users.update({_id: smartRef.dot.ownerUserId}, {$addToSet: {"userConnections.peopleLikedMyDotz": smartRef}});
      }
      catch (error) {
        return error
      }
    }
  },



  //update user connectivity counter
  //updateUserPeopleConnectedMyDotzCounter(dotOwnerId){
  //  check(dotOwnerId, String);
  //  if(dotOwnerId != Meteor.userId()) {
  //    try {
  //      Meteor.users.update({_id: dotOwnerId}, {$inc: {"profile.userConnectionsCounter.peopleConnectedMyDotz": 1}});
  //    }
  //    catch (error) {
  //      console.log(error);
  //      return error
  //    }
  //  }
  //},

  //updateUserPeopleLikedMyDotzCounter(dotOwnerId){
  //  check(dotOwnerId, String);
  //  try {
  //    Meteor.users.update({_id: dotOwnerId}, {$inc: {"profile.userConnectionsCounter.peopleLikedMyDotz": 1}});
  //  }
  //  catch(error){
  //    console.log(error);
  //    return error
  //  }
  //},

  //updateUserPeopleLikedMyConnectionCounter(dotOwnerId){
  //  check(dotOwnerId, String);
  //  try {
  //    Meteor.users.update({_id: dotOwnerId}, {$inc: {"profile.userConnectionsCounter.peopleLikedMyConnections": 1}});
  //  }
  //  catch(error){
  //    console.log(error);
  //    return error
  //  }
  //}



});