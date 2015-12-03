


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
        to: "zurtene@gmail.com",
        from: "info@dotz.city",
        subject: "WOOOW2",
        html: SSR.render('htmlEmail',emailData)
      })
    }
    catch(error){
      return error;
    }
  }
});
