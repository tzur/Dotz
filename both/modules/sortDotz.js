
let _updateInDotz = (toBeAddedDotId, targetDotId) => {
  //to add callback to catch errors.
  //Meteor.call('addDotToInDotz',toBeAddedDotId, targetDotId );
};


let sortDotzUp = (smartRef, sortValue) => {

  //UpBtn
  if (sortValue === 1) {

    let dotId = smartRef.dotId;
    //let parentDotId = smartRef.parentDot;
    let parentDot = Dotz.findOne(smartRef.parentDot);
    let dotzArray = parentDot.dotzConnectedByOwner;

    if (dotzArray) {
      var index = dotzArray.map(function(e) { return e.dotId; }).indexOf(dotId);
      var arrayLength = dotzArray.length;
    }

    if (index !== 0) {
      var newIndex = index - sortValue;
      console.log("############### newIndex is " + newIndex);

      Meteor.call('sortDotzUpdate', smartRef, newIndex);

      //Dotz.update({ _id: smartRef.parentDot }, {
      //  $pull: {"dotzConnectedByOwner": smartRef }
      //});
      //
      //Dotz.update({ _id: smartRef.parentDot }, {
      //  $push: {
      //    "dotzConnectedByOwner": {
      //      $each: [ smartRef ],
      //      $position: newIndex
      //    }
      //  }
      //});

    }


  }

  //DownBtn
  else if (sortValue === -1) {


  }



};

Meteor.methods({

  sortDotzUpdate(smartRef, newIndex ){
    check(smartRef, Object);
    check(newIndex, Number);
    try {

      Dotz.update({ _id: smartRef.parentDot }, {
        $pull: {"dotzConnectedByOwner": smartRef }
      });

      Dotz.update({ _id: smartRef.parentDot }, {
        $push: {
          "dotzConnectedByOwner": {
            $each: [ smartRef ],
            $position: newIndex
          }
        }
      });

    }
    catch(exception){
      return exception;
    }
  }

});






Modules.both.Dotz.sortDotzUp = sortDotzUp;
