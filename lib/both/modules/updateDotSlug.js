
let _formatSlug = function(value) {
  let formatted = value
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[-]+/g, '-')
    .replace(/[^\w\x80-\xFF-]+/g,'');
  return formatted;
};
let _slugUniquenessValidation = (dotId , slug)  => {
  let uniqueSlug;
  Meteor.call('makeUpdateDotSlug', dotId, slug, function(error, result) {
    if (error) {
      let newSlug = slug + "-2";
      _slugUniquenessValidation ( dotId, newSlug );
    }
    else {
      uniqueSlug = slug;
      if (Meteor.isServer){
        myFutureSlug.return(slug);
      }
    }
  });
};

Meteor.methods({
  updateDotSlug(doc, dotId, dotFirstSlug){
    check(doc, Object);
    check(dotId, String);
    check(dotFirstSlug, String);
    if (Meteor.isServer){
      let Future = Meteor.npmRequire('fibers/future');
      myFutureSlug = new Future();
    }

    let formattedSlug = _formatSlug(dotFirstSlug);
    let fullSlug = (Meteor.user().profile.userSlug + '/' + doc.dotType.toLowerCase() + '/' + formattedSlug);
     _slugUniquenessValidation (dotId, fullSlug);
    if (Meteor.isServer){
      return myFutureSlug.wait();
    }


  }
});
