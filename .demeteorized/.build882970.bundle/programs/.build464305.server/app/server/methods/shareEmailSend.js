(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/shareEmailSend.js                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  sendEmail: function (emailAddress, shareListLink, hotelName, touristName) {
    check(emailAddress, String);                                       // 3
    check(shareListLink, String);                                      // 4
    check(hotelName, String);                                          // 5
    check(touristName, String);                                        // 6
    var emailData = {                                                  // 7
      shareListLink: shareListLink,                                    // 8
      hotelName: hotelName,                                            // 9
      touristName: touristName                                         // 10
    };                                                                 //
    SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'));
    try {                                                              // 13
      Email.send({                                                     // 14
        to: emailAddress,                                              // 15
        from: "info@dotz.city",                                        // 16
        subject: hotelName + " Shared with you the following Dotz",    // 17
        html: SSR.render('htmlEmail', emailData)                       // 18
      });                                                              //
    } catch (error) {                                                  //
      return error;                                                    // 22
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=shareEmailSend.js.map
