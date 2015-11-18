/**
 * Created by avivhatzir on 17/11/2015.
 */

let searchByAlgolia = function(keyWord, callback) {
  var client = AlgoliaSearch("OE5LQTXY83", "b90db825c6cf03b7de47e0b4f84a4aff");

  var index = client.initIndex("Dot");

// search 'hello' in the index
  index.search(keyWord, function (error, content) {
    if (error){
      console.error('Error:', error);
      callback(error);
    }
    else {
      console.log('Content:', content);
      callback(content);
    }


  });
};

Modules.client.searchByAlgolia = searchByAlgolia;
