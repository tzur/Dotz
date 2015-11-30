
Template.default.onRendered(function() {
  if ( !Meteor.userId() && Session.get('joinUsDivOn') ) {
      $(window).scroll(function() {
          if (document.body.scrollTop > 400) {
            Session.set('footerIsWelcome', true)
          }
          else {
            Session.set('footerIsWelcome', false)
          }
      });
  }
});


Template.default.helpers({

  joinUsDivOn: function() {
    if ( Session.get('joinUsDivOn') ) {
      return Session.get('footerIsWelcome');
    }
  }

});
