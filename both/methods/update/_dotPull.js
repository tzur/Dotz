
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
