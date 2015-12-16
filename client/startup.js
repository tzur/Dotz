
//Meteor.startup(function() {
//  Modules.client.startup();
//  GoogleMaps.load({key: "AIzaSyC35BXkB-3zxK89xynEq038-mE6Ts9Dg-0", libraries: 'places', language:'en'});
//});

  Meteor.startup(function () {
    Meteor.call('isAppInProduction', function(error, result) {
      if (result) {
        Tracker.autorun(function (c) {
          // waiting for user subscription to load
          //if (! Router.current() || ! Router.current().ready())
          //  return;
          analytics.load(result);

          var user = Meteor.user();
          if (!user)
            return;

          analytics.identify(user._id, {
            name: user.profile.name,
            email: user.emails[0].address
          });

          c.stop();
        });
      }
    });
  });

