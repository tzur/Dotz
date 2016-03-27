Meteor.methods({
  signInWithFaceBook(){
    if (Meteor.user().username){
      //console.log("im herererere")
      //TODO: wtf?
      return "REDIRECT";
    } else {
      if (Meteor.isServer){
        let Future = Meteor.npmRequire('fibers/future');
        let myFuture = new Future();
        let user = Meteor.user();
        let facebookUserName = user.services.facebook.name.toString();
        let facebookProfilePicture ="http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        Meteor.call('insertUserNameAndProfilePic', facebookUserName, facebookProfilePicture, function(error, result){
          if (!error){
            Meteor.call('updateUserAfterSignUp',function(error, result){
              if (error){
                myFuture.throw(error);
              } else {
                myFuture.return(result);
              }
            });
          } else {
            console.log("ERROR from insertUserNameAndProfilePic (signInWithFaceBook.js) >>> "
              + error + " >>> Let's Try Again (now by add a random nimber): ");

            //TODO: fix it soon : @otni
            let random = "(" + Math.floor(Math.random() * 42) + ")";
            Meteor.call('insertUserNameAndProfilePic', facebookUserName + random, facebookProfilePicture, function(error, result){
              if (!error) {
                Meteor.call('updateUserAfterSignUp', function (error, result) {
                  if (error) {
                    console.log("ERROR on updateUserAfterSignUp (signInWithFaceBook.js) >>> " + error + " >>> Do NOT Try again ");
                  }
                });
              } else if (error) {
                console.log("ERROR from insertUserNameAndProfilePic (signInWithFaceBook.js) >>> " + error + " >>> Do NOT Try again ");
              }
            });

          }
        });
        return myFuture.wait();
      }
    }
  }
});
