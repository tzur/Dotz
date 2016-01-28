
Template.lastDotCardMobileDotShow.onCreated(function() {
});


Template.lastDotCardMobileDotShow.onRendered(function() {
});


Template.lastDotCardMobileDotShow.onDestroyed(function() {
});



Template.lastDotCardMobileDotShow.helpers( {


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



Template.lastDotCardMobileDotShow.events( {

  'click #_yesButton': function(){
    Session.set('userClickOnTheYesButton', true)
  },

  'click ._shareFacebookDialog': function(event){
    event.preventDefault();
    FB.ui({
      method: 'share',
      href: 'http://dotz.city/'+ this.dot.dotSlug
    }, function(response){});
  }

});
