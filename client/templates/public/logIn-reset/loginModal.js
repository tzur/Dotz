
Template.loginModal.events({


  'click #exitBtn': function(){
    Modal.hide('loginModal');
  },

  'click #switch-signup-modal': function(){
    Modal.hide('loginModal');
  }


});
