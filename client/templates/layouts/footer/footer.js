
Template.footer.helpers({

  iAmAHotel: function() {
    if ( !Meteor.user() && Session.get('iAmAHotel') ) {
      return true;
    }
  }

});


Template.footer.events({

  'click #_signUpBtn': function(){
    Session.set('joinUsDivOn', false);
    Session.set('iAmAHotel', false); //TBD
  },

  'click #_loginBtn': function(){
    Session.set('joinUsDivOn', false);
    Session.set('iAmAHotel', false); //TBD
  },

  //TBD:
  'click #_signInExitBtn': function(){
    Session.set('joinUsDivOn', false);
    Session.set('iAmAHotel', false); //TBD
  }

});
