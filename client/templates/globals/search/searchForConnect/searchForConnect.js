/**
 * Created by avivhatzir on 16/11/2015.
 */
_searchCursor = {};

Template.searchBoxForConnect.onCreated(function(){
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

Template.searchBoxForConnect.onDestroyed(function(){
  _alreadyConnectedDotz = [];
});

Template.searchBoxForConnect.helpers({
  dotzIndex: () => DotzIndex,
  findDotz: function() {
    return (Session.get('searchInput'))
  },

  result: function(){
    return Modules.both.Dotz.searchCursorToDataObjectForConnect(_searchCursor.fetch(), _data.dotShow._id);

  }

});
Template.searchBoxForConnect.events({
  'keypress #searchInput': function(event, template){
    Session.set('searchInput', event.target.value);
    Session.set('_alreadyConnectedDotz', undefined)  }
});

