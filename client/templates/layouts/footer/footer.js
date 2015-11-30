
Template.footer.onDestroyed(function(){

  //This sessions also destroyed by the event-listeners (below):
  Session.set('joinUsDivOn', false);
  Session.set('iAmAHotel', false); //TBD
  Session.set('footerIsWelcome', false);

});


Template.footer.helpers({

  iAmAHotel: function() {
    if ( !Meteor.userId() && Session.get('iAmAHotel') ) {
      return true;
    }
  }

});


Template.footer.events({

  'click #_signUpBtn': function(){
    Session.set('joinUsDivOn', false);
    Session.set('iAmAHotel', false); //TBD
    Session.set('footerIsWelcome', false);
  },

  'click #_loginBtn': function(){
    Session.set('joinUsDivOn', false);
    Session.set('iAmAHotel', false); //TBD
    Session.set('footerIsWelcome', false);
  },

  //TBD:
  'click #_signInExitBtn': function(){
    Session.set('joinUsDivOn', false);
    Session.set('iAmAHotel', false); //TBD
    Session.set('footerIsWelcome', false);
  }

});
