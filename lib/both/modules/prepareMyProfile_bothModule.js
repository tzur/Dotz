//
//
////TODO: TBD >>>>>>>>>>>>
//
//Meteor.methods({
//  prepareMyProfile(smartRef){
//    check(smartRef, Schema.dotSmartRef);
//    if (!Meteor.userId()) {
//      return false;
//    }
//    let _updateUserConnectivity = (dotId, parentDotId) => {
//      let dot = Dotz.findOne(dotId);
//      if (dot) {
//        let userId = dot.ownerUserId;
//        Meteor.call('updateUserConnectivity', Meteor.userId(), dotId, userId, parentDotId, function (error, result) {
//          if (error) {
//            console.log("Update user connectivity ERROR " + error);
//          }
//        });
//      }
//    };
//
//    // Client Wave:
//    if (Meteor.isClient){
//      Meteor.call('addDotToConnectedDotzArray', smartRef, function (error, result) {
//        if (!error) {
//          Bert.alert('Connected :)', 'success', 'growl-bottom-left');
//        }
//        else {
//          console.log("Error" + error);
//        }
//      });
//      if (smartRef.connection.actionName === CONNECT_ACTION) {
//        Meteor.call('addDotToInDotz', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
//          if (error) {
//            console.log("Error at inDotz update at connect " + error);
//          }
//        });
//      }
//    }
//
//    // Server Wave:
//    if (Meteor.isServer){
//      let parentDot = Dotz.findOne(smartRef.connection.toParentDotId);
//
//      //TODO: add connector roles... @otni
//      //if(Roles.userIsInRole( Meteor.userId(), 'Connector' ) || (parentDot && parentDot.ownerUserId === Meteor.userId())) {
//
//      if( Meteor.userId() ) {
//        Meteor.call('addDotToConnectedDotzArray', smartRef, function (error, result) {
//          if (!error) {
//
//            Meteor.call('updateLastDotzUserConnectedTo', smartRef.connection.toParentDotId, function(error, result) {
//              if (error) {
//                console.log("updateLastDotzUserConnectedTo >>> error: " + error);
//              }
//              //else {
//              //  console.log("updateLastDotzUserConnectedTo >>> reulst: " + result);
//              //}
//            });
//
//            if (smartRef.connection.actionName === CONNECT_ACTION) {
//              Meteor.call('addDotToInDotz', smartRef.dot._id, smartRef.connection.toParentDotId, function (error, result) {
//                if (error) {
//                  console.log("Error at inDotz update at connect " + error);
//                }
//                else{
//                  Meteor.call('updateUserPeopleConnectedMyDotz', smartRef, function (error) {
//                    //Update the dot owner connectivity and the connector's connectivity
//                    if (error) {
//                      console.log("Error in updateUserConnectivity: " + error)
//                    }
//                  })
//                }
//              });
//            }
//
//            //***COMMENT OUT FEED
//            //Modules.both.Dotz.updateFeed(smartRef);
//            //_updateUserConnectivity(smartRef.dot._id, smartRef.connection.toParentDotId);
//
//          }
//          else {
//            console.log("Error" + error);
//          }
//        });
//      }
//      else{
//        console.log("Error: User is not connector and trying to connect to other's Dot")
//      }
//    }
//  }
//});
//
//
