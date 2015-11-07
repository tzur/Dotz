
Meteor.methods({

  pullDotFromInDotz( dotId, parentDot ) {
    check( dotId, String );
    check( parentDot, String );
    try {
      Dotz.update(dotId, {
        $pull: {"inDotz": {"dotId": parentDot}}
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
