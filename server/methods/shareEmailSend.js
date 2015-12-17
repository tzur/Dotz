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
  },
  superShare: function(nameAndEmailsArray, shareListLink, hotelName,  profileImg, description, coverImg, subject){
    check(nameAndEmailsArray, Array);
    check(shareListLink, String);
    check(hotelName, String);
    check(subject, String);
    check(profileImg, String);
    check(description, String);
    check(coverImg, String);

    let emailSubject;
    for (let i=0; i < nameAndEmailsArray.length; i++){
      let emailData = {
        shareListLink: shareListLink,
        hotelName: hotelName,
        touristName: nameAndEmailsArray[i].name,
        profileImg: profileImg,
        description: description,
        coverImg: coverImg
      };

      SSR.compileTemplate('superEmail', Assets.getText('userShow-email.html'));
      if (subject != "NOTHING"){
        emailSubject = subject;
      }
      else{
        emailSubject = hotelName + " Shared with you his page on Dotz"
      }
      try{
        Email.send({
          to:nameAndEmailsArray[i].email,
          from: "info@dotz.city",
          subject: emailSubject,
          html: SSR.render('superEmail', emailData)
        })
      }
      catch(error){
        return error;
      }
    }
  }
});
