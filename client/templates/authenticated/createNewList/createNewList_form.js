

Template.createNewList_form.onRendered( () => {

  Modules.client.createNewList({
    form: "#createNewList",
    template: Template.instance()
  });

  Tracker.autorun(function () {

    console.log("this.data " + this.data);

  });

  if (this.data && this.data.initialDataForFormFields){
    Modules.client.createDotLoading(); //Start to loading.
    Modules.client.updateCreateDotFields(
      this.data.initialDataForFormFields.title,
      this.data.initialDataForFormFields.description,
      this.data.initialDataForFormFields.img);
  } else {
    Session.set('publicList', "Public");
  }

  Modules.client.preventEnterByElementId('#createNewListButton');

});



Template.createNewList_form.onDestroyed(function(){
  _clearSessions();
  Session.set('editAction_list', undefined);
});




Template.createNewList_form.helpers({

  publicSelectedClass: function() {

    if ( Session.get('publicList') ) {
      return "selectedPrivacyBtn";
    }

  },

  closedSelectedClass: function() {
    if ( Session.get('closedList') ) {
      return "selectedPrivacyBtn";
    }
  },

  secretSelectedClass: function() {
    if ( Session.get('secretList') ) {
      return "selectedPrivacyBtn";
    }
  }



});

Template.createNewList_form.events({


  'submit form': (e) => {
  //Prevent form from submitting.
  e.preventDefault()
  },


  'click #_publicList': function() {
    _clearSessions();
    Session.set('publicList', "Public");
  },

  'click #_closedList': function() {
    _clearSessions();
    Session.set('closedList', "Closed");
  },

  'click #_secretList': function() {
    _clearSessions();
    Session.set('secretList', "Secret");
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
  Session.set('publicList', undefined);
  Session.set('closedList', undefined);
  Session.set('secretList', undefined);
}
