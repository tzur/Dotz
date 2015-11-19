(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/update/addOrEditObjectInAlgolia.js                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 17/11/2015.                                //
 */                                                                    //
Meteor.methods({                                                       // 4
  addOrEditObjectInAlgolia: function (docSlug, isUser) {               // 5
    check(docSlug, String);                                            // 6
    check(isUser, Boolean);                                            // 7
    if (process.env.NODE_ENV === "production") {                       // 8
      console.log("im in" + process.env.NODE_ENV);                     // 9
                                                                       //
      var array = undefined;                                           // 11
      var docIndex = undefined;                                        // 12
      check(docSlug, String);                                          // 13
      check(isUser, Boolean);                                          // 14
      var client = AlgoliaSearch("OE5LQTXY83", "bd14aab9d22ce75c25d286f9821b89c3");
                                                                       //
      if (isUser) {                                                    // 17
        console.log("@@@@@@@@@@@@@@@@@@@" + docSlug);                  // 18
        var currentDoc = Meteor.users.findOne({ "profile.userSlug": docSlug });
        currentDoc.objectID = currentDoc._id;                          // 20
        array = [{ "objectID": currentDoc.objectID, "username": currentDoc.username, "profile": currentDoc.profile, "_id": currentDoc._id }];
        docIndex = "Users";                                            // 22
      } else {                                                         //
                                                                       //
        var currentDoc = Dotz.findOne({ dotSlug: docSlug });           // 27
        currentDoc.objectID = currentDoc._id;                          // 28
        if (currentDoc.dotType === "Dot") {                            // 29
          docIndex = "Dotz";                                           // 30
        } else {                                                       //
          docIndex = "Lists";                                          // 33
        }                                                              //
        currentDoc.inDotz = currentDoc.inDotz.length + currentDoc.totalUpvotes.length;
        array = [currentDoc];                                          // 36
      }                                                                //
                                                                       //
      var index = client.initIndex(docIndex);                          // 41
                                                                       //
      // array contains the data you want to save in the index         //
                                                                       //
      index.saveObjects(array, function (error, content) {             // 45
        if (error) console.error('Error:', error);else console.log('Content:', content);
      });                                                              //
    } else {                                                           //
      console.log("im here" + process.env.NODE_ENV);                   // 51
      return false;                                                    // 52
    }                                                                  //
  },                                                                   //
                                                                       //
  deleteDotzFromAlgolia: function (dotId) {                            // 57
    check(dotId, String);                                              // 58
    var client = AlgoliaSearch("OE5LQTXY83", "bd14aab9d22ce75c25d286f9821b89c3");
    var objectIndex = undefined;                                       // 60
    var dot = undefined;                                               // 61
                                                                       //
    dot = Dotz.findOne(dotId);                                         // 63
    if (dot.dotType === 'List') {                                      // 64
      objectIndex = "Lists";                                           // 65
    } else {                                                           //
      objectIndex = "Dotz";                                            // 68
    }                                                                  //
                                                                       //
    var index = client.initIndex('Dotz');                              // 74
                                                                       //
    // array contains the data you want to save in the index           //
                                                                       //
    index.deleteObject(dotId, function (error, content) {              // 78
      if (error) console.error('Error:', error);else console.log('Content:', content);
    });                                                                //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=addOrEditObjectInAlgolia.js.map
