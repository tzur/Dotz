/**
 * Created by avivhatzir on 05/11/2015.
 */

Template.createToOneOfMyLists.onCreated(function(){
  let self = this;
  self.autorun(function () {
    self.subscribe('createByUserDotz');
  });

});
Template.createToOneOfMyLists.helpers({

  userProfileDotzArray: function(){
      return Modules.client.Dotz.getConnectedByOwnerDotz(Meteor.user().profile.profileDotId)

  }
});
