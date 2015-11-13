
//TBD: add an "if (!error)" statements! >> get inspired by disConnect module :)
let sortDotz = (smartRef, sortValue) => {

    //security checks:
    if (Meteor.userId() !== smartRef.connection.connectedByUserId) {
      return false;
    }
    let isOpen = Dotz.findOne(smartRef.connection.toParentDotId).isOpen;
    if (isOpen){
        return false;
    }
    //find relevant index:
    let dotId = smartRef.dot._id;
    let parentDot = Dotz.findOne(smartRef.connection.toParentDotId);
    let dotzArray = parentDot.connectedDotzArray;

    if (dotzArray) {
      let index = dotzArray.map(function(e) { return e.dot._id; }).indexOf(dotId);

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
        if (index + 1 !== arrayLength) {
          let newIndex = index - sortValue;
          Meteor.call('sortDotzUpdate', smartRef, newIndex);
        }
      }
    }
};

Modules.both.Dotz.sortDotz = sortDotz;

