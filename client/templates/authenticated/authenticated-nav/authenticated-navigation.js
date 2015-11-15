/**
 * Created by avivhatzir on 07/11/2015.
 */
Template.authenticatedNavigation.events({
  'click .createDot': function(){
    Modal.show('createDotModal');
  },

  'click .createList': function(){
    Modal.show('createListModal');
  },

  'click .editUserAccount': function(){
    Modal.show('editUserAccountModal')
  }
});
