
Template.lastDotCardDesktopDotShow.onCreated(function() {
});


Template.lastDotCardDesktopDotShow.onRendered(function() {
});


Template.lastDotCardDesktopDotShow.onDestroyed(function() {
  //  Kill the Sessions here:
  //Session.set('userClickOnTheYesButton', false);
});



Template.lastDotCardDesktopDotShow.helpers( {

});



Template.lastDotCardDesktopDotShow.events( {

  'click #_yesButton': function(){
    Session.set('userClickOnTheYesButton', true);
    setTimeout(function() {
      $('html,body').animate({
          scrollTop: $(event.currentTarget).offset().top - 100
        },
        'slow');
    }, 1000);
  //The session has been killed on dotShow (onRendered...)
  }

});
