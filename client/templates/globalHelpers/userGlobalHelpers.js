




// Global Helpers - User: :

Template.registerHelper('USER_TYPE_IS', ( typeName ) => {
  let userType = Meteor.user().profile.userType;
  if (userType) {
    return ( typeName === userType[0] );
  }
});



