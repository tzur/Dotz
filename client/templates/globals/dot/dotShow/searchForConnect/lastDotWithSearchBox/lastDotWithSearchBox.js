
Template.lastDotWithSearchBox.onCreated(function(){

});

Template.lastDotWithSearchBox.onDestroyed(function(){

});

Template.lastDotWithSearchBox.helpers({

});

Template.lastDotWithSearchBox.events({

  'click ._createNewDotHere':function(){
    Modules.client.editAndCreateSessionsCleaner();
    Session.set('parentDot', this.dot._id);
    let parentDotId = this.dot._id;
    Modal.show('createNewDot_Modal',{
      parentDotId: parentDotId
    });
  },

  'click ._createNewListHere':function(){
    Modules.client.editAndCreateSessionsCleaner();
    Session.set('parentDot', this.dot._id);
    let parentDotId = this.dot._id;
    Modal.show('createNewList_modal',{
      parentDotId: parentDotId
    });
  }

});

