(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/modules/startup.js                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var startup = function () {                                            // 1
  _setBrowserPolicies();                                               // 2
  _generateAccounts();                                                 // 3
  //process.env.MAIL_URL = "smtp://postmaster%40dotz.city.mailgun.org:TLVbeta123@smtp.mailgun.org:587";
};                                                                     //
                                                                       //
var _setBrowserPolicies = function () {};                              // 7
                                                                       //
var _generateAccounts = function () {                                  // 9
  return Modules.server.generateAccounts();                            //
};                                                                     //
//Kadira.connect('WhNBWk69WyNe4e6SH', '97449698-c726-4fb0-9a28-704083cd9335');
Modules.server.startup = startup;                                      // 11
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=startup.js.map
