//Template.dotCardSearch.helpers({
//  isMyDot: function(){
//    return Meteor.userId() === this.dot.ownerUserId;
//  }
//});
//Template.dotCardSearch.events({
//  'click .toUser': function(){
//    Router.go('/user/' + this.owner.userId);
//  },
//
//  'click .connect': function(){
//    Modal.show('connectDotModal',{
//      data:{
//        dotId: this.dot._id
//      }
//    });
//  }
//});



Template.connectDotCardSearch.helpers({

  isMyDot: function() {
    return (this.dot.ownerUserId === Meteor.userId())
  },

  actionDate: function(){
    if (this.dot.createdAtDate) {
      return (moment(this.dot.createdAtDate).fromNow())
    }
  },

  eventDate: function(){
    if (this.dot.startDateAndHour) {
      return ( moment(this.dot.startDateAndHour).fromNow());
    }
  },

  pruneBodyText: function() {
    if (this.dot.bodyText) {
      return s.prune(this.dot.bodyText, 100);
    }
  },

  //dotzNum: function() {
  //  let ownerDotz = 0;
  //  if (this.dot.connectedDotArray) {
  //    ownerDotz = this.dot.dotzConnectedByOwner.length;
  //  }
  //
  //  let othersDotz = 0;
  //  if (this.dot.dotzConnectedByOthers) {
  //    othersDotz = this.dot.dotzConnectedByOthers.length;
  //  }
  //
  //  if ((ownerDotz + othersDotz) === 0) {
  //    return false;
  //  }
  //  else {
  //    return ("+ " + (ownerDotz + othersDotz) );
  //  }
  //},

  //dotOrDotz: function() {
  //  let ownerDotz = 0;
  //  if (this.dot.dotzConnectedByOwner) {
  //    ownerDotz = this.dot.dotzConnectedByOwner.length;
  //  }
  //
  //  let othersDotz = 0;
  //  if (this.dot.dotzConnectedByOthers) {
  //    othersDotz = this.dot.dotzConnectedByOthers.length;
  //  }
  //
  //  if ( (ownerDotz+othersDotz) === 1 ) {
  //    return ("Dot");
  //  }
  //  else {
  //    return ("Dotz");
  //  }
  //},

  connectCounter: function() {
    //check if this dot is exist (to avoid some errors during delete action)
    let counter;
    let dot = Dotz.findOne(this.dot._id);
    if (dot) {
      counter = dot.inDotz.length;
    }

    //counter show:
    if (counter && counter === 0) {
      return ("");
    }
    else if (counter) {
      return ( "(" + counter + ")" );
    }
  }

  //likeCounter: function(){
  //  return this.smartRef.likes.length;
  //}

});



Template.connectDotCardSearch.events({

  'click #connectBySearchBtn': function(){
    let personalDescription = $('#personalDescription').val();
    let smartRef = new Modules.both.Dotz.smartRef(this.dot._id, this.ownerUser.id, _data.dotShow._id,
                                                  CONNECT_ACTION, Meteor.userId(), personalDescription);
    Modules.both.Dotz.connectDot(smartRef);
  }
});

