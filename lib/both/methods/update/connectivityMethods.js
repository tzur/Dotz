
Meteor.methods({

  updateConnectionsMadeByUser(smartRef){
    check(smartRef, Schema.dotSmartRef);
    UserConnections.update({userId: smartRef.connection.connectedByUserId}, {$addToSet: {connectionsMadeByUser: smartRef}})
  },

  updateLikesMadeByUser(smartRef){
    check(smartRef, Schema.dotSmartRef);
    UserConnections.update({userId: Meteor.userId()}, {$addToSet: {likesMadeByUser: smartRef}})
  },

  updateUserPeopleConnectedMyDotz(smartRef){
    check(smartRef, Schema.dotSmartRef);

    if(smartRef.dot.ownerUserId != Meteor.userId()){
        //Meteor.call('updateUserPeopleConnectedMyDotzCounter', smartRef.dot.ownerUserId, function(error){
        //  if(error){
        //    console.log('Error in updateUserPeopleConnectedMyDotzCounter inside updateUserConnectivity: ' + error)
        //  }
        //});
        try {
          UserConnections.update({userId: smartRef.dot.ownerUserId}, {$addToSet: {peopleConnectedMyDotz: smartRef}});
        }
        catch(error){
          return error
        }
    } else if(smartRef.dot.ownerUserId = Meteor.userId()) {
        Meteor.call('updateConnectionsMadeByUser', smartRef, function(error){
          if(error){
            console.log('Error in updateConnectionsMadeByUser inside updateUserConnectivity: ' + error)
          }
        });
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
        UserConnections.update({userId: smartRef.connection.connectedByUserId}, {$addToSet: {peopleLikedMyConnection: smartRef}});
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
        UserConnections.update({userId: smartRef.dot.ownerUserId}, {$addToSet: {peopleLikedMyDotz: smartRef}});
      }
      catch (error) {
        return error
      }
    }
  },

  insertNewUserConnectionsCollection(){
    let userConnectioCollectionId = UserConnections.insert({userId: Meteor.userId()})
    if (userConnectioCollectionId){
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.userConnectionsCollectionId": userConnectioCollectionId}})
    }
  }



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
