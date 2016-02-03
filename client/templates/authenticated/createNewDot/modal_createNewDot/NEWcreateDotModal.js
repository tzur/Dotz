Template.createNewDot_Modal.onCreated(function() {

});


Template.createNewDot_Modal.onRendered(function(){
  if (!this.data.parentDotId){
    //window.alert('MUST BRING PARENT DOT ID.');
    console.log("data.parentDotId needed..")
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
