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
    if(_docValidation(doc)) {
      Meteor.call('insertDot', doc, function (error, result) {
        console.log("The call back function from insert dot" + result);
        let dotId = result;
        // maybe need to do if(!error).
        if (dotId) {
          let smartRef = Modules.both.Dotz.smartRefFactory(dotId, doc.inDotz[0], doc.ownerUserId, CREATE_ACTION);
          Modules.both.Dotz.connectDot(smartRef);
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
