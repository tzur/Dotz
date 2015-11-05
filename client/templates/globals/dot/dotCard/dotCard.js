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

  //isConnected: function() {
  //
  //  var data = Template.parentData();
  //  if (!data) {
  //    return false;
  //  }
  //  if (data.user){
  //    return data.user._id === Meteor.userId();
  //  }
  //  if (data.mix){
  //    return data.mix.owner.userId === Meteor.userId();
  //  }
  //
  //  let dotId = this.dot._id;
  //
  //
  //},


  isConnected: function() {
    let parentDotOwnerId = Dotz.findOne(this.smartRef.parentDot).ownerUserId;
    return ( parentDotOwnerId === Meteor.userId() )
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
  },

  sortIsAvailable: function() {
    let parentDotOwnerId = Dotz.findOne(this.smartRef.parentDot).ownerUserId;
    return ( parentDotOwnerId === Meteor.userId() )
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

  'click .disConnect': function(){
    var data = Template.parentData();
    var dotId = this._id;
    var isMix = this.isMix;

    if (data.mix) {
      var mixId = data.mix._id;
    }
    if (data.user) {
      var mixId = data.user._id;
    }

    Meteor.call('disConnectDot', mixId, dotId, isMix );
    Bert.alert( 'Disconnected', 'warning', 'growl-bottom-left' );
  },

  'click .editBtn': function(){
    Modal.show('editDotModal', {
      data:{
        'dot': this.dot
      }
    });

  },

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

  'click .downBtn2':function(event){
    //console.log("DOWN: ");

    var data = Template.parentData();
    var parentId;
    var userId = Meteor.userId();
    var dotId = this._id;
    var isMix = this.isMix; //TBD
    var dotzArray = [];

    if (data.user) {
      parentId = Meteor.userId();
      var user = Meteor.users.findOne(parentId);
      dotzArray = user.profile.profileDotz;
    }
    else if (data.mix) {
      parentId = data.mix._id;
      var mix = Mixes.findOne(parentId);
      dotzArray = mix.mixDotz;
    }

    var index = dotzArray.map(function(e) { return e.dotId; }).indexOf(dotId);
    var arrayLength = dotzArray.length;

    if (index !== arrayLength) {
      var newIndex = index + 1;
      Meteor.call('sortDotz', parentId, dotId, isMix, newIndex);
    }

    //console.log("index is: " + index + " new index is: " + newIndex + "parent data is " + parentId); //DEBUG

  }
});
