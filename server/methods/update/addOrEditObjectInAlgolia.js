/**
 * Created by avivhatzir on 17/11/2015.
 */
Meteor.methods({
  addOrEditObjectInAlgolia(docSlug, isUser){
    check(docSlug, String);
    check(isUser, Boolean);
    if(process.env.NODE_ENV === "production"){
      console.log("I am in (Algolia check): " + process.env.NODE_ENV);

      let array;
      let docIndex;
      check(docSlug, String);
      check(isUser, Boolean);
      var client = AlgoliaSearch("OE5LQTXY83", "bd14aab9d22ce75c25d286f9821b89c3");

      if (isUser){
        let currentDoc = Meteor.users.findOne({"profile.userSlug": docSlug});
        currentDoc.objectID = currentDoc._id;

        array = [{"objectID": currentDoc.objectID,"username": currentDoc.username, "profile": currentDoc.profile, "_id": currentDoc._id}]
        docIndex = currentDoc.roles.firstGroup[0] + "Users"

      }
      else{

        let currentDoc = Dotz.findOne({dotSlug: docSlug});
        currentDoc.objectID = currentDoc._id;
        if(currentDoc.dotType === "Dot"){
          docIndex = currentDoc.category[0] + "Dotz"
        }
        else{
          docIndex = currentDoc.category[0] + "Lists"
        }
        currentDoc.inDotz = currentDoc.inDotz.length + currentDoc.totalUpvotes.length;
        if(currentDoc.location && currentDoc.location.latLng){
          currentDoc._geoloc = {"lat":currentDoc.location.latLng[0], "lng":currentDoc.location.latLng[1]};
        }
        array = [currentDoc];
      }



      var index = client.initIndex(docIndex);

// array contains the data you want to save in the index

      index.saveObjects(array, function (error, content) {
        if (error) console.error('Error:', error);
        else console.log('Content:', content);
      });
    }
    else{
      console.log("im in: " + process.env.NODE_ENV);
      return false
    }

  },

  deleteDotzFromAlgolia(dotId, dotType){
    check(dotId, String);
    check(dotType, String);
    if(process.env.NODE_ENV === "production" && Meteor.isServer) {

      var client = AlgoliaSearch("OE5LQTXY83", "bd14aab9d22ce75c25d286f9821b89c3");
      let objectIndex;
      let dot = Dotz.findOne("dotId");
      let index;

      if (dotType === "Dot") {
        index = client.initIndex(dot.category[0] + "Dotz");
      }
      else {
        index = client.initIndex(dot.category[0] + "Lists");
      }


// array contains the data you want to save in the index

      index.deleteObject(dotId, function (error, content) {
        if (error) console.error('Error:', error);
        else console.log('Content:', content);
      });
    }
  }
});
