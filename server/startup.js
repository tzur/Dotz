//Meteor.startup( () => Modules.server.startup() );

Meteor.startup(function () {
  Modules.server.startup();
  process.env.MAIL_URL = "smtp://postmaster%40dotz.city:TLVbeta123@smtp.mailgun.org:587";

});

