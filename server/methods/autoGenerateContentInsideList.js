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
  },

  autoGenerateNewLists(sampleHotelUserName) {
    check(sampleHotelUserName, String);
    let sampleUserProfileDot = [];
    let sampleUserProfileDotId = Meteor.users.findOne({username: sampleHotelUserName}).profile.profileDotId;
    console.log(sampleUserProfileDotId)
    if(sampleUserProfileDot = Dotz.findOne(sampleUserProfileDotId)){
      console.log("######################")
      console.log(sampleUserProfileDot)
      sampleUserProfileDot.connectedDotzArray.forEach(function (smartRef) {
        let dot = Dotz.findOne(smartRef.dot._id);
        let newDoc = {
          title: dot.title,
          ownerUserId: Meteor.userId(),
          dotType: dot.dotType,
          createdAtDate: new Date(),
          coverImageUrl: dot.coverImageUrl,
          isOpen: false,
          inDotz: [Meteor.user().profile.profileDotId],
          quickStartListId: dot._id
        };

        Meteor.call('createDot', newDoc, function (error, result) {
          if (error) {
            console.log('Auto generate Lists failed');
          }
        })

      })

    }

  }

});
