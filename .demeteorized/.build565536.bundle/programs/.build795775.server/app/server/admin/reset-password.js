(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/admin/reset-password.js                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Accounts.emailTemplates.resetPassword.siteName = function () {         // 1
    return "Application Name";                                         //
};                                                                     //
Accounts.emailTemplates.resetPassword.from = function () {             // 2
    return "Application Name <admin@application.com>";                 //
};                                                                     //
Accounts.emailTemplates.resetPassword.subject = function () {          // 3
    return "[Application Name] Reset Your Password";                   //
};                                                                     //
                                                                       //
Accounts.emailTemplates.resetPassword.text = function (user, url) {    // 5
    var emailAddress = user.emails[0].address,                         // 6
        urlWithoutHash = url.replace('#/', ''),                        //
        supportEmail = "support@application.com",                      //
        emailBody = "A password reset has been requested for the account related to this address (" + emailAddress + "). To reset the password, visit the following link:\n\n" + urlWithoutHash + "\n\n If you did not request this reset, please ignore this email. If you feel something is wrong, please contact our support team: " + supportEmail + ".";
                                                                       //
    return emailBody;                                                  // 11
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=reset-password.js.map
