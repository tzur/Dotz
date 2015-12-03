
Template.footer.onDestroyed(function(){

  ////This sessions also destroyed by the event-listeners (below) + by the defaultTemplate:
  //Session.set('joinUsDivOn', false);
  //Session.set('iAmAHotel', false); //TBD
  //Session.set('footerIsWelcome', false);

});


Template.footer.helpers({

  iAmAHotel: function() {
    if ( !Meteor.userId() && Session.get('iAmAHotel') ) {
      return true;
    }
  },

  iAmFromTheHomePage: function() {
    if ( !Meteor.userId() && Session.get('iAmFromTheHomePage') ) {
      return true;
    }
  }

});


Template.footer.events({

  'click #_signUpBtn': function(){
    Session.set('joinUsDivOn', false);
    //Session.set('iAmAHotel', false); //TBD
    Session.set('iAmFromTheHomePage', false); //TBD
    Session.set('footerIsWelcome', false);
  },

  'click #_loginBtn': function(){
    Session.set('joinUsDivOn', false);
    //Session.set('iAmAHotel', false); //TBD
    Session.set('iAmFromTheHomePage', false); //TBD
    Session.set('footerIsWelcome', false);
  },

  //TBD:
  'click #_signInExitBtn': function(){
    Session.set('joinUsDivOn', false);
    //Session.set('iAmAHotel', false); //TBD
    Session.set('iAmFromTheHomePage', false); //TBD
    Session.set('footerIsWelcome', false);
  }

});
