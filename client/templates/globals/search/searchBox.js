
//Template.searchBox.onCreated(function(){
//  var self = this;
//  Session.set('searchInput',undefined);
//  self.autorun(function(){
//      if (Session.get('searchInput')){
//        Modules.client.searchByAlgolia(Session.get('searchInput'));
//        if (Session.get('searchResult')){
//          Meteor.subscribe('dotzArrayToUserCursor', Session.get('searchResult').hits)
//        }
//      }
//  });
//});

Template.searchBox.onDestroyed(function(){
  Session.set('searchInput', undefined);
});
Template.searchBox.helpers({
  findDotz: function() {
    return (Session.get('searchInput'))
  },

  result: function(){
    if(Session.get('searchInput')){
      let resultArray = Modules.client.searchByAlgolia(Session.get('searchInput'), function(content, error){
        if(content){
          console.log(content.hits);
          return content.hits
        }
        else{
          console.log("Error: " + error)
        }
      });
    }
  }

});
Template.searchBox.events({
  'keypress #searchInput': function(event){
    Session.set('searchInput', event.target.value);
  }
});

