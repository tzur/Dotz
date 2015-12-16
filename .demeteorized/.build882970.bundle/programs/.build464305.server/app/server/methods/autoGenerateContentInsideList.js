(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/autoGenerateContentInsideList.js                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 30/11/2015.                                //
 */                                                                    //
Meteor.methods({                                                       // 4
                                                                       //
  autoGenerateContentInsideList: function (quickStartListId, parentDot) {
    check(quickStartListId, String);                                   // 7
    check(parentDot, String);                                          // 8
    var list = Dotz.findOne(quickStartListId);                         // 9
    console.log(list);                                                 // 10
    list.connectedDotzArray.forEach(function (smartRef) {              // 11
      var newSmartRef = new Modules.both.Dotz.smartRef(smartRef.dot._id, smartRef.dot.ownerUserId, parentDot, CONNECT_ACTION, Meteor.userId());
      console.log(newSmartRef);                                        // 14
                                                                       //
      Meteor.call('connectDot', newSmartRef);                          // 17
    });                                                                //
  },                                                                   //
                                                                       //
  autoGenerateNewLists: function (sampleHotelUserName) {               // 21
    check(sampleHotelUserName, String);                                // 22
    var sampleUserProfileDot = [];                                     // 23
    var sampleUserProfileDotId = Meteor.users.findOne({ username: sampleHotelUserName }).profile.profileDotId;
    console.log(sampleUserProfileDotId);                               // 25
    if (sampleUserProfileDot = Dotz.findOne(sampleUserProfileDotId)) {
      console.log("######################");                           // 27
      console.log(sampleUserProfileDot);                               // 28
      sampleUserProfileDot.connectedDotzArray.forEach(function (smartRef) {
        var dot = Dotz.findOne(smartRef.dot._id);                      // 30
        var newDoc = {                                                 // 31
          title: dot.title,                                            // 32
          ownerUserId: Meteor.userId(),                                // 33
          dotType: dot.dotType,                                        // 34
          createdAtDate: new Date(),                                   // 35
          coverImageUrl: dot.coverImageUrl,                            // 36
          isOpen: false,                                               // 37
          inDotz: [Meteor.user().profile.profileDotId],                // 38
          quickStartListId: dot._id                                    // 39
        };                                                             //
                                                                       //
        Meteor.call('createDot', newDoc, function (error, result) {    // 42
          if (error) {                                                 // 43
            console.log('Auto generate Lists failed');                 // 44
          }                                                            //
        });                                                            //
      });                                                              //
    }                                                                  //
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=autoGenerateContentInsideList.js.map
