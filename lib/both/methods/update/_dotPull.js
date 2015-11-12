
Meteor.methods({

  pullDotFromInDotz( dotId, pulledParentDot ) {
    check( dotId, String );
    check( pulledParentDot, String );
    try {
      Dotz.update(dotId, {
        $pull: {"inDotz": pulledParentDot }
      });
    }
    catch( exception ) {
      return exception;
    }
  },

  pullDotFromDotzConnectedArray(disconnectDot, parentDotId ) {
    check( parentDotId, String );
    check(disconnectDot, Object);
    //check( parentDot, String );
    try {
      Dotz.update(parentDotId, {
        $pull: {connectedDotzArray: {dot: disconnectDot} }
      });
    }
    catch( exception ) {
      return exception;
    }
  }



});
