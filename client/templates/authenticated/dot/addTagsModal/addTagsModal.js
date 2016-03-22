
Template.addTagsModal.onCreated(function(){

});


Template.addTagsModal.onRendered(function() {
  $("#bla").tagsinput('items');
  //console.log("parentDot.superTagsToFilterConnectedDotz >>>>> " + this.data.parentDot.superTagsToFilterConnectedDotz)
});


Template.addTagsModal.onDestroyed(function() {

});


Template.addTagsModal.helpers({

  superTagsArray_tagTheDot: function(){
    //console.log("docToedit>>>>>>>> " + Session.get('superTagsArray_tagTheDot') )
    let data = Session.get('superTagsArray_tagTheDot');
    if (data) {
      return data.superTagsArray;
    }
  }



});


Template.addTagsModal.events({

  'click #bla': (e) => {
    //Prevent form from submitting.
    e.preventDefault();
    //$("#bla").tagsinput('items');
    console.log("bla")
  },

  'click #_saveTags': (e) => {
    //Prevent form from submitting.
    e.preventDefault();
    Modules.client.tagTheDot();

    //console.log(" $(input).tagsinput('items') >>>> " + $("#bla").tagsinput('items'))
  }


});
