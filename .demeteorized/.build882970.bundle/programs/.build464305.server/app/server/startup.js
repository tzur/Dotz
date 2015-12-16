(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/startup.js                                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
//Meteor.startup( () => Modules.server.startup() );                    //
                                                                       //
Meteor.startup(function () {                                           // 3
  Modules.server.startup();                                            // 4
  process.env.MAIL_URL = "smtp://postmaster%40dotz.city:TLVbeta123@smtp.mailgun.org:587";
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=startup.js.map
