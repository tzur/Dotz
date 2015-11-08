/*
 * Fake module createDot.
 * will insert the new dot and connect it to the parent dot.
 */
let _docValidation = (doc) => {
  return ( doc.ownerUserId === Meteor.userId() &&
           doc.inDotz.length === 1 &&
           !doc.dotzConnectedByOthers )
};

Meteor.methods({
  createDot(doc){
    check(doc, Schema.dotSchema);
    if(doc.location){
      check(doc.location, Schema.location);
    }
    if(_docValidation(doc)) {
      Meteor.call('insertDot', doc, function (error, result) {
        if (!error) {
          let dotId = result;
          let dot = Dotz.findOne(doc.inDotz[0]);
          let isConnectedToOthers;
          if (doc.ownerUserId === dot.ownerUserId){
            isConnectedToOthers = false;
          }
          else{
            isConnectedToOthers = true;
          }
          let smartRef = new Modules.both.Dotz.smartRef(dotId, doc.inDotz[0], doc.ownerUserId, isConnectedToOthers ,CREATE_ACTION);
          Modules.both.Dotz.connectDot(smartRef);
         // Modules.both.Dotz.updateFeed(smartRef, doc.ownerUserId);
          Meteor.call('updateUserAllUserDotz', Meteor.userId(), dotId, function (error, result) {
              if (error) {
                console.log("THE ERROR IS:" + error);
              }
          })
        }
        else{
          console.log("Error" + error);
        }

      })
    }
    else{
      // can be refactored and put it to the _docValidation method this specific exceptions
      console.log("there is a problem with one of the follows: " +
        "          doc.ownerUserId, doc.inDotz.length, doc.dotzConnectedByOthers.length ")
    }
  }
});
