_data = {};

Template.TESTdot.helpers({

  dotCardData: function () {
    _data.dotCard = Dotz.findOne(this.dot._id);
    //if (_data.dotShow) {
    //  _data.dotShowUser = Meteor.users.findOne(_data.dotShow.ownerUserId);
    //  //return _data;
    //}
    if (_data.dotCard) {
      return _data;
    }
  }

});



