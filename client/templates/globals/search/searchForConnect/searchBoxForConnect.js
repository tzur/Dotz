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
  isSearched: function(){
    return Session.get('searchInput');
  },
  dotzResult: function(){
    if(Session.get('searchInput')){
      Modules.client.searchByAlgolia("Dot", Session.get('searchInput'), function(error, content){
        if(content){
          Session.set('dotzResult', content);
        }
        else{
          console.log("Error, dotz search failed : " + error)
        }
      });
      if(Session.get('dotzResult')){
        return Session.get('dotzResult').hits;
      }
    }
  },

  listsResult: function(){
    if(Session.get('searchInput')){
      Modules.client.searchByAlgolia("List", Session.get('searchInput'), function(error, content){
        if(content){
          Session.set('listsResult', content);
        }
        else{
          console.log("Error, lists search failed : " + error)
        }
      });
      if(Session.get('listsResult')){
        return Session.get('listsResult').hits;
      }
    }
  },

  usersResult: function(){
    if(Session.get('searchInput')){
      Modules.client.searchByAlgolia("Dot", Session.get('searchInput'), function(error, content){
        if(content){
          Session.set('usersResult', content);
        }
        else{
          console.log("Error, users search failed : " + error)
        }
      });
      if(Session.get('usersResult')){
        return Session.get('usersResult').hits;
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

