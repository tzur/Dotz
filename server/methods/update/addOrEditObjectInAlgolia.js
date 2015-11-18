/**
 * Created by avivhatzir on 17/11/2015.
 */
Meteor.methods({
  addOrEditObjectInAlgolia(dotOrUserSlug, index){
    check(dotSlug, String);
    check(index, String);
    var client = AlgoliaSearch("OE5LQTXY83", "bd14aab9d22ce75c25d286f9821b89c3");

    if (index === "Users"){
      let currentDoc = Dotz.findOne({dotSlug: dotOrUserSlug});
      currentDoc.objectID = currentDoc._id;
    }
    else{
      let currentDoc = Meteor.users.find({dotSlug: dotOrUserSlug});
      currentDoc.objectID = currentDoc._id;
    }



    var index = client.initIndex(index);

// array contains the data you want to save in the index
    let array = [currentDoc];
    index.saveObjects(array, function (error, content) {
      if (error) console.error('Error:', error);
      else console.log('Content:', content);
    });
  }
});