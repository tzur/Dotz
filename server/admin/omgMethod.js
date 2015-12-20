
Meteor.methods({

  omgCall(smartRef){

    console.log("########################## in 1");

    check(smartRef, Schema.dotSmartRef);

    //  security check:
    if ( Meteor.user().username === "Dotz" || "Otni" || "Aviv Hatzir" || "Yoav Sibony" || "Zur Tene" ) {
      console.log("########################## in 2");
    } else {
      return false
    }

    let theFakeLake = [
      "Otni",
      "Dotz",
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
      "Nill Watson"
    ];

    //Chose a random user from th list above:
    let i = Math.floor((Math.random() * theFakeLake.length) + 1);
    let userId = Meteor.users.findOne({username: theFakeLake[i]})._id;
    console.log("########################## userId is " + userId);

    //Dotz.update({_id: smartRef.connection.toParentDotId, "connectedDotzArray.dot._id": smartRef.dot._id}, {
    //  $addToSet: {"connectedDotzArray.$.connection.likes": userId}})

    //Call to fake method (see below) because the security check:
    Meteor.call('fakeLikeDot', smartRef.connection.toParentDotId, smartRef.dot._id, userId, function(error, result){
      if (error){
        console.log("Error "+ error);
      }
      else{
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

  },

  fakeUpdateTotalUpvotes(dotId, parentDotId){
    check(dotId, String);
    check(parentDotId, String);
    let totalUpvotes = {
      parentDot: parentDotId,
      userId: Meteor.userId()
    };
    check(parentDotId, String);
    let updateOptions = {
      $addToSet: {totalUpvotes: totalUpvotes}
    };
    _dotUpdate(dotId, updateOptions)

  }

});


