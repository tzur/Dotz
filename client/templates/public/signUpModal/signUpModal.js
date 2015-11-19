
Template.signUpModal.events({

  'click #exitBtn': function(){
    Modal.hide('signUpModal');
  },

  'click #switch-login-modal': function(){
    Modal.hide('signUpModal');
  }

});
