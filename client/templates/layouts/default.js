
Template.default.helpers({

  joinUsDivOn: function() {
    if ( !Meteor.user() && Session.get('joinUsDivOn') ) {
      return true;
    }
  }

});
