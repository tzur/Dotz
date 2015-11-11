/**
 * Created by avivhatzir on 26/10/2015.
 */
Meteor.methods({
  storeImageUrlInDatabase: function( url ) {
    check( url, String );
    Modules.both.checkUrlValidity( url );

    try {
      Files.insert({
        url: url,
        userId: Meteor.userId(),
        added: new Date()
      });
    } catch( exception ) {
      return exception;
    }
  }
});
