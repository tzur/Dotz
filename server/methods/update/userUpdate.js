let _userUpdate = (userId, updateOptions) => {
  try {
    check(updateOptions, Object);
    check(userId, String);
    console.log(userId);
    Meteor.users.update({_id: userId}, updateOptions);
  } catch (exeption) {
    console.log(exeption);
    return exeption;
  }
};

Meteor.methods({
  checkAndRemoveDotzFromFeed(smartRef, userId){
    check(smartRef, Object);
    check(userId, String);
    let user = Meteor.users.findOne(userId);
    if (user.profile.feedDotz) {
      let checkInterval = 0;
      if (user.profile.feedDotz.length < MAXIMUM_NUMBER_OF_FEED_DOTZ_TO_CHECK) {
        checkInterval = 0;
      }
      else {
        checkInterval = user.profile.feedDotz.length - MAXIMUM_NUMBER_OF_FEED_DOTZ_TO_CHECK;
      }
      for (let i = checkInterval; i < user.profile.feedDotz.length; i++) {
        if (user.profile.feedDotz[i].dot._id === smartRef.dot._id) {
          let updateOptions = {
            $pull: {"profile.feedDotz": {"dot._id": smartRef.dot._id}}
          };
          _userUpdate(userId, updateOptions);
        }
      }
    }
  },
  updateFeed(smartRef, userId){
    check(smartRef, Schema.dotSmartRef);
    check(userId, String);
    Meteor.call('checkAndRemoveDotzFromFeed',smartRef, userId, function(error, result){
      if (!error){
        let updateOptions = {
          $addToSet: {"profile.feedDotz": smartRef}
        };
        _userUpdate(userId, updateOptions)
      }
      else{
        console.log("ERROR" + error);
      }
    });
  }
});
