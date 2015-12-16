/**
 * Created by avivhatzir on 07/11/2015.
 */
Template.authenticatedNavigation.events({
  'click .createDot': function(){
    Modal.show('createDotModal');
    analytics.track("Open Create Dot Modal", {
      title: "Open Create Dot Modal from Nav Bar"
    })
  },

  'click .createList': function(){
    Modal.show('createListModal');
    analytics.track("Open Create List Modal", {
      title: "Open Create List Modal from Nav Bar"
    })
  },

  'click .editUserAccount': function(){
    Modal.show('editUserAccountModal');
    analytics.track("Open Edit User Account", {
      title: "Open Edit user account from Nav Bar"
    })
  },

  'click #_craeteDotDropDown': function(){
  analytics.track("Clicked On Create Dot DropDown", {
    title: "Clicked On Create Dot DropDown from Nav Bar"
  })
}
});
