/**
 * Created by avivhatzir on 19/11/2015.
 */
Meteor.methods({
  checkIfUserAuthoriseForConnect(dotId){
    check(dotId, String);
    let dot = Dotz.findOne(dotId);
    return (dot.isOpen || dot.ownerUserId)
  }
});
