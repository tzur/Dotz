/**
 * Created by yoav on 18/11/2015.
 */

Template.publicNavigation.events({


'click .signup': function() {
  if (Meteor.user()) {
    Modules.both.Dotz.followUser(Meteor.userId(), _data.userShow._id);
  }
  else {
    Modal.show('signUpModal');
  }
},

'click .login': function() {
  if (Meteor.user()) {
    Modules.both.Dotz.followUser(Meteor.userId(), _data.userShow._id);
  }
  else {
    Modal.show('loginModal');
  }
}


});
