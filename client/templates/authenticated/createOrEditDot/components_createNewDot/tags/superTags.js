

Template.superTags.onRendered( () => {



});



Template.superTags.onDestroyed(function(){

});




Template.superTags.helpers({

  //editTags component:
  superTagsToFilterConnectedDotzToEdit: function(){
    console.log("docToedit>>>>>>>> " + Session.get('editAction_docToEdit').dot.superTagsToFilterConnectedDotz )
    return Session.get('editAction_docToEdit').dot.superTagsToFilterConnectedDotz;
  }

});


Template.superTags.events({




});

