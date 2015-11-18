/**
 * Created by avivhatzir on 15/11/2015.
 */


Template.loginModal.events({


  'click #exitBtn': function(){
    Modal.hide('createListModal');
  },

  'click .signup': function(){
    Modal.hide('createListModal');
  }


});
