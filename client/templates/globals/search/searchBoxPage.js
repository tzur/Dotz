
Template.searchBox.onCreated(function(){
  Session.set('searchInput', undefined);
  Session.set('dotzResult', undefined);
  Session.set('usersResult', undefined);
  Session.set('listsResult', undefined);
});

Template.searchBox.onRendered(function(){
  var self = this;
  let currValue;
  self.autorun(function() {
    if (currValue = Session.get('searchBoxNavBar')) {
      $('#searchBoxInput').val(currValue).focus();
      Session.set('searchInput', currValue);
      Session.set('searchBoxNavBar', undefined)
    }
  });
});

Template.searchBox.onDestroyed(function(){
  Session.set('searchInput', undefined);
  Session.set('dotzResult', undefined);
  Session.set('usersResult', undefined);
  Session.set('listsResult', undefined);

});

Template.searchBox.helpers({
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
      return ( "(" + Session.get('dotzResult').hits.length + ")" );
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
      return ( "(" + Session.get('listsResult').hits.length+ ")");
    }
  },


  usersResult: function(){
    if(Session.get('searchInput')){
      Modules.client.searchByAlgolia("Users", Session.get('searchInput'), function(error, content){
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

  usersResultNumber: function(){
    if(Session.get('usersResult')){
      return Session.get('usersResult').hits.length;
    }
  }

});

Template.searchBox.events({
  'keyup #searchBoxInput': function(e){
    $('#searchBoxInput').bind("keypress", function(e) {
      if (e.keyCode == 13) {
        e.preventDefault();
        return false;
      }
    });
    Session.set('searchInput', event.target.value);
  }
});

