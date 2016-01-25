Template.header.onRendered(function(){

  Tracker.autorun(function() {

    FlowRouter.watchPathChange();

    Tracker.autorun(function (c) {
        //FlowRouter.watchPathChange(); //TODO - is it needed?
        let slugTrackerArray = Session.get('slugTrackerArray');
        let currentSlug = FlowRouter.current().path.slice(1);
        if ( slugTrackerArray && (currentSlug != Meteor.user().profile.userSlug) ) {
          slugTrackerArray.push(currentSlug);
          Session.set('slugTrackerArray', slugTrackerArray);
        } else {
          let slugTrackerArray = [];
          slugTrackerArray.push(currentSlug);
          Session.set('slugTrackerArray', slugTrackerArray);
        }
        c.stop();
    });

  });
});

Template.header.helpers({

  pastPageSlugTracker: function() {
    let slugTrackerArray = Session.get('slugTrackerArray');
    if ( slugTrackerArray ) {
      //console.log("is true? " + slugTrackerArray.length > 1);
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
    //console.log("CLICK BACK");
    let slugTrackerArray = Session.get('slugTrackerArray');
    if ( slugTrackerArray && slugTrackerArray.length > 1 ) {
        let arraylength = slugTrackerArray.length;
        let slugToBack = slugTrackerArray[arraylength-2];
        slugTrackerArray.splice(arraylength-1, 1);
        slugTrackerArray.splice(arraylength-2, 1);
        //let lastItem = anArray.pop(); //TBD
        Session.set('slugTrackerArray', slugTrackerArray);
        FlowRouter.go('/' + slugToBack);
    }
  }

});
