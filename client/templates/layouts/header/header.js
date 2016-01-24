Template.header.onRendered(function(){

  Tracker.autorun(function() {
    FlowRouter.watchPathChange();
    //console.log("header    ----   onRenderedddddddddddddd autorun 0000000");


        Tracker.autorun(function (c) {
          FlowRouter.watchPathChange();
          //console.log("autorun 11111111111")
          //if (! Session.equals("shouldAlert", true))
          //  return;

          let currentPageSlugTracker =  Session.get('currentPageSlugTracker');
          if ( currentPageSlugTracker ) {
            Session.set( 'pastPageSlugTracker', currentPageSlugTracker );
            console.log("GO BACK TO " + Session.get('pastPageSlugTracker'));
            Session.set( 'currentPageSlugTracker', FlowRouter.current().path.slice(1) );
            //console.log("if 111111111111 " + Session.get('currentPageSlugTracker'));
          } else {
            //FlowRouter.watchPathChange();
            Session.set( 'currentPageSlugTracker', FlowRouter.current().path.slice(1) );
            //console.log("if 222222222222 " + Session.get('currentPageSlugTracker'));
            //currentPageSlugTracker = FlowRouter.current().path.slice(1);
          }

          c.stop();
          //alert("Oh no!");
        });


  });


/*
 //Simple BACKup:
 Tracker.autorun(function() {
 FlowRouter.watchPathChange();
 //console.log("header    ----   onRenderedddddddddddddd autorun 0000000");


 Tracker.autorun(function (c) {
 FlowRouter.watchPathChange();
 //console.log("autorun 11111111111")
 //if (! Session.equals("shouldAlert", true))
 //  return;

 let currentPageSlugTracker =  Session.get('currentPageSlugTracker');
 if ( currentPageSlugTracker ) {
 Session.set( 'pastPageSlugTracker', currentPageSlugTracker );
 console.log("GO BACK TO " + Session.get('pastPageSlugTracker'));
 Session.set( 'currentPageSlugTracker', FlowRouter.current().path.slice(1) );
 //console.log("if 111111111111 " + Session.get('currentPageSlugTracker'));
 } else {
 //FlowRouter.watchPathChange();
 Session.set( 'currentPageSlugTracker', FlowRouter.current().path.slice(1) );
 //console.log("if 222222222222 " + Session.get('currentPageSlugTracker'));
 //currentPageSlugTracker = FlowRouter.current().path.slice(1);
 }

 c.stop();
 //alert("Oh no!");
 });


 });
 */

  //let currentPageSlugTracker =  Session.get('currentPageSlugTracker');
  //if ( currentPageSlugTracker ) {
  //  Session.set( 'pastPageSlugTracker', currentPageSlugTracker );
  //} else {
  //  //FlowRouter.watchPathChange();
  //  Session.set( 'currentPageSlugTracker', FlowRouter.current().path.slice(1) );
  //  //currentPageSlugTracker = FlowRouter.current().path.slice(1);
  //}


});

Template.header.helpers({

  pastPageSlugTracker: function() {

    console.log("slugToBack 888888888888888")


    let pastPageSlugTracker = Session.get('pastPageSlugTracker');

    if ( pastPageSlugTracker ) {

      return pastPageSlugTracker;
    }
  },

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
