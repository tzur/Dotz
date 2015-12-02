
Template.signUpModal.onCreated(function(){

  Session.set('joinUsDivOn', false);
  Session.set('footerIsWelcome', false);

});


Template.signUpModal.onDestroyed(function(){

  Session.set('spinnerOn', false);

});


Template.signUpModal.events({

  'click #exitBtn': function(){
    Modal.hide('signUpModal');
  },

  'click #_signupToContinue': function(){
    Modal.hide('signUpModal');
  }

  //'click #switch-login-modal': function(){
  //  Modal.hide('signUpModalj');
  //}

});
