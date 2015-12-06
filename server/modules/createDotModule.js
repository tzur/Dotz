/*
 * "Fake module" createDot (aka Meteor Method..)
 * will insert the new dot and connect it to the parent dot.
 */

let _docValidation = (doc) => {
  if ( (doc.dotType === "List") && (doc.inDotz.length > 100) ) {
      return false
  }
  else {
    return ( doc.ownerUserId === Meteor.userId() && doc.inDotz.length === 1 )
  }
};

//add an url-format slug:
let _formatSlug = function(value) {
  let formatted = value
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[-]+/g, '-')
    .replace(/[^\w\x80-\xFF-]+/g,'');
  return formatted;
};

//add an unique slug:
let _slugUniquenessValidation = (dotId , slug) => {
  let uniqueSlug;
  Meteor.call('updateDotSlug', dotId, slug, function(error, result) {
      //TBD:
      if (error) {
        newSlug = slug + '-2';
        _slugUniquenessValidation ( dotId, newSlug );
      }
      else {
        //TBD
        uniqueSlug = slug;
      }
  });

  if (uniqueSlug) {
      return uniqueSlug
  }

};

Meteor.methods({
  createDot(doc){
    check(doc, Schema.dotSchema);
    if (!Meteor.userId()){
      return false;
    }
    if(doc.location){
      check(doc.location, Schema.location);
    }
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
              let smartRef = new Modules.both.Dotz.smartRef(dotId, Meteor.userId() ,doc.inDotz[0], CREATE_ACTION, doc.ownerUserId);
              Modules.both.Dotz.connectDot(smartRef);
              if( dotSlug && (doc.dotType === "List") ){
                Meteor.call('updateCreatedByUserLists', Meteor.userId(), dotId, function (error, result) {
                  if (error) {
                    console.log("THE ERROR IS:" + error);
                    myFuture.throw(error);
                  }
                  else if (!error) {
                    myFuture.return(dotSlug);
                  }
                });
              }
              else if ( dotSlug && (doc.dotType === "Dot") ) {
                Meteor.call('updateCreatedByUserDotz', Meteor.userId(), dotId, function (error, result) {
                  if (error) {
                    console.log("THE ERROR IS:" + error);
                    myFuture.throw(error);
                  }
                  else if (!error) {
                    myFuture.return(dotSlug);
                  }
                });
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
});
