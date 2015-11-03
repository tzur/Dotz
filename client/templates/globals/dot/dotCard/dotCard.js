//_data = {};
//
//Template.dotCard.onCreated(function() {
//  console.log("%%%%%%%%%%%%%%%%%%% this._id is 00000 " + this._id);
//  let self = this;
//  self.autorun(function() {
//    let dotId = this._id;
//    self.subscribe('dotShow', dotId);
//    console.log("%%%%%%%%%%%%%%%%%%% this._id is " + this._id);
//  });
//});

Template.dotCard.onRendered (function(){
  $(".limitP-mobile").each(function(i){
    len=$(this).text().length;
    if(len>200)
    {
      $(this).text($(this).text().substr(0,200)+'...');
    }
  });
});

Template.dotCard.helpers({
  dotCard: function() {
    return this;
  },
  userName: function(){
    return this.owner.userName;
  },
  dotIdLink: function() {
    return ('/dot/' + this._id + '#top');
  },
  userIdLink: function() {
    return ('/user/' + this.ownerUserId);
  }
  //profileImageUrl: function() {
  //  var user = Meteor.users.findOne(this.owner.userId);
  //  return user.profile.profileImage;
  //},
  //createDate: function(){
  //  return (moment(this.createdAt).fromNow())
  //},
  //eventDate: function(){
  //  if(!this.isMix && this.eventDate.startDate) {
  //    return ( moment(this.eventDate.startDate).fromNow());
  //  }
  //  else {
  //    return false;
  //  }
  //},
  //
  //mixDotzNum: function(){
  //  if (this.isMix){
  //    var mix = Mixes.findOne({_id: this._id});
  //    if (mix.mixDotz) {
  //      if (mix.mixDotz.length === 1) {
  //        return (mix.mixDotz.length + " Dot");
  //      }
  //      else {
  //        return (mix.mixDotz.length + " Dotz");
  //      }
  //    }
  //
  //  }
  //},
  //
  ////OTNI: mixImg helpers are TBD (need refactoring)
  //
  //mixImg0: function(){
  //  var mix = this._id;
  //  var mixSession = 'sess0'+mix;
  //  Meteor.call('mixCoverImages', this._id, function (error, result) {
  //    if (!result[0]) {
  //      return;
  //    }
  //    Session.set(mixSession, result[0]);
  //  });
  //  return Session.get(mixSession);
  //},
  //
  //mixImg1: function(){
  //  var mix = this._id;
  //  var mixSession = 'sess1'+mix;
  //  Meteor.call('mixCoverImages', this._id, function (error, result) {
  //    if (!result[1]) {
  //      return;
  //    }
  //    Session.set(mixSession, result[1]);
  //  });
  //  return Session.get(mixSession);
  //},
  //
  //mixImg2: function(){
  //  var mix = this._id;
  //  var mixSession = 'sess2'+mix;
  //  Meteor.call('mixCoverImages', this._id, function (error, result) {
  //    if (!result[2]) {
  //      return;
  //    }
  //    Session.set(mixSession, result[2]);
  //  });
  //  return Session.get(mixSession);
  //},
  //
  //mixImg3: function(){
  //  var mix = this._id;
  //  var mixSession = 'sess3'+mix;
  //  Meteor.call('mixCoverImages', this._id, function (error, result) {
  //    if (!result[3]) {
  //      return;
  //    }
  //    Session.set(mixSession, result[3]);
  //  });
  //  return Session.get(mixSession);
  //},
  //
  ///////////////
  //

  //
  //isMyMix: function(){
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
  //},
  //isConnected: function(){
  //  if (this.isMix){
  //    var mix = Mixes.findOne({_id: this._id});
  //    return mix.inMixes.length;
  //  }
  //  else{
  //    var post = Posts.findOne({_id: this._id});
  //    return post.inMixes.length;
  //  }
  //
  //},
  //
  //postComments: function(){
  //  return Posts.find({parent:this._id}, {sort: {date: -1}});
  //},
  //
  //myDot: function(){
  //  return (this.owner.userId === Meteor.userId());
  //},
  //
  //getPostedBy: function(){
  //  var user = Meteor.users.findOne({_id: this.owner});
  //  if (user){
  //    return user.username;
  //  }
  //},
  //
  //myConnect: function(){
  //  var data = Template.parentData();
  //  return (Meteor.userId() === data.mix.owner);
  //}
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

  /*
   'click .toDot': function(){
   if (this.isMix){
   Router.go('/mix/' + this._id);
   }
   else{
   Router.go('/post/' + this._id);
   }
   },
   */

  'click .connect': function(){

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
