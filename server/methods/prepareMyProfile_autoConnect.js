
Meteor.methods({

  prepareMyProfile_byDotzArray(answerObj, dotOwnerUserId){
    check(answerObj, Object);
    check(answerObj.userDots, Array);
    check(dotOwnerUserId, String);

    let profileDotId = Meteor.user().profile.profileDotId;
    console.log("prepareMyProfile_byDotzArray: profileDotId >>>>>>>>>>>>>>>>>>>> " + profileDotId);

    answerObj.userDots.forEach(function(id){
      // _smartRef = function (dotId, dotOwnerUserId,parentDotId, actionName, connectedByUserId ,personalDescription )
      let newSmartRef = new Modules.both.Dotz.smartRef(id, dotOwnerUserId,
        profileDotId, CONNECT_ACTION, Meteor.userId());
      console.log("answerObj.userDots.forEach: newSmartRef >>>>>>>>>>>>>>>>>>>>> " + newSmartRef);
      Meteor.call('connectDot',(newSmartRef));
    });

    Modules.both.relatedDotzArray(answerObj.userTags);
    Meteor.call('updateUserDotsAndTags', answerObj.userDots, answerObj.userTags);
  },


  autoGenerateContentInsideList(quickStartListId, parentDot){
    check(quickStartListId, String);
    check(parentDot, String);
    let list = Dotz.findOne(quickStartListId);
    console.log(list);
    list.connectedDotzArray.forEach(function(smartRef){
      let newSmartRef = new Modules.both.Dotz.smartRef(smartRef.dot._id, smartRef.dot.ownerUserId,
                        parentDot, CONNECT_ACTION, Meteor.userId());
      console.log(newSmartRef);

      Meteor.call('connectDot',(newSmartRef));
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
