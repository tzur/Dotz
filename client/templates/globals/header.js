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
    Bert.alert( 'Logging out...', 'success' );
    Meteor.logout( ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        setTimeout(function(){
          window.location.reload();
        },700);
        Bert.alert( 'Logged out!', 'success' );
      }
    });
  },
  'keypress #searchBoxNavBar': function(e){
    if (e.keyCode == 13){
      e.preventDefault();
      Session.set('searchBoxNavBar', e.currentTarget.value);
      FlowRouter.go('/main/search');
      e.currentTarget.value = '';
    }
  }


});
