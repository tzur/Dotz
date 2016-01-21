Template.theQ.onCreated(function(){

});


Template.theQ.onDestroyed(function(){

});


Template.theQ.helpers({

  dotDOTtheQ: function() {
    console.log("Template.parentData().dot.title " + Template.parentData());
    if (Template.parentData().dot) {
      let tempArray = Template.parentData().dot.connectedDotzArray;
      console.log("Template.parentData().dot._ID " + Template.parentData().dot._id);
      //let tempArray = [1,2,3];
      return tempArray
    }
  },

  thisDotIsRelevantForTheQ: function() {
    return true
  }

});


Template.theQ.events({

});
