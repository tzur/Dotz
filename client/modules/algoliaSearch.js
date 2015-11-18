/**
 * Created by avivhatzir on 17/11/2015.
 */

let searchByAlgolia = function(keyWord) {
  var client = AlgoliaSearch("OE5LQTXY83", "b90db825c6cf03b7de47e0b4f84a4aff");

  var index = client.initIndex("Dot", "List");

// search 'hello' in the index
  index.search(keyWord, function (error, content) {
    if (error){
      console.error('Error:', error);
      Session.set('searchResult', undefined)


    }
    else {
      console.log('Content:', content);
      Session.set('searchResult', content)
    }


  });
};

Modules.client.searchByAlgolia = searchByAlgolia;
