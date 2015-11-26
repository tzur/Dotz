/**
 * Created by avivhatzir on 19/11/2015.
 */

Template.addPersonalDescriptionModal.onRendered(function(){
  Modules.client.Dotz.limitCharactersAndCounter('#personalDescription', 100, '#_connectBySearchDescriptionFeedback');
});
Template.addPersonalDescriptionModal.helpers({

  currentUserImageUrl: function () {
    return Meteor.user().profile.profileImage;
  },

  currentUserUsername: function () {
    return Meteor.user().username;
  }

});

Template.addPersonalDescriptionModal.events({
  'click #addDotBtn': function () {
    let currentDot = this.data.dot;
    let parentDot = this.data.parentDot;
    let personalDescription = $('#personalDescription').val();
    let smartRef = new Modules.both.Dotz.smartRef(currentDot._id, currentDot.ownerUserId,
                        parentDot._id, CONNECT_ACTION, Meteor.userId(), personalDescription);

    Modules.both.Dotz.connectDot(smartRef);
    Modal.hide('createDotModal');


  }
});
