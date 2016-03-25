




Template.searchResultCard_in_CreateTheDot.events({



//Add dot from the search results:
  'click #_reconnectDotToParentDot': function(){
    let currentDot = this.dot;
    let parentDot = Template.parentData(3).dot;
    let parentDotId;
    if (parentDot) {
      parentDotId = parentDot._id;
    } else {
      parentDotId = Meteor.user().profileDotId;
    }
    Meteor.call('checkIfUserAuthoriseForConnect', parentDotId, function(error, result){
      if(result === true){

        //TBD:
        let personalDescription = $('#personalDescription').val();

        let smartRef = new Modules.both.Dotz.smartRef(currentDot._id, currentDot.ownerUserId,
          parentDotId, CONNECT_ACTION, Meteor.userId(), personalDescription);

        Meteor.call('connectDot', smartRef,  function(error, result){
          if (!error) {
            Modules.client.createDotClearForm();
          }
        });


        //Modal.show('searchForConnectAddPersonalDescriptionModal', {
        //  data:{
        //    dot: currentDot,
        //    parentDot: parentDot
        //  }
        //});
      } else {
        Modal.show('signUpModal');
      }
    })
  }

});
