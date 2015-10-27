/**
 * Created by avivhatzir on 26/10/2015.
 */
Meteor.publish( 'files', function(){
  var data = Files.find( { "userId": this.userId } );

  if ( data ) {
    return data;
  }

  return this.ready();
});
