//Meteor.startup( () => Modules.server.startup() );

Meteor.startup(function () {
  Modules.server.startup();
  process.env.MAIL_URL = "smtp://postmaster%40dotz.city:TLVbeta123@smtp.mailgun.org:587";
  //Meteor.call('convertUserToConnector');

});

//Migration methods

Meteor.methods({
  convertUserToConnector(){
    var users = Meteor.users.find().fetch();
    if (!users)
      return [];
// it'll only come here after the subscription is ready, no .fetch required
    users.forEach(function(user){
      let userId = user._id;
      console.log(userId) ;
      Roles.addUsersToRoles(userId  ,[ 'connector' ], Roles.GLOBAL_GROUP );
    });
  }
});

