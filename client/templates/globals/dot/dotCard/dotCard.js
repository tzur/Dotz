_dataCard = {};

Template.dotCard.onRendered (function(){
  $(".limitP").each(function(i){
    len=$(this).text().length;
    if(len>30)
    {
      $(this).text($(this).text().substr(0,30)+'...');
    }
  });
});

Template.dotCard.helpers({
  dotData: function() {
    return this;
  },
  isMyDot: function() {
    return (this.dot.ownerUserId === Meteor.userId())
  },

  testHelper: function(){
    return null;
  },
  createDate: function(){
    return (moment(this.createdAt).fromNow())
  },
  eventDate: function(){
    return ( moment(this.dot.startDateAndHour).fromNow());
  },
  isTheOwnerDotCard: function() {
    let connectedByUserId = this.connectedByUser._id;
    let dotOwnerUserId = this.ownerUser._id;
    //let parentData = Template.parentData();
    return (connectedByUserId === dotOwnerUserId)
  },
  likeCounter: function(){
    return this.smartRef.likes.length;
  }
});

Template.dotCard.events({
  'keyup .comment': function(evt, tmpl){
    if (evt.which== 13){
      var commentText = tmpl.find('.comment').value;
      var options = {text: commentText, parent: this._id};
      Meteor.call('addPost', options);
      $('.comment').val('').select().focus();
    }
  },

  'click .like': function(event){
    Modules.both.Dotz.likeDot(this.smartRef, Meteor.userId());
  },

  'click .unlike': function(event){
    Meteor.call('unLikePost', Meteor.userId(), this._id);
  },

  'click .toUser': function(){
    Router.go('/user/' + this.owner.userId);
  },



  'click .connect': function(){
    Modal.show('connectDotModal',{
      data:{
        dotId: this.dot._id
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
    var dotId = this.dot._id;
    Modal.show('editDotModal', {
      data:{
        'dotId': dotId
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
      console.log("HI 11");
      parentId = data.mix._id;
      console.log("parentId is: " + parentId);
      var mix = Mixes.findOne(parentId);
      dotzArray = mix.mixDotz;
    }

    var index = dotzArray.map(function(e) { return e.dotId; }).indexOf(dotId);

    if (index !== 0) {
      var newIndex = index - 1;
      Meteor.call('sortDotz', parentId, dotId, isMix, newIndex);
    }

    //console.log("index is: " + index + " new index is: " + newIndex + "parent data is " + parentId); //DEBUG


  },

  'click .downBtn':function(event){
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
