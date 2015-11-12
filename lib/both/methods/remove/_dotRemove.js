Meteor.methods({
  removeDotFromDotzCollection( dotId, userId ) {
    check(dotId, String);
    check(userId, Meteor.userId());
    try {
      Dotz.remove( dotId );
    } catch( exception ) {
      return exception;
    }
  }
});
