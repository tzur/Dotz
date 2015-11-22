/**
 * Created by avivhatzir on 22/11/2015.
 */


Meteor.publish('featuredUsersDoc', function() {
  return Tools.find({name: "featuredUsers"});
});

Meteor.publish('featuredUsers', function() {
  let usersArray = Tools.findOne({name: "featuredUsers"});
  usersArray
  return Meteor.users.find({_id: {$in: usersArray.featuredUsers}});
});
