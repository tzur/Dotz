
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

  pullDotFromDotzConnectedByOwner( dotId, parentDot ) {
    check( dotId, String );
    check( parentDot, String );
    try {
      Dotz.update(parentDot, {
        $pull: {"dotzConnectedByOwner": {"dotId": dotId} }
      });
    }
    catch( exception ) {
      return exception;
    }
  },

  pullDotFromDotzConnectedByOthers( dotId, parentDot ) {
    check( dotId, String );
    check( parentDot, String );
    try {
      Dotz.update(parentDot, {
        $pull: {"dotzConnectedByOthers": {"dotId": dotId} }
      });
    }
    catch( exception ) {
      return exception;
    }
  }

});
