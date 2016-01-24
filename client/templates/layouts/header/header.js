Template.header.onRendered(function(){

  Tracker.autorun(function() {
    FlowRouter.watchPathChange();
    //console.log("header    ----   onRenderedddddddddddddd autorun 0000000");

    Tracker.autorun(function (c) {
          FlowRouter.watchPathChange(); //TODO - is it needed?
          //console.log("header    ----    autorun 11111111");

          let slugTrackerArray = Session.get('slugTrackerArray');
      //slugTrackerArray.push( Session.get('slugTrackerArray') );
          let currentSlug = FlowRouter.current().path.slice(1);

          if ( slugTrackerArray && (currentSlug != Meteor.user().profile.userSlug) ) {
            //console.log("if 111111111  slugTrackerArray " + slugTrackerArray);
            slugTrackerArray.push(currentSlug);
            Session.set('slugTrackerArray', slugTrackerArray);

            //let lastIndex = slugTrackerArray.length-1;
            //console.log("BACK to SLUG " + slugTrackerArray[lastIndex]);
          } else {
            console.log("else 22222222  slugTrackerArray " + slugTrackerArray);
            let slugTrackerArray = [];
            slugTrackerArray.push(currentSlug);
            Session.set('slugTrackerArray', slugTrackerArray);
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
    let slugTrackerArray = Session.get('slugTrackerArray');
    if ( slugTrackerArray ) {
      return (slugTrackerArray.length > 1);
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
  },

  'click #_lastPathBtn' () {
    console.log("CLICK BACK");
    let slugTrackerArray = Session.get('slugTrackerArray');
    if ( slugTrackerArray && slugTrackerArray.length > 1 ) {
        let arraylength = slugTrackerArray.length;
        console.log("slugTrackerArray 111111111111 is "  + slugTrackerArray);

        let slugToBack = slugTrackerArray[arraylength-2];

        console.log("slugTrackerArray.length BEFORE is"  + slugTrackerArray.length);

        slugTrackerArray.splice(arraylength-1, 1);
        slugTrackerArray.splice(arraylength-2, 1);

      //let lastItem = anArray.pop();



      console.log("slugTrackerArray.length AFTER is"  + slugTrackerArray.length);

        console.log("slugTrackerArray 222222222 is"  + slugTrackerArray);


        Session.set('slugTrackerArray', slugTrackerArray);

        FlowRouter.go('/' + slugToBack);
    }
  }

});
