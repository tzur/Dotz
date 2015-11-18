
Template.dotShow.onCreated(function() {

  let self = this;
  self.subs = new SubsManager({
    // maximum number of cache subscriptions
    cacheLimit: 10,
    // any subscription will be expire after 5 minute, if it's not subscribed again
    expireIn: 5
  });
  self.autorun(function() {
    if(!GoogleMaps.loaded()){
      GoogleMaps.load({key: "AIzaSyC35BXkB-3zxK89xynEq038-mE6Ts9Dg-0", libraries: 'places', language: 'en'});
    }
    let dotSlug = FlowRouter.current().path.slice(1);

    if (dotSlug) {
      self.subscribe('dotShowByDotSlug', dotSlug);
    }
    let currentDot = Dotz.findOne({"dotSlug": dotSlug});
    if (currentDot){
      DocHead.setTitle("Dotz: " + currentDot.title);
      if (currentDot){
        self.subscribe('user', currentDot.ownerUserId );
      }
    }

  });
});

Template.dotShow.onRendered(function(){
  window.scrollTo(0,0);

  $(window).scroll(function() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      document.getElementById("whereIAm").className = "showWhere";
      //console.log("OK GO :)");
    } else {
      document.getElementById("whereIAm").className = "noneWhere";
      //console.log("Back!!!");
    }
  });

});


Template.dotShow.onDestroyed(function(){
  Session.set('whereIAm', undefined);
  Session.set('hereWithImg', undefined);
});


Template.dotShow.helpers({
  dotShow: function() {
    let dot = Dotz.findOne({ "dotSlug": FlowRouter.current().path.slice(1) });
    let ownerUser = Meteor.users.findOne(dot.ownerUserId);
    Session.set('whereIAm', dot.title);
    Session.set('hereWithImg', dot.coverImageUrl);
    let data = {
      dot: dot,
      ownerUser: ownerUser
    };
    return data;
  },

  isOpenDot: function() {
    return this.dot.isOpen;
  },

  isListShow: function() {

    return (this.dot.dotType === "List")
  },

  isMyDot: function() {

    return (this.dot.ownerUserId === Meteor.userId())
  },

  actionDate: function(){
    return (moment(this.dot.createdAtDate).fromNow())
  },

  eventDate: function(){

    return ( moment(this.dot.startDateAndHour).fromNow());

  },

  connectCounter: function() {
    //check if this dot is exist (to avoid some errors during delete action)

      let counter = this.dot.inDotz.length;
      //counter show:
      if (counter && counter === 0) {
        return ("");
      }
      else if (counter) {
        return ( "(" + counter + ")" );
      }

  },
  dotzNum: function() {

      let connectedDotz = 0;
      if (this.dot.connectedDotzArray) {
        connectedDotz = this.dot.connectedDotzArray.length;
      }
      if (connectedDotz === 0) {
        return false;
      }
      else {
        return ("+ " + connectedDotz );
      }

  },

  dotShowMapOptions: function(){
    if (GoogleMaps.loaded() && this.dot.locationLat) {
      // Map initialization options
      loc[0] = this.dot.location.latLng[0];
      loc[1] = this.dot.location.latLng[1];
      return {
        center: new google.maps.LatLng(loc[0], loc[1]),
        zoom: 13
      };
    }
  },

  connectedDotzArray: function() {
    return this.dot.connectedDotzArray;
  },

  iAmHere: function() {
    return Session.get('whereIAm');
  },

  hereWithImg: function() {
    return Session.get('hereWithImg');
  }

});

Template.dotShow.events({

  'click .connect': function(){
    if(Meteor.user()) {
      Modal.show('connectDotModal', {
        data: {
          dotId: this.dot._id,
          dot: this.dot
        }
      });
    }
    else{
      Modal.show('signUpModal');
    }
  },

  'click .editBtn': function(){
    Modal.show('editDotModal', {
      data:{
        'dot':this.dot,
        'actionTypeEdit': true
      }
    });
  },

  'click .delete':function(event){
      Modules.both.Dotz.deleteDot(this.dot);
  },

  'click #addUserConnection': function(){
    if ( Meteor.user() ) {
      Modal.show('connectDotBySreachModal');
    }
    else{
      Modal.show('signUpModal');
    }
  }

});




