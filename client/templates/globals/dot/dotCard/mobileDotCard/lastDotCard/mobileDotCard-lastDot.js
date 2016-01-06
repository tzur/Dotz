Template.mobileDotShowLastDot.helpers({

  dotShow: function () {
    FlowRouter.watchPathChange();
    let dot = Dotz.findOne({"dotSlug": FlowRouter.current().path.slice(1)});
    if (dot) {
      let ownerUser = Meteor.users.findOne(dot.ownerUserId);
      let data = {
        dot: dot,
        ownerUser: ownerUser
      };
      return data;
    }
  }

});
