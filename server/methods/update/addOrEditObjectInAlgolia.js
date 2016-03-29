
Meteor.methods({

  addOrEditObjectInAlgolia(docSlug, isUser){
    check(docSlug, String);
    check(isUser, Boolean);

    if (process.env.NODE_ENV === "production") {
        //console.log("I am in (Algolia check): " + process.env.NODE_ENV);
        let array;
        let index;
        let selectedIndex;
        let client = AlgoliaSearch("WB8PQ4YYUT", "d1d8771f079e6676097bded60b6c8355");

        if (isUser) {
          //TBD:
          let currentDoc = Meteor.users.findOne({"profile.userSlug": docSlug});
          currentDoc.objectID = currentDoc._id;
          array = [{"objectID": currentDoc.objectID,"username": currentDoc.username, "profile": currentDoc.profile, "_id": currentDoc._id}];
          selectedIndex = "users_DOTZ";

        // if is dot/list:
        } else {
          let currentDoc = Dotz.findOne({dotSlug: docSlug});
          currentDoc.objectID = currentDoc._id;
          if (Meteor.user().profile.userCommunities[0] === 'Tel_Aviv') {
            selectedIndex = "Tel_Aviv_DOTZ";
          } else {
            selectedIndex = "Startup_IL_DOTZ";
          }
          if (currentDoc.location && currentDoc.location.latLng) {
            currentDoc._geoloc = {"lat":currentDoc.location.latLng[0], "lng":currentDoc.location.latLng[1]};
          }
          array = [currentDoc];
        }

        var index = client.initIndex(selectedIndex);

        // array contains the data you want to save in the index
        index.saveObjects(array, function (error, content) {
          if (error) {
            console.error('Error:', error);
          } else {
            //console.log('saveObjects - Content:', content);
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
        //TBD:
        let selectedIndex;
        if (Meteor.user().profile.userCommunities[0] === 'Tel_Aviv') {
          selectedIndex = "Tel_Aviv_DOTZ";
        } else {
          selectedIndex = "Startup_IL_DOTZ";
        }
        index = client.initIndex(selectedIndex);

        // delete the record with objectID="dotId":
        index.deleteObject(dotId, function(err) {
          if (err) {
            console.error('Error: dotId: ' + dotId + ', (on deleteDotzFromAlgolia): ' + err);
            return;
          }
        });

    }
  }

});
