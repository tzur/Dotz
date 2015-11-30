/**
 * Created by avivhatzir on 30/11/2015.
 */
Meteor.methods({

  autoGenerateContentInsideList(quickStartListId, parentDot){
    check(quickStartListId, String);
    check(parentDot, String);
    let list = Dotz.findOne(quickStartListId);
    console.log(list);
    list.connectedDotzArray.forEach(function(smartRef){
      let newSmartRef = new Modules.both.Dotz.smartRef(smartRef.dot._id, smartRef.dot.ownerUserId,
                        parentDot, CONNECT_ACTION, Meteor.userId());
      console.log(newSmartRef);


      Modules.both.Dotz.connectDot(newSmartRef)
    });




  }
});
