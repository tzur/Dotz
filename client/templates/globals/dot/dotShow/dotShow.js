_data = {};
//_data.userShow = {}; //TBD?


Template.dotShow.onCreated(function() {
  let self = this;
  self.autorun(function() {

    let dotId = FlowRouter.getParam('dotId');
    self.subscribe('dotShow', dotId);
    _data.dotShow = Dotz.findOne(dotId);

      if (_data.dotShow) {
        self.subscribe('dotzConnectedByOwner', dotId);
        self.subscribe('user', _data.ownerUserId);

        if (_data.dotShow.dotzConnectedByOwner) {
          _data.dotShow.dotzConnectedByOwner.objectsArray = [];
          _data.dotShow.dotzConnectedByOwner.forEach(function (smartRef) {
            let dot = Dotz.findOne(smartRef.dotId);
            if (dot) {
              let object = {};
              object.smartRef = smartRef;
              object.dot = dot;
              _data.dotShow.dotzConnectedByOwner.objectsArray.push(object);
            }
          });
        }

        self.subscribe('dotzConnectedByOthers', dotId);
        if (_data.dotShow.dotzConnectedByOthers) {
          _data.dotShow.dotzConnectedByOthers.objectsArray = [];
          _data.dotShow.dotzConnectedByOthers.forEach(function (smartRef) {
            let dot = Dotz.findOne(smartRef.dotId);
            if (dot) {
              let object = {};
              object.smartRef = smartRef;
              object.dot = dot;
              _data.dotShow.dotzConnectedByOthers.objectsArray.push(object);
            }



          });
        }


      }
  });
});

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
    //console.log("_data.dot.dotzConnectedByOwner[0] " + _data.dot.dotzConnectedByOwner[0].title)
    //return _data.dot.dotzConnectedByOwner;
    return _data.dotShow.dotzConnectedByOwner.objectsArray;


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




