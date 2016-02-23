
Meteor.methods({

  addOrEditObjectInAlgolia(docSlug, isUser){
    check(docSlug, String);
    check(isUser, Boolean);

    if (process.env.NODE_ENV === "production") {
        //console.log("I am in (Algolia check): " + process.env.NODE_ENV);
        let array;
        let docIndex;
        var client = AlgoliaSearch("WB8PQ4YYUT", "d1d8771f079e6676097bded60b6c8355");

        if (isUser) {
          //TBD:
          let currentDoc = Meteor.users.findOne({"profile.userSlug": docSlug});
          currentDoc.objectID = currentDoc._id;
          array = [{"objectID": currentDoc.objectID,"username": currentDoc.username, "profile": currentDoc.profile, "_id": currentDoc._id}];
          docIndex = "users_DOTZ";

        // if is dot/list:
        } else {
          let currentDoc = Dotz.findOne({dotSlug: docSlug});
          currentDoc.objectID = currentDoc._id;

          //TODO >>> fix algolia
          //if (currentDoc.dotType === "Dot") {
          //  docIndex = currentDoc.dotSubType.toLowerCase() + "s_DOTZ";
          //} else if (currentDoc.dotType === "List") {
          //  docIndex = "lists_DOTZ";
          //} else if (currentDoc.dotType === "FBDot") {
          //  docIndex = "lists_DOTZ";
          //}
          //TBD:
          docIndex = "lists_DOTZ";

          //currentDoc.inDotz = currentDoc.inDotz.length + currentDoc.totalUpvotes.length;

          if (currentDoc.location && currentDoc.location.latLng) {
            currentDoc._geoloc = {"lat":currentDoc.location.latLng[0], "lng":currentDoc.location.latLng[1]};
          }
          array = [currentDoc];
        }

        var index = client.initIndex(docIndex);

        // array contains the data you want to save in the index
        index.saveObjects(array, function (error, content) {
          if (error) {
            console.error('Error:', error);
          } else {
            //console.log('Content:', content);
          }
        });

    //In development env. :
    } else {
        console.log("im in: " + process.env.NODE_ENV);
        return false;
    }

  },

  deleteDotzFromAlgolia(dotId, dotType, dotSubType, isUser, userId){
    check(dotId, String);
    check(dotType, String);
    check(dotSubType, String);
    //check(isUser, String);
    //check(userId, String);

    if (process.env.NODE_ENV === "production" && Meteor.isServer) {

    //console.log("delete dotId from algolia : " + dotId)

        var client = AlgoliaSearch("WB8PQ4YYUT", "d1d8771f079e6676097bded60b6c8355");
        //let objectIndex;
        //let dot = Dotz.findOne("dotId");
        let index;

        //if (dotType === "Dot") {
        //  index = client.initIndex(dot.category[0] + "Dotz");
        //}
        //else {
        //  index = client.initIndex(dot.category[0] + "Lists");
        //}

        if (dotType === "Dot") {
          index = client.initIndex(dotSubType.toLowerCase() + "s_DOTZ");
        } else if (dotType === "List") {
          index = client.initIndex("lists_DOTZ");
        }

        // delete the record with objectID="dotId":
        index.deleteObject(dotId, function(err) {
          if (err) {
            console.error('Error: dotId: ' + dotId + ', (on deleteDotzFromAlgolia): ' + err);
            return;
          }
        });

        //index.deleteObject(dotId, function (error, content) {
        //  if (error) {
        //    console.error('Error (on deleteDotzFromAlgolia): ', error);
        //  } else {
        //    //console.log('Content:', content);
        //  }
        //});

    }
  }

});
