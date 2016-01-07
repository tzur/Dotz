Meteor.methods({
  convertUserToFBGroupAdmin(userId){
    check(userId, String);
    Meteor.call('convertUsersToRoleOwner', ROLES.FB_GROUP_ADMIN, Roles.GLOBAL_GROUP, userId);
  }
});

