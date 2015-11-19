(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/sortDotz.js                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
//TBD: add an "if (!error)" statements! >> get inspired by disConnect module :)
var sortDotz = function (smartRef, sortValue) {                        // 3
  //security checks:                                                   //
                                                                       //
  var parentDot = Dotz.findOne(smartRef.connection.toParentDotId);     // 6
  if (Meteor.userId() !== parentDot.ownerUserId || parentDot.isOpen) {
    return false;                                                      // 8
  }                                                                    //
                                                                       //
  //find relevant index:                                               //
  var dotId = smartRef.dot._id;                                        // 12
  var dotzArray = parentDot.connectedDotzArray;                        // 13
                                                                       //
  if (dotzArray) {                                                     // 15
    var index = dotzArray.map(function (e) {                           // 16
      return e.dot._id;                                                // 16
    }).indexOf(dotId);                                                 //
                                                                       //
    //UpBtn                                                            //
    if (sortValue === 1) {                                             // 19
      if (index !== 0) {                                               // 20
        var newIndex = index - sortValue;                              // 21
        Meteor.call('sortDotzUpdate', smartRef, newIndex);             // 22
      }                                                                //
    }                                                                  //
                                                                       //
    //DownBtn                                                          //
    else if (sortValue === -1) {                                       //
        var arrayLength = dotzArray.length;                            // 28
        if (index + 1 !== arrayLength) {                               // 29
          var newIndex = index - sortValue;                            // 30
          Meteor.call('sortDotzUpdate', smartRef, newIndex);           // 31
        }                                                              //
      }                                                                //
                                                                       //
    ////DC up                                                          //
    //else if (sortValue === 11) {                                     //
    //  Meteor.call('sortDotzUpdate', smartRef, 0);                    //
    //                                                                 //
    //}                                                                //
    //                                                                 //
    ////DC Down                                                        //
    //else if (sortValue === -11) {                                    //
    //  let newIndex = (dotzArray.length -1);                          //
    //  Meteor.call('sortDotzUpdate', smartRef, newIndex);             //
    //}                                                                //
  }                                                                    //
};                                                                     //
                                                                       //
Modules.both.Dotz.sortDotz = sortDotz;                                 // 50
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=sortDotz.js.map
