Template.header.helpers({
  brandLink() {
    let login = FlowRouter.path( 'login' ),
        index = FlowRouter.path( 'index' );
    return !Meteor.loggingIn() && !Meteor.userId() ? login : index;
  },

  iAmHere: function() {
    return Session.get('whereIAm');
  },

  hereWithImg: function() {
    return Session.get('hereWithImg');
  }

});

Template.header.events({
  'click .logout' () {
    Meteor.logout( ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        Bert.alert( 'Logged out!', 'success' );
      }
    });
  }
});
