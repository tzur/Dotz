_searchCursor = {};

Template.searchBox.onCreated(function(){
  var self = this;
  Session.set('searchInput',undefined);
  self.autorun(function(){
      if (Session.get('searchInput')){
        Modules.client.searchByAlgolia(Session.get('searchInput'));
        if (Session.get('searchResult')){
          Meteor.subscribe('dotzArrayToUserCursor', Session.get('searchResult').hits)
        }
      }
  });
});

Template.searchBox.onDestroyed(function(){
  Session.set('searchResult', undefined);
  Session.set('searchInput', event.target.value);
});
Template.searchBox.helpers({
  findDotz: function(){
    if (Session.get('searchInput')){
      return true;
    }
    else{
      return false;
    }
  },
  result: function(){
    if(Session.get('searchResult')){
      return Modules.both.Dotz.searchCursorToDataObject(Session.get('searchResult').hits);
    }
  }

});
Template.searchBox.events({
  'keypress #searchInput': function(event, template){
    Session.set('searchInput', event.target.value);
    Session.set('searchResult', undefined);

  }
});

