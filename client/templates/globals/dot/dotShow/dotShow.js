_data = {};
//_data.userShow = {}; //TBD?


Template.dotShow.onCreated(function() {
  let self = this;
  self.autorun(function() {

    //let username = FlowRouter.getParam('username');
    //self.subscribe('userByUsername', username);
    //_data.user = Meteor.users.findOne({username: username});

    let dotId = FlowRouter.getParam('dotId');
    self.subscribe('dotShow', dotId);
    _data.dot = Dotz.findOne(dotId);


    if (_data.dot) {
      //let dotId = _data.user.profile.profileDotId;
      //self.subscribe('dotShow', dotId);
      //_data.dot = Dotz.findOne(dotId);

      //if (_data.dot) {
      //  self.subscribe('dotzConnectedByOwner', dotId);
      //  let getDotzConnectedByOwnerArray = [];
      //
      //  if (_data.dot.dotzConnectedByOwner) {
      //    _data.dot.dotzConnectedByOwner.forEach(function (smartRef) {
      //      getDotzConnectedByOwnerArray.push(smartRef.dotId);
      //    });
      //  }
      //  _data.dot.dotzConnectedByOwner.originalDotObjects = Dotz.find({_id: {$in: getDotzConnectedByOwnerArray}});
      //}
    }

    //self.subscribe('dotzConnectedByOthers', dotId);

  });
});

/*

 Template.dotShow.onCreated(function() {
 let self = this;
 self.autorun(function() {

 let dotId = FlowRouter.getParam('dotId');
 self.subscribe('dotShow', dotId);
 _data.dot = Dotz.findOne(dotId);

 if (_data.dot) {
 self.subscribe('user', _data.dot.ownerUserId);
 _data.user = Meteor.users.findOne(_data.dot.ownerUserId);

 if (_data.dot.dotzConnectedByOwner) {
 let getDotzConnectedByOwnerObjectsArray = [];
 _data.dot.dotzConnectedByOwner.forEach(function (smartRef) {
 getDotzConnectedByOwnerObjectsArray.push(smartRef.dotId);
 });
 }
 _data.dot.dotzConnectedByOwner.objectsArray = Dotz.find({_id: {$in: getDotzConnectedByOwnerArray}});

 if (_data.dot.dotzConnectedByOwner.objectsArray) {
 _data.dot.dotzConnectedByOwner.objectsArray.forEach(function (dot) {
 dotId = dot._id;
 self.subscribe('dotShow', dotId);
 });
 }

 }

 if (_data.user) {
 console.log("##################### _data.user.username  is   " + _data.user.username);
 }
 console.log("444444444444411111111111111 _data.user is " + _data.user);


 //if (_data.dot) {
 //  self.subscribe('dotzConnectedByOwner', dotId);
 //  let getDotzConnectedByOwnerArray = [];
 //  _data.dot.dotzConnectedByOwner.forEach(function (smartRef) {
 //    getDotzConnectedByOwnerArray.push(smartRef.dotId);
 //  });
 //  _data.dot.dotzConnectedByOwner = Dotz.find({_id: {$in: getDotzConnectedByOwnerArray}});
 //}

 //self.subscribe('dotzConnectedByOthers', dotId);



 });
 });
 */



/*

 Template.dotShow.onCreated(function() {
 // We can use the `ready` callback to interact with the map API once the map is ready.
 GoogleMaps.ready('exampleMap', function(map) {
 // Add a marker to the map once it's ready
 var marker = new google.maps.Marker({
 position: map.options.center,
 map: map.instance
 });
 });
 });

 Template.dotShow.onRendered(function(){
 if(!GoogleMaps.loaded()) {
 GoogleMaps.load();
 }
 });

 */

Template.dotShow.helpers({
  data: function() {
    return _data;
  },
  //dotOwnerUserName: function() {
  //  console.log("_data.user.username  is   " + _data.user.username);
  //  return _data.user.username;
  //},
  //profileImageUrl: function() {
  //
  //  return _data.user.profile.profileImage;
  //},
  dotzConnectedByOwner: function() {
    console.log("_data.dot.dotzConnectedByOwner[0] " + _data.dot.dotzConnectedByOwner[0])
    return _data.dot.dotzConnectedByOwner;
    //return _data.dot.dotzConnectedByOwner.objectsArray;

  }
  //myDot: function(){
  //  return (_data.dot.owner.userId === Meteor.userId());
  //},
  //
  //createDate: function(){
  //  return (moment(_data.dot.createdAt).fromNow())
  //},
  //
  //eventPost: function (){
  //  return ( moment(_data.dot.eventDate.startDate).toNow(true));
  //} ,
  //
  //isConnected: function(){
  //
  //  var post = Dotz.findOne({_id: _data.dot._id});
  //  return post.inDotz.length;
  //
  //},
  //
  //profileImageUrl: function() {
  //  var user = Meteor.users.findOne(this.post.owner.userId);
  //  return user.profile.profileImage;
  //},
  //

  //userIdLink: function() {
  //  return ('/user/' + this.post.owner.userId);
  //}

  //exampleMapOptions: function() {
  //  // Make sure the maps API has loaded
  //  if (GoogleMaps.loaded() && this.post.locationLatLng) {
  //    // Map initialization options
  //    var loc = this.post.locationLatLng.split(",");
  //    loc[0] = parseFloat(loc[0]);
  //    loc[1] = parseFloat(loc[1]);
  //    return {
  //      center: new google.maps.LatLng(loc[0], loc[1]),
  //      zoom: 13
  //    };
  //  }
  //}

});

Template.dotShow.events({
  'click .editPost': function(){
    var dotId = this.post._id;
    var dotImage = this.post.outPic;
    console.log("the current post id "+ dotId);
    Modal.show('editPostModal', {
      data:{
        'dotId': dotId,
        'dotImage':dotImage
      }
    });
  },

  'click .connect': function(){
    var dotId = this.post._id;
    var isMix = this.post.isMix;
    console.log("isMic is: " + isMix); //DEBUG
    Modal.show('saveDotModal', {
      data:{
        'dotId': dotId,
        'isMix': isMix
      }
    });

  }
});




