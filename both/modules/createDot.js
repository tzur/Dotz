/*
 * Fake module createDot.
 * will insert the new dot and connect it to the parent dot.
 */

Meteor.methods({
  createDot(doc){
    check(doc, Schema.dotSchema);
    Meteor.call('insertDot', doc, function(error, result){
      console.log("The call back function from insert dot" + result);
      let dotId = result;
      // maybe need to do if(!error).
       if (dotId){
         let smartRef = Modules.both.Dotz.smartRefFactory(dotId, doc.inDotz[0], doc.ownerUserId, CREATE_ACTION );
         Modules.both.Dotz.connectDot(smartRef);
       }
    })
  }
});
