
Meteor.methods({

  pullDotFromInDotz( smartRef ) {
    check( smartRef, Object );
    check( smartRef.parentDot, String );
    check( smartRef.dotId, String );
    try {
      Dotz.update(smartRef.dotId, {
        $pull: {"inDotz": {dotId: smartRef.parentDot}}
      });
    }
    catch( exception ) {
      return exception;
    }
  },

  pullDotFromDotzConnectedByOwner( smartRef ) {
    check( smartRef, Object );
    check( smartRef.parentDot, String );
    try {
      Dotz.update(smartRef.parentDot, {
        $pull: {"dotzConnectedByOwner": smartRef}
      });
    }
    catch( exception ) {
      return exception;
    }
  },

  pullDotFromDotzConnectedByOthers( smartRef ) {
    check( smartRef, Object );
    check( smartRef.parentDot, String );
    try {
      Dotz.update(smartRef.parentDot, {
        $pull: {"dotzConnectedByOthers": smartRef}
      });
    }
    catch( exception ) {
      return exception;
    }
  }

});
