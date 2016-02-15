
Template.searchForConnectAddPersonalDescriptionModal.onRendered(function(){
  Modules.client.Dotz.limitCharactersAndCounter('#personalDescription', 100, '#_connectBySearchDescriptionFeedback');
});
Template.searchForConnectAddPersonalDescriptionModal.helpers({

  currentUserImageUrl: function () {
    return Meteor.user().profile.profileImage;
  },

  currentUserUsername: function () {
    return Meteor.user().username;
  }

});

Template.searchForConnectAddPersonalDescriptionModal.events({
  'click #addDotBtn': function () {
    let currentDot = this.data.dot;
    let parentDot = this.data.parentDot;

    //tbd:
    //console.log("this.data.parentDot title is " + parentDot.title);

    let personalDescription = $('#personalDescription').val();
    let smartRef = new Modules.both.Dotz.smartRef(currentDot._id, currentDot.ownerUserId,
                        parentDot._id, CONNECT_ACTION, Meteor.userId(), personalDescription);

    Meteor.call('connectDot', smartRef);
    Modal.hide('createDotModal');


  }
});
