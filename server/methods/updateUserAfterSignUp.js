

let _createNewDotForShare = (userId) =>{

  let shareDotDoc = {
    dotType: "shareList",
    ownerUserId: userId,
    title: Meteor.user().username + " Share",
    createdAtDate: new Date(),
    isOpen: false
  };
  Meteor.call('insertDot', shareDotDoc, function(error, result){
    if (!error){
      Meteor.call('updateUserShareDotId', Meteor.userId(), result, function(error, result){
        if (error){
          console.log("error" + error);
        }
      });
    }
    else{
      console.log("error" + error);
    }

  })
};
let _createNewDotForDotProfile = ( userId ) => {
  let profileDotDoc = {
    dotType: "_profileDot",
    ownerUserId: userId,
    title: Meteor.user().username + " Dotz",
    createdAtDate: new Date(),
    isOpen: false
  };
  check(profileDotDoc, Schema.dotSchema);
  Meteor.call('insertDot', profileDotDoc, function(error, result){
    if (result){
      Meteor.call('updateUserProfileDotId', Meteor.userId(), result, function(error, result){
        if (!error) {
          //APIs:
          //Mixpanel tracking the event of singup user
          //if (Meteor.isClient){
          //  analytics.identify( Meteor.userId(), {
          //    email: Meteor.user().emails[0].address,
          //    name: Meteor.user().username
          //  });
          //}


        } else {
          //TBD: We need to give a good solution for this error :(
          console.log(" updateUserProfileDotId Error >> " + error);
        }
      });
    } else {
      console.log(" insertDot Error >> " + error);
    }
  });
};

let _formatSlug = function(value) {
  let formatted = value
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[-]+/g, '-')
    .replace(/[^\w\x80-\xFF-]+/g,'');
  return formatted;
};

Meteor.methods({
  updateUserAfterSignUp(){
    let username = Meteor.user().username;

    let slug = _formatSlug(username);
    let SlugFuture;
    let mySlugFuture;
    SlugFuture = Meteor.npmRequire('fibers/future');
    mySlugFuture = new SlugFuture();

    _createNewDotForDotProfile ( Meteor.userId() );
    _createNewDotForShare(Meteor.userId());
    Meteor.call('createUserSlug', slug, function(error, result) {
      //TBD:
      if (error) {
          mySlugFuture.throw(error);
      }
      else {
        mySlugFuture.return(result);
      }
    });
    return mySlugFuture.wait();
  }
});
