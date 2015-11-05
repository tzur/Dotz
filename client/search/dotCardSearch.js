Template.dotCardSearch.helpers({
  isMyDot: function(){
    return Meteor.userId() === this.dot.ownerUserId;
  }
});
Template.dotCardSearch.events({
  'click .toUser': function(){
    Router.go('/user/' + this.owner.userId);
  },

  'click .connect': function(){
    Modal.show('connectDotModal',{
      data:{
        dotId: this.dot._id
      }
    });
  }
});
