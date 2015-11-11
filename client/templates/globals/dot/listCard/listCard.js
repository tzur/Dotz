
Template.listCard.helpers({

  isMyDot: function() {
    return (this.dot.ownerUserId === Meteor.userId())
  },

  //Works for dotzConnectedByOwner, TBD for dotzConnectedByOthers:
  sortIsAvailable: function() {
    let parentDotOwnerId = Dotz.findOne(this.smartRef.parentDot).ownerUserId;
    return ( parentDotOwnerId === Meteor.userId() )
  },

  actionDate: function(){
    if (this.dot.createdAtDate) {
      return (moment(this.dot.createdAtDate).fromNow())
    }
  },


  shortenAdress: function() {
    if (this.dot.location) {
      return s.prune(this.dot.location.address, 20);
    }
  },

  eventDate: function(){
    if (this.dot.startDateAndHour) {
      return ( moment(this.dot.startDateAndHour).fromNow());
    }
  },

  userIsTheDotCreator: function() {
    return (this.ownerUser.username === this.connectedByUser.username)
  },

  personlDescriptionOrBodyText: function() {
    if (this.smartRef.personalDescription) {
      return s.prune(this.smartRef.personalDescription, 100);
    }
    else if (this.connectedByUser.id === this.dot.ownerUserId) {

      return s.prune(this.dot.bodyText, 100);
    }
    else {
      return " ";
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

  isConnected: function() {
    return ( this.smartRef.connectedByUserId === Meteor.userId() )
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
  },

  likeCounter: function(){
    if (this.smartRef.likes.length > 0) {
      return this.smartRef.likes.length;
    }
  }

});



Template.listCard.events({

  'click .like': function(event){
    event.preventDefault();
    Modules.both.Dotz.likeDot(this.smartRef, Meteor.userId());
  },

  'click .unlike': function(event){
    Meteor.call('unLikePost', Meteor.userId(), this._id);
  },

  'click .connect': function(){
    Modal.show('connectDotModal',{
      data:{
        dotId: this.dot._id,
        dot: this.dot
      }
    });
  },

  'click .disConnect': function(){
    Modules.both.Dotz.disConnectDot(this.smartRef);
  },

  'click .upBtn':function(event){
    //console.log("UP: ");
    let smartRef = this.smartRef;
    let sortValue = 1;
    Modules.both.Dotz.sortDotz(smartRef, sortValue);
  },

  'click .downBtn':function(event){
    //console.log("DOWN: ");
    let smartRef = this.smartRef;
    let sortValue = -1;
    Modules.both.Dotz.sortDotz(smartRef, sortValue);
  },

  'click .editBtn': function(){
    Modal.show('editDotModal', {
      data:{
        'dot': this.dot,
        'actionTypeEdit': true
      }
    });
  },

  'click .delete':function(event){
    Modules.both.Dotz.deleteDot(this.dot, this.smartRef);
  }

});
