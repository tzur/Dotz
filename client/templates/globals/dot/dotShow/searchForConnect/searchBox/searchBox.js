
Template.searchBox.onCreated(function(){

});


Template.searchBox.onDestroyed(function(){

});

Template.searchBox.helpers({

});

Template.searchBox.events({

  'submit ._googleSearch': function(e){
    e.preventDefault();

    Modules.client.googleCustomSearch($('#_searchBoxInput').val(), function(error, result){
      if (error){
        Bert.alert("Try again, please.",'danger')
      } else {
        Session.set('googleResults', Modules.client.googleResultToCard(result));
      }
    });

    //TODO: we need to check this operation on mobile devices.. @otni
    let algoliaIndicesArray = ["links_DOTZ", "medias_DOTZ", "places_DOTZ", "events_DOTZ", "persons_DOTZ", "lists_DOTZ", "users_DOTZ"];
    algoliaIndicesArray.forEach(index => {
      Modules.client.searchByAlgolia(index, $('#_searchBoxInput').val() , function(error, content) {
        if(content){
          Session.set(index, content.hits);
        }
        else{
          console.log("Error, on index: " + index + " >>>> search failed : " + error)
        }
      });
    });
  },

  'click #searchSubmit':function(){
    $('#searchTabs').removeClass('hidden');
  }
});

