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
        var currentDoc = Meteor.users.findOne({ "profile.userSlug": docSlug });
        currentDoc.objectID = currentDoc._id;                          // 19
                                                                       //
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
        if (currentDoc.location && currentDoc.location.latLng) {       // 36
          currentDoc._geoloc = { "lat": currentDoc.location.latLng[0], "lng": currentDoc.location.latLng[1] };
        }                                                              //
        array = [currentDoc];                                          // 39
      }                                                                //
                                                                       //
      var index = client.initIndex(docIndex);                          // 44
                                                                       //
      // array contains the data you want to save in the index         //
                                                                       //
      index.saveObjects(array, function (error, content) {             // 48
        if (error) console.error('Error:', error);else console.log('Content:', content);
      });                                                              //
    } else {                                                           //
      console.log("im here" + process.env.NODE_ENV);                   // 54
      return false;                                                    // 55
    }                                                                  //
  },                                                                   //
                                                                       //
  deleteDotzFromAlgolia: function (dotId, dotType) {                   // 60
    check(dotId, String);                                              // 61
    check(dotType, String);                                            // 62
    var client = AlgoliaSearch("OE5LQTXY83", "bd14aab9d22ce75c25d286f9821b89c3");
    var objectIndex = undefined;                                       // 64
    var dot = undefined;                                               // 65
    var index = undefined;                                             // 66
                                                                       //
    if (dotType === "Dot") {                                           // 68
      index = client.initIndex("Dotz");                                // 69
    } else {                                                           //
      index = client.initIndex("Lists");                               // 72
    }                                                                  //
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
