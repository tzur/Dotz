Template.loginModal.onDestroyed(function(){
  Session.set('spinnerOn', false);
});
Template.loginModal.events({


  'click #exitBtn': function(){
    Modal.hide('loginModal');
  }


});
