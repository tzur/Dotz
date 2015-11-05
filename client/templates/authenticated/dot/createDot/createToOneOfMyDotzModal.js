/**
 * Created by avivhatzir on 05/11/2015.
 */

Template.createToOneOfMyDotzModal.onCreated(function(){
  let self = this;
  self.autorun(function () {
    self.subscribe('createByUserDotz');
  });

});
Template.createToOneOfMyDotzModal.helpers({

  userProfileDotzArray: function(){
      return Modules.client.Dotz.getConnectedByOwnerDotz(Meteor.user().profile.profileDotId)

  }
})
