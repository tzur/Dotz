/**
 * Created by avivhatzir on 16/11/2015.
 */
/**
 * Created by avivhatzir on 02/11/2015.
 */
Template.connectDotBySreachModal.onCreated(function(){
  let self = this;
  self.autorun(function () {
    self.subscribe('createByUserDotz');
  });

});

Template.connectDotBySreachModal.onRendered(function() {
  Modules.client.Dotz.limitCharactersAndCounter('#personalDescription', 100, '#personalDescriptionFeedback');
});



Template.connectDotBySreachModal.helpers({

  currentUserImageUrl: function() {
    return Meteor.user().profile.profileImage;
  },

  currentUserUsername: function() {
    return Meteor.user().username;
  },

  dotTarget: function() {
    return _data.dotShow
  }

});

Template.connectDotBySreachModal.events({

});
