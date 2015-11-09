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



Template.dotCardSearch.helpers({

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

  dotzNum: function() {
    let ownerDotz = 0;
    if (this.dot.dotzConnectedByOwner) {
      ownerDotz = this.dot.dotzConnectedByOwner.length;
    }

    let othersDotz = 0;
    if (this.dot.dotzConnectedByOthers) {
      othersDotz = this.dot.dotzConnectedByOthers.length;
    }

    if ((ownerDotz + othersDotz) === 0) {
      return false;
    }
    else {
      return ("+ " + (ownerDotz + othersDotz) );
    }
  },

  dotOrDotz: function() {
    let ownerDotz = 0;
    if (this.dot.dotzConnectedByOwner) {
      ownerDotz = this.dot.dotzConnectedByOwner.length;
    }

    let othersDotz = 0;
    if (this.dot.dotzConnectedByOthers) {
      othersDotz = this.dot.dotzConnectedByOthers.length;
    }

    if ( (ownerDotz+othersDotz) === 1 ) {
      return ("Dot");
    }
    else {
      return ("Dotz");
    }
  },

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



Template.dotCardSearch.events({

  'click .connect': function(){
    Modal.show('connectDotModal',{
      data:{
        dotId: this.dot._id,
        dot: this.dot
      }
    });
  },

  'click .editBtn': function(){
    Modal.show('editDotModal', {
      data:{
        'dot': this.dot,
        'actionTypeEdit': true
      }
    });
  },

  //TBD:
  'click .delete':function(event){
    let searchSmartRef = {};
    searchSmartRef.parentDot = Meteor.users.findOne(this.ownerUser.id).profile.profileDotId;
    //console.log("searchSmartRef.parentDot is " + searchSmartRef.parentDot);
    searchSmartRef.dotId = this.dot._id;
    if (searchSmartRef.parentDot) {
      Modules.both.Dotz.deleteDot(this.dot, searchSmartRef);
    }
  }

});

