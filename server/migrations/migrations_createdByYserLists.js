

//Migrations.add({
//  version: 1,
//  up() {
//    Lists.find({todoCount: {$exists: false}}).forEach(list => {
//      const todoCount = Todos.find({listId: list._id})).count();
//    Lists.update(list._id, {$set: {todoCount}});
//  });
//},
//down() {
//  Lists.update({}, {$unset: {todoCount: true}});
//}
//});


//Migrations.add({
//  version: 1,
//  name: 'On user.profile.createdByUserLists: convert listId (String) to a smartRef object.',
//
//  up: function() {
//    //code to migrate up to version 1:
//    Meteor.users.find({username:"Otni"}).forEach(user => {
//
//      let createdByUserLists = user.profile.createdByUserLists;
//
//      if (createdByUserLists) {
//        check(createdByUserLists, Array);
//
//
//        createdByUserLists.forEach(index => {
//
//        if (!index.dot ) {
//            check(index, String);
//            let smartRef = {
//                dot: {
//                  _id: index,
//                  ownerUserId: user._id
//                },
//                connection: {
//                  toParentDotId: null, //TBD
//                  connectedByUserId: user._id,
//                  actionName: "Create",
//                  personalDescription: null,
//                  likes: []
//                }
//            };
//
//            //update: insert new smartRef >> by an exist Meteor.call :
//            Meteor.call('updateCreatedByUserLists', smartRef, function (error, result) {
//              if (error) {
//                console.log("################################## ERROR updateCreatedByUserLists: when try to update/add dotId (=smartRef is:" +
//                  smartRef + "): " + index + " , the userID is " + user._id + " And the ERROR massage is: " + error
//                  + " ##################################");
//              }
//              else if (!error) {
//                console.log(">>>>>>> Great success :)");
//              }
//            });
//
//            //pull/delete the old string >> by an exist Meteor.call :
//            Meteor.call('pullFromCreatedByUserLists', index, function (error, result) {
//              if (error) {
//                console.log("################################## ERROR pullFromCreatedByUserLists: when try to pull/delete dotId (=String...): " +
//                  index + " , the userID is " + user._id + " And the ERROR massage is: " + error + " ##################################");
//              }
//              else if (!error) {
//                console.log(">>>>>>> Great success :)");
//              }
//            });
//        } else {
//          console.log("@@@@@ There IS index.dot (i.e. just smartRefs here..) for the username: " + user.username);
//        }
//        });
//
//      } else {
//        console.log("@@@@@ There is NO profile.createdByUserLists for the username: " + user.username);
//      }
//
//    });
//  }
//  //,
//  //
//  //down: function() {
//  //  //code to migrate down to version 0
//  //    Meteor.users.update({}, {$unset: {"profile.createdByUserLists": true}});
//  //}
//});




