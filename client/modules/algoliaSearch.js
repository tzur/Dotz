//TODO: fix it systematic.. @otni

let searchByAlgolia = function(searchIndex, keyWord, callback, specificQuery) {
  //console.log(Geolocation.latLng());

  var client = AlgoliaSearch("WB8PQ4YYUT", "aa84f19d874aeb14d8bfa4d0d4b73b4d");

  //The old one

  //var client = AlgoliaSearch("OE5LQTXY83", "b90db825c6cf03b7de47e0b4f84a4aff");



  var index = client.initIndex(searchIndex);

// search 'hello' in the index
  index.search(keyWord, callback);
};

Modules.client.searchByAlgolia = searchByAlgolia;
