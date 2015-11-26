Template.signUpModal.onDestroyed(function(){
  Session.set('spinnerOn', false);
});
Template.signUpModal.events({

  'click #exitBtn': function(){
    Modal.hide('signUpModal');
  }

  //'click #switch-login-modal': function(){
  //  Modal.hide('signUpModalj');
  //}

});
