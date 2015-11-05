_dataCard = {};

//Template.userShow.onCreated(function() {
//  let parent = Template.parentData();
//  console.log("###### parent is " + parent);
//});

Template.dotCard.onRendered (function(){
  $(".limitP").each(function(i){
    len=$(this).text().length;
    if(len>100)
    {
      $(this).text($(this).text().substr(0,100)+'...');
    }
  });
});

Template.dotCard.helpers({

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

  eventDate: function(){
    if (this.dot.startDateAndHour) {
      return ( moment(this.dot.startDateAndHour).fromNow());
    }
  },

  userIsTheDotCreator: function() {
    return (this.ownerUser._id === this.connectedByUser._id)
  },

  personlDescriptionOrBodyText: function() {
    if (this.smartRef.personalDescription) {
      return this.smartRef.personalDescription;
    }
    else if (this.connectedByUser.id === this.dot.ownerUserId) {
      return this.dot.bodyText;
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
    let counter = Dotz.findOne(this.dot._id).inDotz.length;
    if (counter === 0) {
      return ("");
    }
    else {
      return ( "(" + counter + ")" );
    }
  },

  likeCounter: function(){
    return this.smartRef.likes.length;
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
    Modal.show('connectDotModal',{
      data:{
        dotId: this.dot._id,
        dot: this.dot
      }
    });
  },

  //To be fixed:
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
        'dot': this.dot
      }
    });
  },


  //To be fixed:
  'click .delete':function(event){
    var data = Template.parentData();

    //OTNI: I used if-else statement, cause sometimes there is no a parentData..

    var mixId;

    if (!data) {
      mixId = false;
    }
    else {
      if (data.mix) {
        mixId = data.mix._id;
      }
    }

    //if (data.user) {
    //    parentId = data.user._id;
    //}
    var dotId = this._id;
    var isMix = this.isMix;
    var userId = Meteor.userId();
    console.log("mixId: " + mixId);
    Meteor.call('deleteDot', mixId, dotId, isMix, userId);
    Bert.alert( 'Deleted', 'danger', 'growl-bottom-left' );
  }

});
