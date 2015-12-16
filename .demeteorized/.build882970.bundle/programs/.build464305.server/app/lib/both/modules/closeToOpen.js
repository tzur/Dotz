(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/closeToOpen.js                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
Meteor.methods({                                                       // 2
  closeToOpen: function (dot) {                                        // 3
    check(dot, Object);                                                // 4
    if (Meteor.userId() != dot.ownerUserId) {                          // 5
      return false;                                                    // 6
    }                                                                  //
    if (dot.isOpen) {                                                  // 8
      throw new Meteor.Error("close-to-open", "trying to send an open to be re-opened...");
    }                                                                  //
    if (dot.connectedDotzArray) {                                      // 11
      dot.connectedDotzArray.sort(function (smartRefA, smartRefB) {    // 12
        return smartRefB.connection.likes.length - smartRefA.connection.likes.length;
      });                                                              //
    }                                                                  //
    try {                                                              // 16
      Dotz.update({ _id: dot._id }, {                                  // 17
        $set: { connectedDotzArray: dot.connectedDotzArray, isOpen: true }
      });                                                              //
    } catch (error) {                                                  //
      throw error;                                                     // 22
    }                                                                  //
  },                                                                   //
  openToClose: function (dot) {                                        // 26
    check(dot, Object);                                                // 27
    if (Meteor.userId() != dot.ownerUserId) {                          // 28
      return false;                                                    // 29
    }                                                                  //
    if (!dot.isOpen) {                                                 // 31
      throw new Meteor.Error("open-to-close", "trying to send an close to be re-closed...");
    }                                                                  //
    try {                                                              // 34
      Dotz.update({ _id: dot._id }, {                                  // 35
        $set: { isOpen: false }                                        // 36
      });                                                              //
    } catch (error) {                                                  //
      throw error;                                                     // 40
    }                                                                  //
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=closeToOpen.js.map
