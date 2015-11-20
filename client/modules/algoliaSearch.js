/**
 * Created by avivhatzir on 17/11/2015.
 */

let searchByAlgolia = function(searchIndex, keyWord, callback, specificQuery) {
  console.log(Geolocation.latLng());
  var client = AlgoliaSearch("OE5LQTXY83", "b90db825c6cf03b7de47e0b4f84a4aff");

  var index = client.initIndex(searchIndex);

// search 'hello' in the index
  index.search(keyWord, callback);
};

Modules.client.searchByAlgolia = searchByAlgolia;
