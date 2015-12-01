
Template.landingSignup.onCreated( () => {
  DocHead.setTitle("Dotz");
  var metaInfo = {name: "Dotz | Connect The City. ", content: "Discover The Most Inspiring Dotz Around You."};
  DocHead.addMeta(metaInfo);

  //if ( Meteor.user() ) {
  //  FlowRouter.go('/' + Meteor.user().profile.userSlug);
  //}
});


Template.landingSignup.onDestroyed(function(){
  //This sessions also destroyed by the footerTemplate:
  Session.set('joinUsDivOn', false);
  Session.set('iAmAHotel', false); //TBD
  Session.set('footerIsWelcome', false);
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




