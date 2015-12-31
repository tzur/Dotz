//Meteor.startup( () => Modules.server.startup() );

Meteor.startup(function () {
  Modules.server.startup();
  process.env.MAIL_URL = "smtp://postmaster%40dotz.city:TLVbeta123@smtp.mailgun.org:587";


  //Meteor.call('convertUsersToRoleOwner', 'Tourism', 'firstGroup', function(error){
  //  if(!error){
  //    console.log('all user have been updated')
  //  }
  //});
  //Meteor.call('convertUsersToRoleOwner', 'Connector', Roles.GLOBAL_GROUP);
  //Meteor.call('addCategoryToDotzByOwner');
  //Meteor.call('updateUsersRolesToAlgolia');
  //Meteor.call('convertImagesToImgixUrl');

});
