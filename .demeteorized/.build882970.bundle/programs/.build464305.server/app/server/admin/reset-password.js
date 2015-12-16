(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/admin/reset-password.js                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Accounts.emailTemplates.resetPassword.siteName = function () {         // 1
  return "Dotz";                                                       //
};                                                                     //
Accounts.emailTemplates.resetPassword.from = function () {             // 2
  return "Dotz <info@dotz.city>";                                      //
};                                                                     //
Accounts.emailTemplates.resetPassword.subject = function () {          // 3
  return "Reset Your Password [Dotz]";                                 //
};                                                                     //
                                                                       //
Accounts.emailTemplates.resetPassword.text = function (user, url) {    // 5
  var emailAddress = user.emails[0].address,                           // 6
      urlWithoutHash = url.replace('#/', ''),                          //
      supportEmail = "info@dotz.city",                                 //
      emailBody = "\nHi :)\nA password reset has been requested for the account related to this address (" + emailAddress + ").\nTo reset the password, visit the following link:\n\n" + urlWithoutHash + "\n\n\nIf you did not request this reset, please ignore this email.\n\nIf you feel something is wrong, please contact our support team:\n" + supportEmail + " .\n";
                                                                       //
  return emailBody;                                                    // 21
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=reset-password.js.map
