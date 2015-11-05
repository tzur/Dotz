
let _updateInDotz = (toBeAddedDotId, targetDotId) => {
  //to add callback to catch errors.
  //Meteor.call('addDotToInDotz',toBeAddedDotId, targetDotId );
};


let sortDotz = (smartRef, sortValue) => {

    let dotId = smartRef.dotId;
    let parentDot = Dotz.findOne(smartRef.parentDot);
    let dotzArray = parentDot.dotzConnectedByOwner;

    if (dotzArray) {
      var index = dotzArray.map(function(e) { return e.dotId; }).indexOf(dotId);

      //UpBtn
      if (sortValue === 1) {
        if (index !== 0) {
          var newIndex = index - sortValue;
          Meteor.call('sortDotzUpdate', smartRef, newIndex);
        }
      }

      //DownBtn
      else if (sortValue === -1) {
        var arrayLength = dotzArray.length;
        if (index !== arrayLength) {
          var newIndex = index + 1;
          Meteor.call('sortDotzUpdate', smartRef, newIndex);
        }
      }
    }
};

Modules.both.Dotz.sortDotz = sortDotz;

