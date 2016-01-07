/**
 * Created by avivhatzir on 16/11/2015.
 */
//Template.instance().view.parentView.name
Template.mobileConnectDotCard.helpers({
  isConnectToMyLists: function(){
    return (Template.parentData() && Template.parentData().data.connectToMyLists);
  }
});


Template.mobileConnectDotCard.events({
  'click .createToBtn': function () {
    Session.set('parentDot', this._id);
    $('#createToMyProfile').trigger('click');
  },

  'click .connectBtn': function () {
    let personalDescription = $('#personalDescription').val();
    let smartRef = new Modules.both.Dotz.smartRef(Session.get('dotIdWishedToBeConnected'), Session.get('dotOwnerUserId'),
      this._id, CONNECT_ACTION, Meteor.userId(),personalDescription);
    Meteor.call('connectDot', smartRef);
    Modal.hide('createDotModal');
  }
});
