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

let _likeDot = function(smartRef, userId, dot){
  check(smartRef, Schema.dotSmartRef);
  check(userId, Meteor.userId());

  Meteor.call('likeDot', smartRef.connection.toParentDotId, smartRef.dot._id, userId, function(error, result){
    if (error){
      console.log("Error "+ error);
    }
    else{
      //need to fix it....
      //if (dot.isOpen){
      //  Meteor.call('sortByLikes',smartRef.connection.toParentDotId ,function(error, result){
      //    if(error){
      //      console.log("Error "+ error);
      //    }
      //  })
      //}
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




