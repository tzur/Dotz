_data = {};

Template.dotShow.onCreated(function() {
  let self = this;
  self.autorun(function() {

    let dotId = FlowRouter.getParam('dotId');
    if (dotId) {
      self.subscribe('dotShow', dotId);
      _data.dotShow = Dotz.findOne(dotId);
    }

    if (_data.dotShow) {

      _data.dotShowUser = Meteor.users.findOne(_data.dotShow.ownerUserId);

      if (_data.dotShow.dotzConnectedByOwner) {
        //subscribe all the relevant data for dotzConnectedByOwner:
        self.subscribe('smartRefToDotzCursor', _data.dotShow.dotzConnectedByOwner);
        self.subscribe('smartRefToUsersCursor', _data.dotShow.dotzConnectedByOwner);
        //send smartRef to module:
        //_data.dotzConnectedByOwnerObjectsArray = Modules.both.Dotz.smartRefToDataObject(_data.dotShow.dotzConnectedByOwner);
      }

      if (_data.dotShow.dotzConnectedByOthers) {
        //subscribe all the relevant data for dotzConnectedByOthers:
        self.subscribe('smartRefToDotzCursor', _data.dotShow.dotzConnectedByOthers);
        self.subscribe('smartRefToUsersCursor', _data.dotShow.dotzConnectedByOthers);
        //send smartRef to module:
        //_data.dotzConnectedByOthersObjectsArray = Modules.both.Dotz.smartRefToDataObject(_data.dotShow.dotzConnectedByOthers);


      }
    }

    GoogleMaps.load({key: "AIzaSyC35BXkB-3zxK89xynEq038-mE6Ts9Dg-0", libraries: 'places'});

    GoogleMaps.ready('dotShowMap', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
    });
  });
});
//
//Template.dotShow.onRendered(function() {
//  let self = this;
//  self.autorun(function() {
//    if (GoogleMaps.loaded()) {
//
//      var map = new google.maps.Map(document.getElementById('map'), {
//        center: {lat: 32.075362, lng: 34.774936},
//        zoom: 13,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//      });
//
//      var infowindow = new google.maps.InfoWindow();
//      var service = new google.maps.places.PlacesService(map);
//
//      var marker = new google.maps.Marker({
//        map: map,
//        position: place.geometry.location
//      });
//    }
//
//  });
//});


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
    if (_data.dotShow.dotzConnectedByOwner) {
      return Modules.both.Dotz.smartRefToDataObject(_data.dotShow.dotzConnectedByOwner);
    }
  },

  dotShowMapOptions: function(){
    if (GoogleMaps.loaded() && this.post.locationLatLng) {
      // Map initialization options
      var loc = this.post.locationLatLng.split(",");
      loc[0] = parseFloat(loc[0]);
      loc[1] = parseFloat(loc[1]);
      return {
        center: new google.maps.LatLng(loc[0], loc[1]),
        zoom: 13
      };
    }
  },

  dotzConnectedByOthers: function() {
    if (_data.dotShow.dotzConnectedByOthers) {
      return Modules.both.Dotz.smartRefToDataObject(_data.dotShow.dotzConnectedByOthers);
    }
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




