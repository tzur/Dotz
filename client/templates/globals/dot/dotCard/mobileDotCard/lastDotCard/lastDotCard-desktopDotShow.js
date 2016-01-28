
Template.lastDotCardDesktopDotShow.onCreated(function() {
});


Template.lastDotCardDesktopDotShow.onRendered(function() {
});


Template.lastDotCardDesktopDotShow.onDestroyed(function() {
  //  Kill the Sessions here:
  //Session.set('userClickOnTheYesButton', false);
});



Template.lastDotCardDesktopDotShow.helpers( {

  shortestTitle: function() {
    if (this.dot){
      return s.prune(this.dot.title, 35);
    }
  },

  shortenTitle: function() {
    if (this.dot){
      return s.prune(this.dot.title, 50);
    }
  }

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
  },

  'click ._shareFacebookDialog': function(event){
    event.preventDefault();
    FB.ui({
      method: 'share',
      href: 'http://dotz.city/'+ this.dot.dotSlug
    }, function(response){});
  }

});
