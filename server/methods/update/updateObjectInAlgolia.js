/**
 * Created by avivhatzir on 17/11/2015.
 */
Meteor.methods({
  addOrEditObjectInAlgolia(dotSlug){
    check(dotSlug, String);
    let currentDoc = Dotz.findOne({dotSlug: dotSlug});
    currentDoc.objectID = currentDoc._id;
    var client = AlgoliaSearch("OE5LQTXY83", "bd14aab9d22ce75c25d286f9821b89c3");

    var index = client.initIndex(currentDoc.dotType);

// array contains the data you want to save in the index
    let array = [currentDoc];
    index.saveObjects(array, function (error, content) {
      if (error) console.error('Error:', error);
      else console.log('Content:', content);
    });
  }
});
