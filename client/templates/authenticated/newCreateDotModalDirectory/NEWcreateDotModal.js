Template.createNewDot_Modal.onCreated(function() {

});


Template.createNewDot_Modal.onRendered(function(){
  if (!this.data.parentDotId){
    window.alert('MAN YOU MUST BRING PARENT DOT ID TO THIS MODAL BIATCH.')
  }
});


Template.createNewDot_Modal.onDestroyed(function(){

});


Template.createNewDot_Modal.helpers({

});


Template.createNewDot_Modal.events({

  'click #exitBtn': function(){
    Modal.hide('createNewDot_Modal');
  }

});
