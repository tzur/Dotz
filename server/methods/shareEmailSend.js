


Meteor.methods({
  sendEmail: function(emailAddress, shareListLink, hotelName, touristName){
    check(emailAddress, String);
    check(shareListLink, String);
    check(hotelName, String);
    check(touristName,String);
    let emailData= {
      shareListLink:shareListLink,
      hotelName: hotelName,
      touristName: touristName
    };
    SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'));
    try{
      Email.send({
        to: emailAddress,
        from: "info@dotz.city",
        subject: hotelName +" Shared with you the following Dotz",
        html: SSR.render('htmlEmail',emailData)
      })
    }
    catch(error){
      return error;
    }
  }
});
