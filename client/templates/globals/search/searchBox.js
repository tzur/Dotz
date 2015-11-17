_searchCursor = {};

Template.searchBox.onCreated(function(){
  var self = this;
  Session.set('searchInput',undefined);
  self.autorun(function(){
      if (Session.get('searchInput')){
        _searchCursor = DotzIndex.search(Session.get('searchInput'));
        if (_searchCursor.count() > 0){
          Meteor.subscribe('dotzArrayToUserCursor', _searchCursor.fetch())
        }
      }
  });
});
Template.searchBox.helpers({
  dotzIndex: () => DotzIndex,
  findDotz: function(){
    if (Session.get('searchInput')){
      return true;
    }
    else{
      return false;
    }
  },
  result: function(){
    return Modules.both.Dotz.searchCursorToDataObject(_searchCursor.fetch());
  }

});
Template.searchBox.events({
  'keypress #searchInput': function(event, template){
    Session.set('searchInput', event.target.value);
  }
});

