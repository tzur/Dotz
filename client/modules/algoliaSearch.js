
//TODO TBD >>> this searchByAlgolia based on unknown package :( we need to upgrade to a better package (npm?) @otni
//The package: https://atmospherejs.com/acemtp/algolia
let searchByAlgolia = function(searchIndex, keyWord, callback, specificQuery) {

  var client = AlgoliaSearch("WB8PQ4YYUT", "aa84f19d874aeb14d8bfa4d0d4b73b4d");
  //The old one:
  //var client = AlgoliaSearch("OE5LQTXY83", "b90db825c6cf03b7de47e0b4f84a4aff");

  var index = client.initIndex(searchIndex);
  index.search(keyWord, callback);
};


let selectDotzIndex_ForAlgoliaSearch = function() {
  let index;
  let userCommunities = Meteor.user().profile.userCommunities;
  // "userCommunities": [
  //"Tel_Aviv"
  //]
  if (userCommunities && userCommunities[0] === 'Tel_Aviv') {
    index = "Tel_Aviv_DOTZ";
  } else {
    index = "Startup_IL_DOTZ";
  }
  return index;
};

Modules.client.selectDotzIndex_ForAlgoliaSearch = selectDotzIndex_ForAlgoliaSearch;
Modules.client.searchByAlgolia = searchByAlgolia;
