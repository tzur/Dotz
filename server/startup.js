//Meteor.startup( () => Modules.server.startup() );

Meteor.startup(function () {
  Modules.server.startup();
  process.env.MAIL_URL = "smtp://postmaster%40dotz.city:TLVbeta123@smtp.mailgun.org:587";


  //make me admin:

  //let userToBeAdmin = Meteor.users.findOne({"emails.1.address": "otniel.levi@gmail.com"});
  //
  //if (userToBeAdmin) {
  //  console.log("userToBeAdmin is " + userToBeAdmin.username);
  //}





  ////Migration methods calls - use if needed
  //
  ////****Convert all users to connectors OR AND ARGUMENT OF USER ID*****
  //Meteor.call('convertUsersToRoleOwner', 'FBGroupAdmin', Roles.GLOBAL_GROUP, userId);
  //
  ////****Convert User from tourism to tech and vise versa
  //Meteor.call('convertUsersToRoleOwner', 'Tech', 'firstGroup', function(error){
  //    if(!error){
  //      console.log('all user have been updated')
  //    }
  //  });
});
