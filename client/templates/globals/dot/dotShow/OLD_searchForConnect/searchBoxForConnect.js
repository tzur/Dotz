//
//Template.searchBoxForConnect.onCreated(function(){
//  //Session.set('googleResults',[{
//  //  googleImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EF2spkVH7zbM97BU_lIf8Tc2YsNk_I7mXT2PduNznOmVFNjYp2Der-E6',
//  //  googleTitle: 'example',
//  //  googleWebsiteName: 'www.example.com',
//  //  googleDescription:"Example description",
//  //  googleLinkUrl: "example.com/blablabla"
//  //}]);
//});
//
//
//Template.searchBoxForConnect.onDestroyed(function(){
//  //Session.set('googleResults', undefined);
//  //Session.set('dotzResult', undefined);
//  //Session.set('listResult', undefined);
//
//  let algoliaIndicesArray = ["googleResults", "links_DOTZ", "media_DOTZ", "places_DOTZ", "events_DOTZ", "persons_DOTZ", "lists_DOTZ"];
//  algoliaIndicesArray.forEach(index => {
//    Session.set(index, undefined);
//  });
//
//});
//
//Template.searchBoxForConnect.helpers({
//
//  //userCanAutoGenerateDotz: function(){
//  //  let data = Template.parentData();
//  //  if ( data.dot.ownerUserId === Meteor.userId() && data.dot.quickStartListId && data.dot.connectedDotzArray.length === 0 ) {
//  //    return "colCenter";
//  //  }
//  //},
//  googleResults: function(){
//    return Session.get('googleResults');
//  },
//
//  getDataForGoogleCard: function(){
//    return {
//      parentDotId:Template.parentData().dot._id,
//      googleDot: this
//    };
//  },
//
//  links_DOTZ_Algolia: function(){
//    return Session.get('links_DOTZ');
//  },
//
//  media_DOTZ_Algolia: function(){
//    return Session.get('media_DOTZ');
//  },
//
//  places_DOTZ_Algolia: function(){
//    return Session.get('places_DOTZ');
//  },
//
//  events_DOTZ_Algolia: function(){
//    return Session.get('events_DOTZ');
//  },
//
//  persons_DOTZ_Algolia: function(){
//    return Session.get('persons_DOTZ');
//  },
//
//  lists_DOTZ_Algolia: function(){
//    return Session.get('lists_DOTZ');
//  },
//
//  //lists_DOTZ_Algolia: function(){
//  //  return Session.get('lists_DOTZ');
//  //},
//  //
//  //dotzResult_Algolia: function(){
//  //  return Session.get('dotzResult');
//  //},
//  //
//  //dotzResultNumber_Algolia: function(){
//  //  if(Session.get('dotzResult')){
//  //    return ("(" + Session.get('dotzResult').length + ")");
//  //  } else {
//  //    return ("(0)");
//  //  }
//  //},
//  //
//  //listResult_Algolia: function(){
//  //  return Session.get('listResult');
//  //},
//  //
//  //listResultNumber_Algolia: function(){
//  //  if(Session.get('listResult')){
//  //    return ("(" + Session.get('listResult').length + ")");
//  //  } else {
//  //    return ("(0)");
//  //  }
//  //},
//
//  isNotAlreadyConnected: function(){
//    return Modules.client.Dotz.canBeConnectedToDot(Template.parentData().dot._id, this._id)
//  },
//
//  dataForDotCard: function() {
//    let data = {
//      algolisSearchResult: this,
//      dot: {
//        _id: this._id,
//        ownerUserId: this.ownerUserId,
//        title: this.title
//      },
//      connection: {
//        connectedByUserId: this.ownerUserId,
//        likes: "none"
//      },
//      //This helps us to determine if to show the plus/connect to dotParent button:
//      inDotParentSearchResults: true
//    };
//    return data;
//  }
//
//});
//
//
//Template.searchBoxForConnect.events({
//  'submit ._googleSearch': function(e){
//    e.preventDefault();
//
//    Modules.client.googleCustomSearch($('#_searchBoxInput').val(), function(error, result){
//      if (error){
//        Bert.alert("Try again, please.",'danger')
//      } else {
//        Session.set('googleResults', Modules.client.googleResultToCard(result));
//      }
//    });
//
//    //TODO: we need to check this operation on mobile devices.. @otni
//    let algoliaIndicesArray = ["links_DOTZ", "media_DOTZ", "places_DOTZ", "events_DOTZ", "persons_DOTZ", "lists_DOTZ"];
//    algoliaIndicesArray.forEach(index => {
//      Modules.client.searchByAlgolia(index, $('#_searchBoxInput').val() , function(error, content) {
//        if(content){
//          Session.set(index, content.hits);
//        }
//        else{
//          console.log("Error, on index: " + index + " >>>> search failed : " + error)
//        }
//      });
//    });
//  },
//
//  ////search Dotz on Algolia:
//  //'click ._searchDotzSubTypesOnAlgolia_DOTZ': function(e){
//  //  e.preventDefault();
//  //
//  //  let algoliaIndex = this.dot.dotSubType.toLowerCase() + "s_DOTZ";
//  //  console.log("algoliaIndex is >> " + algoliaIndex);
//  //  Modules.client.searchByAlgolia(algoliaIndex, $('#_searchBoxInput').val() , function(error, content){
//  //    if(content){
//  //      Session.set(algoliaIndex, content.hits);
//  //    }
//  //    else{
//  //      console.log("Error, dotz_DOTZ search failed : " + error)
//  //    }
//  //  });
//  //},
//  //
//  ////search Dotz on Algolia:
//  //'click ._searchListsOnAlgolia_DOTZ': function(e){
//  //  e.preventDefault();
//  //
//  //  Modules.client.searchByAlgolia("lists_DOTZ", $('#_searchBoxInput').val() , function(error, content){
//  //    if(content){
//  //      Session.set("lists_DOTZ", content.hits);
//  //    }
//  //    else{
//  //      console.log("Error, lists_DOTZ search failed : " + error)
//  //    }
//  //  });
//  //},
//
//  'click ._createNewDotHere':function(){
//    Modules.client.editAndCreateSessionsCleaner();
//    Session.set('parentDot', this.dot._id);
//    let parentDotId = this.dot._id;
//    Modal.show('createNewDot_Modal',{
//      parentDotId: parentDotId
//    });
//  },
//
//  'click ._createNewListHere':function(){
//    Modules.client.editAndCreateSessionsCleaner();
//    Session.set('parentDot', this.dot._id);
//    let parentDotId = this.dot._id;
//    Modal.show('createNewList_modal',{
//      parentDotId: parentDotId
//    });
//  },
//
//  'click #searchSubmit':function(){
//    $('#searchTabs').removeClass('hidden');
//  }
//});
//