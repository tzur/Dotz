/**
 * Created by avivhatzir on 26/10/2015.
 */
Template.uploader.events({
  'change input[type="file"]' ( event, template ) {
    Modules.client.uploadToAmazonS3( { event: event, template: template } );
  }
});
