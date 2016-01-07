Meteor.methods({
  convertUserToFBGroupAdmin(userId){
    Meteor.call('convertUsersToRoleOwner', 'FBGroupAdmin', Roles.GLOBAL_GROUP, userId);
  }
});

