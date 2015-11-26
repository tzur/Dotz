let startup = () => {
  _setBrowserPolicies();
  _generateAccounts();
  //process.env.MAIL_URL = "smtp://postmaster%40dotz.city.mailgun.org:TLVbeta123@smtp.mailgun.org:587";
};

var _setBrowserPolicies = () => {};

var _generateAccounts = () => Modules.server.generateAccounts();
//Kadira.connect('WhNBWk69WyNe4e6SH', '97449698-c726-4fb0-9a28-704083cd9335');
Modules.server.startup = startup;
