
Template.footer.helpers({

  iAmAHotel: function() {
    if ( !Meteor.user() && Session.get('iAmAHotel') ) {
      return true;
    }
  }

});
