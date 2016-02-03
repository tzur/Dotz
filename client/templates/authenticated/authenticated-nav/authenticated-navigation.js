
Template.authenticatedNavigation.events({

  'click ._createNewDot': function(){
    Modules.client.editAndCreateSessionsCleaner();
    Modal.show('createNewDot_Modal',{
      initialDataForFormFields: false,
      parentDotId: Meteor.user().profile.profileDotId
    });
  },

  'click ._createNewList': function(){
    Modules.client.editAndCreateSessionsCleaner();
    Modal.show('createNewList_modal',{
      initialDataForFormFields: false,
      parentDotId: Meteor.user().profile.profileDotId
    });
  },

  //'click .createDot': function(){
  //  Modal.show('createDotModal');
  //  analytics.track("Open Create Dot Modal", {
  //    title: "Open Create Dot Modal from Nav Bar"
  //  })
  //},
  //
  //'click .createList': function(){
  //  Modal.show('createListModal');
  //  analytics.track("Open Create List Modal", {
  //    title: "Open Create List Modal from Nav Bar"
  //  })
  //},

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
