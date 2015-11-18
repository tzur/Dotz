/**
 * Created by avivhatzir on 16/11/2015.
 */

Template.searchBoxForConnect.onCreated(function(){
  Session.set('searchInput',undefined);
  Session.set('searchResult',undefined);

});

Template.searchBoxForConnect.onDestroyed(function(){
  Session.set('searchInput',undefined);
  Session.set('searchResult',undefined);
});

Template.searchBoxForConnect.helpers({
  result: function(){
    if(Session.get('searchInput')){
      Modules.client.searchByAlgolia(Session.get('searchInput'));
      if(Session.get('searchResult')){
        return Session.get('searchResult').hits;
      }
    }
  },

  isAlreadyConnected: function(){
    return Modules.client.Dotz.isConnectedToDot(_data.dotShow._id, this._id)
  }
});

Template.searchBoxForConnect.events({
  'keypress #searchInput': function(event){
    Session.set('searchInput', event.target.value);
  }
});

