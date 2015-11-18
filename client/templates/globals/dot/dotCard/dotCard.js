
Template.dotCard.helpers({

  //create specific SESSION!!!! TBD
  isInOpenList: function() {
    if (Template.parentData().userShowDot) {
      return Template.parentData().userShowDot.isOpen;
    }
    else if (Template.parentData().dotShow) {
      return Template.parentData().dotShow.isOpen;
    }
  },

  isInClosedList: function() {
    if (Template.parentData().userShowDot) {
      return !(Template.parentData().userShowDot.isOpen);
    }
    else if (Template.parentData().dotShow) {
      return !(Template.parentData().dotShow.isOpen);
    }
  },

  isListCard: function() {
    return (this.dot.dotType === "List")
  },

  isMyDot: function() {
    return (this.dot.ownerUserId === Meteor.userId())
  },

  //Works for dotzConnectedByOwner, TBD for dotzConnectedByOthers:
  sortIsAvailable: function() {
    let parentDotOwnerId = Dotz.findOne(this.smartRef.connection.toParentDotId).ownerUserId;
    return ( parentDotOwnerId === Meteor.userId() )
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

  shortenAdress: function(){
    if (this.dot.location.address) {
      return s.prune(this.dot.location.address, 40);
    }
  },

  userIsTheDotCreator: function() {
    return (this.ownerUser.username === this.connectedByUser.username)
  },

  personalDescriptionOrBodyText: function() {
    if (this.smartRef.connection.personalDescription) {
      return s.prune(this.smartRef.connection.personalDescription, 100);
    }
    else if (this.connectedByUser.id === this.dot.ownerUserId) {

      return s.prune(this.dot.bodyText, 100);
    }
    else {
      return " ";
    }
  },

  dotzNum: function() {
    let connectedDotz = 0;
    if (this.dot.connectedDotzArray) {
      connectedDotz = this.dot.connectedDotzArray.length;
    }
    if (connectedDotz == 0){
      return false;
    }
    else{
      return ("+ " + connectedDotz );
    }


  },

  dotOrDotz: function() {
    let connectedDotz = 0;
    if (this.dot.connectedDotzArray) {
      connectedDotz = this.dot.connectedDotzArray.length;
    }

    if ( connectedDotz === 1 ) {
      return ("Dot");
    }
    else {
      return ("Dotz");
    }
  },

  isConnected: function() {
    return ( this.smartRef.connection.connectedByUserId === Meteor.userId() )
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
    if (this.smartRef.connection.likes.length > 0) {
      return this.smartRef.connection.likes.length;
    }
  }

});

Template.dotCard.events({

  'click .like': function(event){
    event.preventDefault();
    Modules.both.Dotz.likeDot(this.smartRef, Meteor.userId());
  },

  'click .unlike': function(event){
    Meteor.call('unLikePost', Meteor.userId(), this._id);
  },

  'click .connect': function(){
    if(Meteor.user())
    {
      Modal.show('connectDotModal',{
        data:{
          dotId: this.dot._id,
          dot: this.dot,
          connectToMyLists: true
        }
      });
    }
    else{
      Modal.show('signUpModal');
    }

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
