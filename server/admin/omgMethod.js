
Meteor.methods({

  omgCall(smartRef){

    check(smartRef, Schema.dotSmartRef);

    //  security check:
    if ( Meteor.user().username === "Dotz" || "Otni" || "Aviv Hatzir" || "Yoav Sibony" || "Zur Tene" ) {

        let theFakeLake = [
            "Omer Lev",
            "Ben Lo",
            "Andi Dagan",
            "Laura Melrose",
            "Michal Rinat",
            "Tori Null",
            "Will Anderson",
            "Laura Kirsh",
            "Paloma Hernandez",
            "Jackie Melrose",
            "Luis van Beuren",
            "Leo Kalderon",
            "Rose Shine",
            "Tom James",
            "Bob Geller",
            "Nill Watson",
            "TLV Events",
            "Rotem Levy",
            "John Galt",
            "Ben Mor",
            "Leo Kalderon",
            "Nill Ezra",
            "Tom Jones",
            "Hotel",
            "Rose Shine",
            "Johen",
            "Sample Hostel"
        ];

        //Chose a random user from th list above:
        let i = Math.floor((Math.random() * theFakeLake.length) + 1);
        let userId = Meteor.users.findOne({username: theFakeLake[i]})._id;

    } else {
      return false
    }

    //Call to fake method (see below) because the security check:
    Meteor.call('fakeLikeDot', smartRef.connection.toParentDotId, smartRef.dot._id, userId, function(error, result){
      if (error){
        console.log("Error "+ error);
      }
      else {
        //Continue with the regular methods:
        Meteor.call('updateTotalUpvotes', smartRef.dot._id, smartRef.connection.toParentDotId, function(error, result){
          if(error){
            console.log("Error in 'updateTotalUpvotes': " + error)
          }
        });
        let parentDot = Dotz.findOne(smartRef.connection.toParentDotId);
        if(parentDot.isOpen){
          //If we have more than one variable at the array
          if (parentDot.connectedDotzArray.length > 1){
            let currentIndex =0;
            //Find the current smartRef index.
            while (parentDot.connectedDotzArray[currentIndex].dot._id != smartRef.dot._id){
              currentIndex++;
            }
            //if he is not at the top..(we are at like action so we have nothing to do...)
            if (currentIndex != 0) {
              let tempIndex = currentIndex; // temporary index just for the current iteration
              let newIndex = currentIndex; //will save our new index
              while (tempIndex != 0) {
                tempIndex -= 1;
                //check if the dot that is located from left of me have less likes than me.
                if (parentDot.connectedDotzArray[tempIndex].connection.likes.length <
                  parentDot.connectedDotzArray[currentIndex].connection.likes.length) {
                  newIndex = tempIndex; // i need to replace her, so save her index
                }
                else{
                  break; // if one is bigger than me than sure all of the rest are, no need to keep iterating.
                }
              }
              // if the newIndex was changed, lets update the array with it's new order.
              if (newIndex != currentIndex){
                Meteor.call('sortByLikes',parentDot.connectedDotzArray[currentIndex],
                  smartRef.connection.toParentDotId ,newIndex, function(error,result){
                    if (error){
                      console.log("ERROR " + error);
                    }
                  })
              }
            }
          }
        }
      }
    });
  },

  fakeLikeDot(targetDotId, smartRefId, userId ){
    check(targetDotId, String);
    check(smartRefId, String);
    check(userId, String);
    try{

      Dotz.update({_id: targetDotId, "connectedDotzArray.dot._id": smartRefId}, {
        $addToSet: {"connectedDotzArray.$.connection.likes": userId}})
    }
    catch(exception){
      return exception;
    }

  }

});


