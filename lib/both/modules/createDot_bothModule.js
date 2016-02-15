/*
 * "Fake module" createDot (aka Meteor Method..)
 * will insert the new dot and connect it to the parent dot.
 */

//TODO: we need to improve this check.. @otni
let _docValidation = (doc) => {

  return ( doc.ownerUserId === Meteor.userId() && doc.inDotz.length === 1 );

  //if ( (doc.dotType === "List") ) {
  //  check(doc.inDotz[0], Meteor.user().profile.profileDotId);
  //}
  //else {
  //  //return ( doc.ownerUserId === Meteor.userId() && doc.inDotz.length === 1 )
  //}
};

////add an url-format slug:
//let _formatSlug = function(value) {
//  let formatted = value
//    .toLowerCase()
//    .replace(/ /g, '-')
//    .replace(/·/g, '')
//    .replace(/[-]+/g, '-')
//    .replace(/[^\w\x80-\xFF-]+/g, '');
//  return formatted;
//};

////add an unique slug:
//let _slugUniquenessValidation = (dotId , slug) => {
//  let uniqueSlug;
//  Meteor.call('updateDotSlug', dotId, slug, function(error, result) {
//    //TBD:
//    if (error) {
//      newSlug = slug + '-2';
//      _slugUniquenessValidation ( dotId, newSlug );
//    }
//    else {
//      //TBD
//      uniqueSlug = slug;
//    }
//  });
//
//  if (uniqueSlug) {
//    return uniqueSlug
//  }
//
//};

Meteor.methods({
  createDot(doc, redirectAfterCreate, personalDescription){
    check(doc, Schema.dotSchema);
    check(doc.ownerUserId, Meteor.userId() );
    check(redirectAfterCreate, String);
    check(doc.inDotz.length, 1 );
    if (personalDescription) {
      check(personalDescription, String);
    }

    //TODO tbd? @otni
    if (!Meteor.userId()) {return false;}

    //console.log("################################# createDot 1");

    if(doc.location){
      check(doc.location, Schema.location);
    }
    //Converting linkUrl to linkName:
    if (doc.linkUrl) {
      //console.log("####################################"+doc.linkUrl)
      let linkUrlWithoutWWW = doc.linkUrl.replace('www.','').replace('http://','').replace('https://','');
      let urlSplitArray = linkUrlWithoutWWW.split('/');
      doc.linkName = urlSplitArray [0];
    }

    if (doc.embedlyObj) {
      doc.linkFavicon = doc.embedlyObj.favicon_url;
    }

    if (Meteor.isServer){
      let Future = Meteor.npmRequire('fibers/future');
      let myFuture = new Future();

      if(_docValidation(doc)) {
        Meteor.call('insertDot', doc, function (error, result) {
          if (!error) {
            let dotId = result;
            //slug Process:
            Meteor.call('updateDotSlug',doc, dotId, doc.title, function(error, result){
              if (error){
                console.log('error' + error);
              }
              else{
                let dotSlug = result;
                let smartRef = new Modules.both.Dotz.smartRef(dotId, Meteor.userId() ,doc.inDotz[0], CREATE_ACTION, doc.ownerUserId, personalDescription);
                Meteor.call('connectDot', smartRef, function(error){
                  if(error){
                    console.log("Error in connectDot method: " + error)
                  }
                });
                if( dotSlug && (doc.dotType === "List") ){
                  Meteor.call('updateCreatedByUserLists', smartRef, function (error, result) {
                    if (error) {
                      console.log("THE ERROR IS:" + error);
                      myFuture.throw(error);
                    }
                    else if (!error) {
                      myFuture.return(dotSlug);
                    }
                  });
                }
                //TODO we need to replace the dot types to _CONSTANS or a CONSTANT (single array?)
                else if ( dotSlug && (doc.dotType === "Dot") ) {
                  // || "Place" || "Text" || 'Link' || 'Person' || 'Product' || "Media"
                  Meteor.call('updateCreatedByUserDotz', smartRef, function (error, result) {
                    if (error) {
                      console.log("THE ERROR IS:" + error);
                      myFuture.throw(error);
                    }
                    else if (!error) {
                      myFuture.return(dotSlug);
                    }
                  });
                }
                else{// Deals with different dot types.
                  myFuture.return(dotSlug);
                }
              }
            });
            //TBD:
            //let dotSlug = Dotz.findOne(result).dotSlug;
          }
          else{
            console.log("ASD ASD ASD ASD ASD ASD");
            myFuture.throw(error);
          }

        })
      }
      else{
        // can be refactored and put it to the _docValidation method this specific exceptions
        console.log("there is a problem with one of the follows: " +
          "          doc.ownerUserId, doc.inDotz.length, doc.dotzConnectedByOthers.length ")
      }
      return myFuture.wait();
    }


    else if (Meteor.isClient){

      if(_docValidation(doc)) {

        Meteor.call('insertDot', doc, function (error, result) {
          if (!error) {
            let dotId = result;
            //slug Process:
            Meteor.call('updateDotSlug',doc, dotId, doc.title, function(error, result){
              if (error){
                console.log(error);
              }
              else{
                let smartRef = new Modules.both.Dotz.smartRef(dotId, Meteor.userId() ,doc.inDotz[0], CREATE_ACTION, doc.ownerUserId);
                Meteor.call('connectDot', smartRef, function(error, result){
                  if (!error){
                    Modal.hide();
                    //Bert.alert('Created :)', 'success', 'growl-bottom-left');
                    Bert.alert('Connected :)', 'success', 'growl-bottom-left');
                    FlowRouter.go('/' + redirectAfterCreate);
                    //setTimeout(function(){ //TODO DO IT ONLY WHEN IT IS NOT CREATED WITH GOOGLE SEARCH
                    //  var n = $(document).height();
                    //  $('html, body').animate({ scrollTop: n }, 1000);
                    //}, 1000);
                  }
                });
              }
            });
            //TBD:
            //let dotSlug = Dotz.findOne(result).dotSlug;
          }
          else{
            console.log("ASD ASD ASD ASD ASD ASD");
          }

        })
      }
      else{
        // can be refactored and put it to the _docValidation method this specific exceptions
        console.log("there is a problem with one of the follows: " +
          "          doc.ownerUserId, doc.inDotz.length, doc.dotzConnectedByOthers.length ")
      }
    }
  }
});
