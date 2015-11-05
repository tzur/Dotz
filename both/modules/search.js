let _searchCursorToDataObject = function(searchArray){
  let dataArray = [];
  let dot = {};
  let ownerUser = {};
  let user;
  let data = {};
  searchArray.forEach(function(dotSearch){
    dot = {};
    data = {};
    if (dotSearch.dotType === '_profileDot'){
      console.log("skipping profile");
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
        dataArray.push(data);
      }
    }
  });
  return dataArray;
};

Modules.both.Dotz.searchCursorToDataObject = _searchCursorToDataObject;
