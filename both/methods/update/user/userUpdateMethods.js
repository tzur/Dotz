Meteor.methods({
  updateUserProfileDotId(userId, dotId){
    console.log(userId, dotId);
    check(userId, String);
    check(dotId, String);
    let updateOptions = {
      $set: {"profile.profileDotId": dotId}
    };
    Meteor.call('_userUpdate',userId ,updateOptions);
  }
});
