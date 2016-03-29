
Template.searchBox.onCreated(function(){

});


Template.searchBox.onDestroyed(function(){

});

Template.searchBox.helpers({

});

Template.searchBox.events({

  'submit ._googleSearch': function(e){
    e.preventDefault();
    let searchBoxInput = $('#_searchBoxInput').val();

    //Modules.client.googleCustomSearch(searchBoxInput, function(error, result){
    //  if (error){
    //    Bert.alert("Try again, please.",'danger')
    //  } else {
    //    Session.set('googleResults', Modules.client.googleResultToCard(result));
    //  }
    //});

    let algoliaIndex = Modules.client.selectDotzIndex_ForAlgoliaSearch();
    Modules.client.searchByAlgolia(algoliaIndex, searchBoxInput , function(error, content) {
      if(content){
        Session.set('index_DOTZ_Algolia', content.hits);
      } else {
        console.log("Error, on index: " + algoliaIndex + " >>>> search failed : " + error)
      }
    });

    Modules.client.searchByAlgolia("users_DOTZ", searchBoxInput , function(error, content) {
      if(content){
        Session.set('users_DOTZ', content.hits);
      } else {
        console.log("Error, on index: users_DOTZ, >>>> search failed : " + error)
      }
    });

    //TODO: we need to check this operation on mobile devices.. @otni

    //let algoliaIndicesArray = [algoliaIndex, "users_DOTZ"];
    //algoliaIndicesArray.forEach(index => {
    //  Modules.client.searchByAlgolia(index, $('#_searchBoxInput').val() , function(error, content) {
    //    if(content){
    //      Session.set(index, content.hits);
    //    }
    //    else{
    //      console.log("Error, on index: " + index + " >>>> search failed : " + error)
    //    }
    //  });
    //});
  },

  'click #searchSubmit':function(){
    $('#searchTabs').removeClass('hidden');
  }
});

