

Template.editDot_form.onRendered( () => {

  Modules.client.editDot({
    form: "#editDot",
    template: Template.instance()
  });

  _clearSessions();

  let dotToEdit = Session.get('editAction_docToEdit');
  let parentDotId, personalDescription;
  if (dotToEdit.smartRef) {
      parentDotId = dotToEdit.smartRef.parentDotId,
      personalDescription = dotToEdit.smartRef.personalDescription
  }
  let fields = {
    _id: dotToEdit.dot._id,
    toParentDotId: parentDotId,
    personalDescription: personalDescription,
    //
    title: dotToEdit.dot.title,
    description: dotToEdit.dot.bodyText,
    coverImageUrl: dotToEdit.dot.coverImageUrl,
    linkUrl: dotToEdit.dot.linkUrl
  };
  Modules.client.createDotLoading(); //Start to loading.
  Modules.client.updateCreateDotFields(fields);

  //prevent send by enter (exclude the textarea):
  Modules.client.preventEnterByElementId('#editDot');


});



Template.editDot_form.onDestroyed(function(){
  _clearSessions();
  Session.set('editAction_dot', undefined);
  Session.set('editAction_docToEdit', undefined);
  Session.set('dotCoverImg', undefined);

  Session.set("showMapHasClicked", undefined);
});




Template.editDot_form.helpers({

  publicSelectedClass: function() {
    if (Session.get('publicDot')) {
      console.log("public........")
      return "selectedPrivacyBtn";}
  },

  closedSelectedClass: function() {
    if (Session.get('closedDot')) {
      console.log("closed........")
      return "selectedPrivacyBtn";}
  },

  secretSelectedClass: function() {
    if (Session.get('secretDot')) {return "selectedPrivacyBtn";}
  },

  editAction_list: function() {
    if (Session.get('editAction_list')) {return true;}
  },

  showMapHasClicked: function(){
    return Session.get('showMapHasClicked');
  }

});


Template.editDot_form.events({

  'submit form': (e) => {
    //Prevent form from submitting.
    e.preventDefault()
  },

  'click #_publicList': function() {
    _clearSessions();
    Session.set('publicDot', "Public");
  },

  'click #_closedList': function() {
    _clearSessions();
    Session.set('closedDot', "Closed");
  },

  'click #_secretList': function() {
    _clearSessions();
    Session.set('secretDot', "Secret");
  },

  'click ._showMap': function() {
    Session.set("showMapHasClicked", true);
  },

  'click #createNewListButton': function(event){
    // //event.preventDefault();

    //Modules.client.createNewList({
    //  form: "#createNewList",
    //  template: Template.instance()
    //});
  }

  //'submit #createNewListButton': function(event){
  //   event.preventDefault();
  //}


  //'submit #createNewListButton': function(event){
  //  event.preventDefault();
  //  //let self = this;
  //  //Modules.client.handleCreateSubmit(self.parentDotId, Session.get('dotCoverImg'), Session.get('locationObject'))
  //
  //  //TODO: add the embedly session? @otni
  //  Modules.client.createNewList(Session.get('dotCoverImg'), Session.get('locationObject'));
  //}

});

//private function:
function _clearSessions(){
  Session.set('publicDot', undefined);
  Session.set('closedDot', undefined);
  Session.set('secretDot', undefined);
}
