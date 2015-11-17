
let _searchCursorToDataObjectForConnect = function(searchArray, checkIfDotIsValidByParentDotId){
  let dataArray = [];
  let result = {};
  result.canBeConnected=[];
  result.canNotBeConnected= [];
  let dot = {};
  let ownerUser = {};
  let user;
  let data = {};
  searchArray.forEach(function(dotSearch){
    dot = {};
    data = {};
    if (dotSearch.dotType === '_profileDot' || dotSearch.__originalId === checkIfDotIsValidByParentDotId){
      console.log("skipping profile or the same dot");
    }
    else{
      dot = dotSearch;
      dot._id = dotSearch.__originalId;
      data.dot = dot;
      user = Meteor.users.findOne(dot.ownerUserId);
      if (user){
        ownerUser = {
          id: user._id,
          username: user.username,
          profileImage: user.profile.profileImage
        };
        data.ownerUser = ownerUser;
        if(Modules.client.Dotz.isConnectedToDot(checkIfDotIsValidByParentDotId, dot._id)){
          result.canBeConnected.push(data)
        }
        else{
          result.canNotBeConnected.push(data)
        }
      }
    }
  });

  return result;
};


Modules.both.Dotz.searchCursorToDataObjectForConnect = _searchCursorToDataObjectForConnect;
