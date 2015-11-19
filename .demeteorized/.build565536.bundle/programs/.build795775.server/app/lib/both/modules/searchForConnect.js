(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/searchForConnect.js                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
var _searchCursorToDataObjectForConnect = function (searchArray, checkIfDotIsValidByParentDotId) {
  var dataArray = [];                                                  // 3
  var result = {};                                                     // 4
  result.canBeConnected = [];                                          // 5
  result.canNotBeConnected = [];                                       // 6
  var dot = {};                                                        // 7
  var ownerUser = {};                                                  // 8
  var user = undefined;                                                // 9
  var data = {};                                                       // 10
  searchArray.forEach(function (dotSearch) {                           // 11
    dot = {};                                                          // 12
    data = {};                                                         // 13
    if (dotSearch.dotType === '_profileDot' || dotSearch.__originalId === checkIfDotIsValidByParentDotId) {
      console.log("skipping profile or the same dot");                 // 15
    } else {                                                           //
      dot = dotSearch;                                                 // 18
      dot._id = dotSearch.__originalId;                                // 19
      data.dot = dot;                                                  // 20
      user = Meteor.users.findOne(dot.ownerUserId);                    // 21
      if (user) {                                                      // 22
        ownerUser = {                                                  // 23
          id: user._id,                                                // 24
          username: user.username,                                     // 25
          profileImage: user.profile.profileImage                      // 26
        };                                                             //
        data.ownerUser = ownerUser;                                    // 28
        if (Modules.client.Dotz.isConnectedToDot(checkIfDotIsValidByParentDotId, dot._id)) {
          result.canBeConnected.push(data);                            // 30
        } else {                                                       //
          result.canNotBeConnected.push(data);                         // 33
        }                                                              //
      }                                                                //
    }                                                                  //
  });                                                                  //
                                                                       //
  return result;                                                       // 39
};                                                                     //
                                                                       //
Modules.both.Dotz.searchCursorToDataObjectForConnect = _searchCursorToDataObjectForConnect;
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=searchForConnect.js.map
