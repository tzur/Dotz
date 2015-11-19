/**
 * Created by avivhatzir on 15/11/2015.
 */


Template.signUpModal.events({


  'click #exitBtn': function(){
    Modal.hide('signUpModal');
  },

  'click .login': function(){
    Modal.hide('signUpModal');
    Modal.show('loginModal');
  }


});
