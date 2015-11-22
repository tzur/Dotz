//changing SmartRef to be independent object.
 let _smartRef = function (dotId, dotOwnerUserId,parentDotId, actionName, connectedByUserId ,personalDescription ){
      this.dot = {
        _id: dotId,
        ownerUserId: dotOwnerUserId
      };
      this.connection = {
        toParentDotId: parentDotId,
        connectedByUserId: connectedByUserId,
        actionName: actionName,
        personalDescription: personalDescription,
        likes: []
      };
};

let _likeDot = function(smartRef, userId){
  check(smartRef, Schema.dotSmartRef);
  check(userId, Meteor.userId());

  Meteor.call('likeDot', smartRef.connection.toParentDotId, smartRef.dot._id, userId, function(error, result){
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
};
let _smartRefToDataObject = function(smartRefArray){
  let data;
  let dataArray = [];
  smartRefArray.forEach(function(smartRef) {
    data = {};
    let dot = Dotz.findOne(smartRef.dot._id);
    if (dot){
      let ownerUser = Meteor.users.findOne(dot.ownerUserId);
      let connectedUser = Meteor.users.findOne(smartRef.connection.connectedByUserId);

      //1:
      data.smartRef = smartRef;
      //2:
      data.dot = dot;
      //3:
      if (ownerUser) {
        data.ownerUser = {
          id: ownerUser._id,
          username: ownerUser.username,
          userSlug: ownerUser.profile.userSlug,
          profileImage: ownerUser.profile.profileImage
        };
      }
      //4:
      if (connectedUser) {
        data.connectedByUser = {
          id: connectedUser._id,
          username: connectedUser.username,
          userSlug: ownerUser.profile.userSlug,
          profileImage: connectedUser.profile.profileImage
        };
      }

      if (data && data.ownerUser && data.connectedByUser) {
        dataArray.push(data);
      }
    }
  });

  return dataArray;

};

Modules.both.Dotz.smartRef = _smartRef;
Modules.both.Dotz.likeDot = _likeDot;
Modules.both.Dotz.smartRefToDataObject = _smartRefToDataObject;




