/**
 * Created by avivhatzir on 10/11/2015.
 */
/**
 * Created by avivhatzir on 27/10/2015.
 */
let locationObject;
let editDotHooks = {
  //before: {
  //  update: function(doc){
  //    console.log("im here");
  //  }
  //},
  onSuccess: function (update, result) {

    FlowRouter.go('/' + Meteor.user().username)

  }
};
//
//AutoForm.addHooks('editDotForm', editDotHooks);



