
Template.default.onRendered(function() {

  let imgixSrc = 'https://www.imgix.com/libraries/imgix.js';
  DocHead.loadScript(imgixSrc, function() {
    console.log("imgix has been loaded");
    imgix.onready(function() {
      // Applied to images that contain the imgix-fluid class
      // Can take an options object to set more specific behaviors
      imgix.fluid();
    });
  });

  //var spinnerSrc = {rel: "stylesheet", type: "text/css", href: "http://css-spinners.com/css/spinner/dots.css"};
  //DocHead.addLink(spinnerSrc);

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

Template.default.onDestroyed(function(){

  //This sessions also destroyed by the footerTemplate:
  Session.set('joinUsDivOn', false);
  //Session.set('iAmAHotel', false); //TBD
  Session.set('footerIsWelcome', false);

});


Template.default.helpers({
  joinUsDivOn: function() {
    if ( Session.get('joinUsDivOn') ) {
      return Session.get('footerIsWelcome');
    }
  },
  shareFooterOn: function(){
    if (Session.get('shareListActive')){
      return true;
    }
  }

});
