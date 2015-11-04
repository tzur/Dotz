_data = {};

Template.dotCard.onCreated(function() {
  //console.log("%%%%%%%%%%%%%%%%%%% this._id is 00000 " + this._id);
  let self = this;
  self.autorun(function() {

    if (_data.smartRef) {
      //self.subscribe('dotShow', _data.smartRef.dotId);
      console.log("%%%%%%%%%%%%%%%%%%% on created _data.smartRef.dotId is " + _data.smartRef.dotId);

      let dot = Dotz.findOne(_data.smartRef.dotId);
      if (dot) {
        console.log("%%%%%%%%%%%%%%%%%%% on created dot is " + dot);
      }

    }
    let userId = this.ownerUserId;
    if (userId) {
      self.subscribe('user', userId);
      console.log("%%%%%%%%%%%%%%%%%%% on created userId is " + userId);
    }

    _data.test = this.title;
    if (_data.test) {
      console.log("%%%%%%%%%%%%%%%%%%% on created this.title is " + this.title);
      console.log("%%%%%%%%%%%%%%%%%%% on created _data.test is " + _data.test);
    }

    let user = Meteor.users.findOne(userId);
    _data.user = user;

  });
});


Template.dotCard.helpers({
  dotData: function() {
    _data.smartRef = this;
    _data.dot = this;
    _data.test = this.title;
    return _data;
  },

  createDate: function(){
    return (moment(this.createdAt).fromNow())
  },
  eventDate: function(){
    return ( moment(_data.dot.startDateAndHour).fromNow());
  },
  showOriginalDotCard: function() {
    let parentData = Template.parentData();
    return (parentData)
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
    Meteor.call('likePost', Meteor.userId(), this._id);
  },

  'click .unlike': function(event){
    Meteor.call('unLikePost', Meteor.userId(), this._id);
  },

  'click .toUser': function(){
    Router.go('/user/' + this.owner.userId);
  },



  'click .connect': function(){
    let temp = this._id;
    Modal.show('connectDotModal',{
      data:{
        dotId: this._id
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

  'click .edit': function(){
    var dotId = this._id;
    if (this.isMix){
      Modal.show('editMixModal', {
        data:{
          'dotId': dotId
        }
      });
    }
    else{
      Modal.show('editPostModal', {
        data:{
          'dotId': dotId
        }
      });
    }
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
