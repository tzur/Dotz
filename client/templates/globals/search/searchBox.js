
Template.searchBox.onCreated(function(){
  Session.set('searchResult', undefined)
});

Template.searchBox.onDestroyed(function(){
  Session.set('searchInput', undefined);
  Session.set('searchResult', undefined)
});

Template.searchBox.helpers({
  findDotz: function() {
    return (Session.get('searchInput'))
  },

  result: function(){
    if(Session.get('searchInput')){
      Modules.client.searchByAlgolia(Session.get('searchInput'));
      if(Session.get('searchResult')){
        return Session.get('searchResult').hits;
      }
    }
  }

});
Template.searchBox.events({
  'keypress #searchInput': function(event){
    Session.set('searchInput', event.target.value);
  }
});

