Meteor.methods({
  signInWithFaceBook(){
    if (Meteor.user().username){
      console.log("im herererere")
      return "REDIRECT";
    }
    else{
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

        let userCategory;
        if(!Session.get('landingPageCategory')){
          userCategory = "Tech"
        }
        else{
          userCategory = Session.get('landingPageCategory');
        }
        //TBD!@#!@#!@#!@#!@#
        Meteor.call('convertUsersToRoleOwner', userCategory, 'firstGroup', Meteor.userId() , function(error){
          if(!error){
            //Algolia:
            Meteor.call('addOrEditObjectInAlgolia', Meteor.user().profile.userSlug, true, function(error, result){
              if (error) {
                console.log(" addOrEditObjectInAlgolia Error >> " + error);
              }
            });
          }
        });

        return myFuture.wait();
      }
    }
  }
});
