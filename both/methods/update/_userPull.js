
Meteor.methods({

  pullFromUserConnectivity(connectedUserId, dotId, belongsToUserId, parentDotId){
    check(connectedUserId, String);
    check(dotId, String);
    check(belongsToUserId, String);
    check(parentDotId, String);
    let connectivityItem = {
      userId: connectedUserId,
      dotId: dotId,
      parentDotId: parentDotId
    };

    try {
      Meteor.users.update(belongsToUserId, {
        $pull: {"profile.userConnections": connectivityItem}
      });
    }
    catch( exception ) {
      return exception;
    }
  }

});

