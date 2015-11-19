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
      Modules.client.searchByAlgolia("Dotz", Session.get('searchInput'), function(error, content){
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

  dotzResultNumber: function(){
    if(Session.get('dotzResult')){
      return ("(" + Session.get('dotzResult').hits.length + ")");
    }
  },

  listsResult: function(){
    if(Session.get('searchInput')){
      Modules.client.searchByAlgolia("Lists", Session.get('searchInput'), function(error, content){
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

  listsResultNumber: function(){
    if(Session.get('listsResult')){
      return ( "(" +Session.get('listsResult').hits.length + ")");
    }
  },

  isAlreadyConnected: function(){
    return Modules.client.Dotz.canBeConnectedToDot(Template.parentData().dot._id, this._id)
  }
});

Template.searchBoxForConnect.events({
  'keyup #searchBoxInput': function(event){
    $('#searchBoxInput').bind("keypress", function(e) {
      if (e.keyCode == 13) {
        e.preventDefault();
        return false;
      }
    });
    Session.set('searchInput', event.target.value);
  }
});

