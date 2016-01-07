//Meteor.startup( () => Modules.server.startup() );

Meteor.startup(function () {
  Modules.server.startup();
  process.env.MAIL_URL = "smtp://postmaster%40dotz.city:TLVbeta123@smtp.mailgun.org:587";




  //Migration methods calls - use if needed

  //****Convert all users to connectors OR AND ARGUMENT OF USER ID*****
  //Meteor.call('convertUsersToRoleOwner', 'Connector', Roles.GLOBAL_GROUP);

  //****Convert User from tourism to tech and vise versa
  //Meteor.call('convertUsersToRoleOwner', 'Tech', 'firstGroup', function(error){
  //    if(!error){
  //      console.log('all user have been updated')
  //    }
  //  });
});
