Template.editDot_Modal.onCreated(function() {

});


Template.editDot_Modal.onRendered(function(){
  //if (!this.data.parentDotId){
  //  //window.alert('MUST BRING PARENT DOT ID.');
  //  console.log("data.parentDotId needed..")
  //}
});


Template.editDot_Modal.onDestroyed(function(){

});


Template.editDot_Modal.helpers({

});


Template.editDot_Modal.events({

  'click #exitBtn': function(){
    Modal.hide('editDot_Modal');
  }

});
