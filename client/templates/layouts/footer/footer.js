
Template.footer.helpers({

  iAmAHotel: function() {
    if ( !Meteor.user() && Session.get('iAmAHotel') ) {
      return true;
    }
  }

});


Template.footer.events({

  'click #_signInBtn': function(){
    if( !Meteor.user() ) {
      Modal.show('signUpModal');
      Session.set('joinUsDivOn', false);
      Session.set('iAmAHotel', false); //TBD
    }
  },

  //TBD:
  'click #_signInExitBtn': function(){
    Session.set('joinUsDivOn', false);
    Session.set('iAmAHotel', false); //TBD
  }

});
