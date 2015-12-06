let Future = Meteor.npmRequire('fibers/future');

let _formatSlug = function(value) {
  let formatted = value
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[-]+/g, '-')
    .replace(/[^\w\x80-\xFF-]+/g,'');
  return formatted;
};

let _slugUniquenessValidation = (userId , slug)  => {
  Meteor.call('setUserSlug', slug, function(error, result) {
    //TBD:
    if (error) {
      let random = Math.floor((Math.random() * 9) + 1);
      let newSlug = slug + random;
      _slugUniquenessValidation ( userId, newSlug );
    }
    else {
      myFutureUserSlug.return(slug);
    }
  });
};

Meteor.methods({
  createUserSlug(slug){
    check(slug, String);
    let userId = Meteor.userId();
    myFutureUserSlug = new Future();
    let formattedSlug = _formatSlug(slug);
    //let fullSlug = (Meteor.user().profile.userSlug + '/' + doc.dotType.toLowerCase() + '/' + formattedSlug);
    _slugUniquenessValidation (userId, formattedSlug);
    return myFutureUserSlug.wait();
  },

  setUserSlug(slug){
    check(slug, String);
    let userId = Meteor.userId();
    Meteor.users.update( {_id: userId}, {$set: {"profile.userSlug": slug}} );
  },

  //TBD: special method for user-signUp process:
  // Does not work with try/exception..
  updateUserSlug(userId, slug){
    check(userId, String);
    check(slug, String);
    Meteor.users.update( {_id: userId}, {$set: {"profile.userSlug": slug}} );
  }
});


