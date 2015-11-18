////let _searchObjectToDataObject = function(searchObject){
////  let user;
////  let data = {};
////   {
////    if (!error) {
////      user = Meteor.users.findOne(searchObject.ownerUserId);
////      let ownerUser = {
////        _id: user._id,
////        username: user.username,
////        profileImage: user.profile.profileImage,
////        userSlug: user.userSlug
////      };
////      data.dot = searchObject;
////      data.ownerUser = ownerUser;
////    }
////    else {
////      console.log("Error " + error);
////      Session.set("searchDataObject", undefined);
////    }
////    Session.set("searchDataObject", data);
////  });
////};
//
//Modules.both.Dotz.searchObjectToDataObject = _searchObjectToDataObject;
