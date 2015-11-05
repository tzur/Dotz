
let sortDotz = (smartRef, sortValue) => {

    //security check:
    if (Meteor.userId() !== smartRef.connectedByUserId) {
      return false;
    }

    //find relevant index:
    let dotId = smartRef.dotId;
    let parentDot = Dotz.findOne(smartRef.parentDot);
    let dotzArray = parentDot.dotzConnectedByOwner;

    if (dotzArray) {
      let index = dotzArray.map(function(e) { return e.dotId; }).indexOf(dotId);

      //UpBtn
      if (sortValue === 1) {
        if (index !== 0) {
          let newIndex = index - sortValue;
          Meteor.call('sortDotzUpdate', smartRef, newIndex);
        }
      }

      //DownBtn
      else if (sortValue === -1) {
        let arrayLength = dotzArray.length;
        if (index !== arrayLength) {
          let newIndex = index - sortValue;
          Meteor.call('sortDotzUpdate', smartRef, newIndex);
        }
      }
    }
};

Modules.both.Dotz.sortDotz = sortDotz;

