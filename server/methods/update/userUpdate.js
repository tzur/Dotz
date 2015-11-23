let _userUpdate = (userId, updateOptions) => {
  try {
    check(updateOptions, Object);
    check(userId, String);
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
  },

  _addRecentDotzWhenFollowing(followingUserId, followedUserId){
    check(followingUserId, String);
    check(followedUserId, String);
    console.log("############################################# im in _addRecentDotzWhenFollowing");

    let followedUser = Meteor.users.findOne(followedUserId);
    let dotzIdArray = [];

    let listsCreatedByUser = followedUser.profile.createdByUserLists;
    let dotzCreatedByUser = followedUser.profile.createdByUserDotz;

    if(listsCreatedByUser.length > 1){
      dotzIdArray.push(listsCreatedByUser[listsCreatedByUser.length -2]);
      dotzIdArray.push(listsCreatedByUser[listsCreatedByUser.length - 1])
    }

    if(dotzCreatedByUser.length > 0){
      dotzIdArray.push(dotzCreatedByUser[dotzCreatedByUser.length -1]);
    }

    if(dotzIdArray){
      dotzIdArray.forEach(function(dotId){
        let dot;
        dot = Dotz.findOne(dotId);
        console.log(dot);
        if(dot){
          let smartRef = new Modules.both.Dotz.smartRef(dotId, dot.ownerUserId, followedUser.profile.profileDotId, CREATE_ACTION, followedUserId);
          if(smartRef) {
            Meteor.call('updateFeed', smartRef, followingUserId);
          }
        }

          //console.log(smartRef);
          //let updateOptions = {
          //  $addToSet: {"profile.feedDotz": smartRef}
          //};
          //_userUpdate(Meteor.userId(), updateOptions)

      });


    }
  }
});
