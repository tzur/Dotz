
Template.landingSignup.onCreated( () => {


  //if ( Meteor.user() ) {
  //  FlowRouter.go('/' + Meteor.user().profile.userSlug);
  //}
});


Template.landingSignup.onDestroyed(function(){
  //This sessions also destroyed by the footerTemplate:
  Session.set('joinUsDivOn', false);
  //Session.set('iAmAHotel', false); //TBD
  Session.set('footerIsWelcome', false);
});


Template.landingSignup.helpers({

  landingTitle: function() {
    if ( Session.get('iAmAHotel') ) {
      return ("MAKE YOUR GUESTS HAPPIER WITH DOTZ");
    } else {
      return ("Dotz. Connect The City");
    }
  },

  landingSubTitle: function() {
    if ( Session.get('iAmAHotel') ) {
      return Spacebars.SafeString(
        "Connect the city Events, Places and Things-To-Do in custom-made lists." + '</h5><h5>' + "Share it with your guests.");
    } else {
      return ("Connect the city Events, Places and Things-To-Do in custom-made lists.");
    }
  }

});


Template.landingSignup.events({

  //TBD:
  //'click #_exploreBtn': function(){
  //    if( !Meteor.userId() ) {
  //      Session.set('joinUsDivOn', true);
  //      Session.set('iAmAHotel', true);
  //    }
  //}

});




