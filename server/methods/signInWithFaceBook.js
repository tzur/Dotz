Meteor.methods({
  signInWithFaceBook(){
    if (Meteor.user().username){
      return "REDIRECT";
    }
    else{
      if (Meteor.isServer){
        let Future = Meteor.npmRequire('fibers/future');
        let myFuture = new Future();
        let user = Meteor.user();
        let facebookUserName = user.services.facebook.name.toString();
        let facebookProfilePicture ="http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        Meteor.call('insertUserName', facebookUserName, facebookProfilePicture, function(error, result){
          if (!error){
            Meteor.call('updateUserAfterSignUp',function(error, result){
              if (error){
                myFuture.throw(error);
              }
              else{
                myFuture.return(result);
              }
            });
          }
          else{
            console.log("ERROR from insertusername" + error);
          }
        });
        return myFuture.wait();
      }
    }
  }
});
