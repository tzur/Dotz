_data = {};


Template.dotShow.onCreated(function() {

  let self = this;
  self.autorun(function() {

    let dotId = FlowRouter.getParam('dotId');
    if (dotId) {
      self.subscribe('dotShow', dotId);
      _data.dotShow = Dotz.findOne(dotId);
      Session.set('dot', _data.dotShow);
    }

    if (_data.dotShow) {

      self.subscribe('user', _data.dotShow.ownerUserId );
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
  });
});


Template.dotShow.onRendered(function(){

  window.scrollTo(0,0);
  Tracker.autorun(function(c){
    if(!GoogleMaps.loaded()){
      GoogleMaps.load({key: "AIzaSyC35BXkB-3zxK89xynEq038-mE6Ts9Dg-0", libraries: 'places', language: 'en'});
    }
    if (GoogleMaps.loaded() && document.getElementById('dotShowMap')) {
      Modules.client.Dotz.dotShowMap()
    }
  });
});


Template.dotShow.helpers({

  data: function() {
    _data.dotShow = Dotz.findOne(FlowRouter.getParam('dotId'));
    if (_data.dotShow) {
      _data.dotShowUser = Meteor.users.findOne(_data.dotShow.ownerUserId);
      //return _data;
    }
    return _data;
  },

  isMyDot: function() {
    if (_data.dotShow) {
      return (_data.dotShow.ownerUserId === Meteor.userId())
    }
  },

  actionDate: function(){
    if (_data.dotShow) {
      if (_data.dotShow.createdAtDate) {
        return (moment(_data.dotShow.createdAtDate).fromNow())
      }
    }
  },

  eventDate: function(){
    if (_data.dotShow) {
      if (_data.dotShow.startDateAndHour) {
        return ( moment(_data.dotShow.startDateAndHour).fromNow());
      }
    }
  },

  connectCounter: function() {
    //check if this dot is exist (to avoid some errors during delete action)
    if ( _data.dotShow ) {
        let counter;
        let dot = Dotz.findOne( _data.dotShow._id);
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
    }
  },

  dotzNum: function() {
    if ( _data.dotShow ) {
        let ownerDotz = 0;
        if (_data.dotShow.dotzConnectedByOwner) {
          ownerDotz = _data.dotShow.dotzConnectedByOwner.length;
        }

        let othersDotz = 0;
        if (_data.dotShow.dotzConnectedByOthers) {
          othersDotz = _data.dotShow.dotzConnectedByOthers.length;
        }

        if ((ownerDotz + othersDotz) === 0) {
          return false;
        }
        else {
          return ("+ " + (ownerDotz + othersDotz) );
        }
    }
  },

  dotShowMapOptions: function(){
    if (GoogleMaps.loaded() && _data.dotShow.locationLat) {
      // Map initialization options
      loc[0] = _data.dotShow.locationLat;
      loc[1] = _data.dotShow.locationLng;
      return {
        center: new google.maps.LatLng(loc[0], loc[1]),
        zoom: 13
      };
    }
  },

  dotzConnectedByOwner: function() {
    if (Session.get('dot')) {
      return Modules.both.Dotz.smartRefToDataObject(Session.get('dot').dotzConnectedByOwner);
    }
  },

  dotzConnectedByOthers: function() {
    if (Session.get('dot')) {
      return Modules.both.Dotz.smartRefToDataObject(Session.get('dot').dotzConnectedByOthers);
    }
  }

});


Template.dotShow.events({

  'click .connect': function(){
    Modal.show('connectDotModal',{
      data:{
        dotId: _data.dotShow._id,
        dot: _data.dotShow
      }
    });
  },

  'click .editBtn': function(){
    Modal.show('editDotModal', {
      data:{
        'dot': _data.dotShow,
        'actionTypeEdit': true
      }
    });
  },

  'click .delete':function(event){
    if (_data.dotShow) {
        let dotShowSmartRef = {};
        dotShowSmartRef.parentDot = _data.dotShow.profile.profileDotId;
        dotShowSmartRef.dotId = _data.dotShow._id;
        Modules.both.Dotz.deleteDot(_data.dotShow, dotShowSmartRef);
    }
  }

});




