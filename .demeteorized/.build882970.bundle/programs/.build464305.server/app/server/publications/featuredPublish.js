(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publications/featuredPublish.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 22/11/2015.                                //
 */                                                                    //
                                                                       //
Meteor.publish('featuredUsersDoc', function () {                       // 6
  return Tools.find({ name: "featuredUsers" });                        // 7
});                                                                    //
                                                                       //
Meteor.publish('featuredUsers', function () {                          // 10
  var usersArray = Tools.findOne({ name: "featuredUsers" });           // 11
  return Meteor.users.find({ _id: { $in: usersArray.featuredUsers } });
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=featuredPublish.js.map
