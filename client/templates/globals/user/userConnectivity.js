/**
 * Created by avivhatzir on 05/01/2016.
 */
Template.userConnectivity.onCreated(function(){
  let self = this;
  self.autorun(function () {
    self.subscribe('createByUserLists', this.data.userId);
  });
});
