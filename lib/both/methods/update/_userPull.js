
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
      UserConnections.update({userId: belongsToUserId}, {
        $pull: {"profile.userConnections": connectivityItem}
      });
    }
    catch( exception ) {
      return exception;
    }
  },

  pullFromCreatedByUserDotz(userId, dotId){
    //check( userId === Meteor.userId() );
    check(userId, String);
    check(dotId, String);
    try {
      Meteor.users.update(userId, {
        $pull: {createdByUserDotz: dotId}
      });
    }
    catch( exception ) {
      return exception;
    }
  },

  pullFromCreatedByUserLists(deletedDotId) {
    check( deletedDotId, String );
    try {
      Meteor.users.update(Meteor.userId(), {
        $pull: {"profile.createdByUserLists": deletedDotId}
      });
    }
    catch( exception ) {
      return exception;
    }
  }




});

