/*
 * Fake module createDot.
 * will insert the new dot and connect it to the parent dot.
 */
let _docValidation = (doc) => {
  return ( doc.ownerUserId === Meteor.userId() &&
           doc.inDotz.length === 1 )
};

Meteor.methods({
  createDot(doc){
    check(doc, Schema.dotSchema);
    if(doc.location){
      check(doc.location, Schema.location);
    }
    let Future = Meteor.npmRequire('fibers/future');
    let myFuture = new Future();

    if(_docValidation(doc)) {
      Meteor.call('insertDot', doc, function (error, result) {
        if (!error) {
          //Meteor.call("updateTagsDoc", doc.tags, "dotzTags");
          let dotId = result;

          console.log("dotId" + dotId);
          let dot = Dotz.findOne(doc.inDotz[0]);
          let isConnectedToOthers;
          if (doc.ownerUserId === dot.ownerUserId){
            isConnectedToOthers = false;
          }
          else{
            isConnectedToOthers = true;
          }
          let smartRef = new Modules.both.Dotz.smartRef(dotId, Meteor.userId() ,doc.inDotz[0], CREATE_ACTION, doc.ownerUserId);
          Modules.both.Dotz.connectDot(smartRef);
         // Modules.both.Dotz.updateFeed(smartRef, doc.ownerUserId);

          if(doc.dotType === "List"){
            Meteor.call('updateCreatedByUserLists', Meteor.userId(), dotId, function (error, result) {
              if (error) {
                console.log("THE ERROR IS:" + error);
                myFuture.throw(error);
              }
              else if (!error) {
                myFuture.return(dotId);
              }
            });
          }
          else{
            Meteor.call('updateCreatedByUserDotz', Meteor.userId(), dotId, function (error, result) {
              if (error) {
                console.log("THE ERROR IS:" + error);
                myFuture.throw(error);
              }
              else if (!error) {
                myFuture.return(dotId);
              }
            });
          }

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
