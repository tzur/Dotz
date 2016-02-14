
Template.desktopDotShow.onCreated(function() {

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
    FlowRouter.watchPathChange();
    let dotSlug = FlowRouter.current().path.slice(1);
    if (dotSlug) {
      self.subs.subscribe('dotShowByDotSlug', dotSlug, function(){
          let dotShow = Dotz.findOne({dotSlug: dotSlug});
          if (!dotShow){
            FlowRouter.go('/');
            Bert.alert('Page does not exist', 'danger');
          }
          else{
            var title = "Dotz: " + dotShow.title;
            DocHead.setTitle(title);
          }
        }
      );
    }
    let currentDot = Dotz.findOne({"dotSlug": dotSlug});
    if (currentDot) {
        self.subs.subscribe('user', currentDot.ownerUserId);
        if(!Session.get('landingPageCategory' && currentDot.category)){
          Session.set('landingPageCategory', currentDot.category[0])
        }
        if(currentDot.dotType === "List"){
          analytics.page('List Show');
        }
        else{
          analytics.page('Dot Show')
        }
      }
  });
});

Template.desktopDotShow.onRendered(function(){
  Tracker.autorun(function () {
    FlowRouter.watchPathChange();
    window.scrollTo(0,0);

    //  Kill the Sessions here:
    Session.set('userClickOnTheYesButton', false);
    Session.set('userClickOnShowMoreButton', false);
  });

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  window.fbAsyncInit = function() {
    if (typeof(FB) != 'undefined'
      && FB != null ) {
      FB.init({
        appId: '904084409705076',
        xfbml: true,
        version: 'v2.5'
      });
    }
  };
  fbAsyncInit();


  //Link to the source: http://jsfiddle.net/yeco/4EcFf/
  //TBD: we need to reduce the jQuery queries... :


  //$(document).scroll(function () {
  //  var navPlaceHolder = $('#placeHolder-desktop');
  //
  //  if (navPlaceHolder.length > 0 ) {
  //    var origOffsetY = navPlaceHolder.offset().top - $(window).height();
  //    if ($(window).scrollTop() > origOffsetY) {
  //      $('#fixedFooter-desktopDotShow').removeClass('navbar-fixed-bottom');
  //      $('#fixedFooter-desktopDotShow').removeClass('fixedFooterShadow-desktopDotShow');
  //      $('#fixedFooterLineDiv-desktopDotShow').addClass('fixedFooterLine-desktopDotShow');
  //
  //
  //    } else {
  //      $('#fixedFooter-desktopDotShow').addClass('navbar-fixed-bottom');
  //      $('#fixedFooter-desktopDotShow').addClass('fixedFooterShadow-desktopDotShow');
  //      $('#fixedFooterLineDiv-desktopDotShow').removeClass('fixedFooterLine-desktopDotShow');
  //
  //    }
  //  }
  //});


});



Template.desktopDotShow.onDestroyed(function(){

});


Template.desktopDotShow.helpers({

  dotShow: function() {
    FlowRouter.watchPathChange();
    let dot = Dotz.findOne({ "dotSlug": FlowRouter.current().path.slice(1)});
    if (dot){
      let ownerUser = Meteor.users.findOne(dot.ownerUserId);
      let data = {
        dot: dot,
        ownerUser: ownerUser
      };
      return data;
    }
  },
  isOpenDot: function() {
    return this.dot.isOpen;
  },

  shortenBodyText: function() {
    if (this.dot){
      return s.truncate(this.dot.bodyText, 155);
    }
  },

  isLinkOrLocation: function() {
    if (this.dot.dotSubType === "Place") {
      return (this.dot.location.googleMapsUrl);
    }

    else if (this.dot.dotSubType === "Event") {
      if (this.dot.linkUrl){
        return (this.dot.linkUrl);
      }

      else if (this.dot.location.googleMapsUrl){
        return (this.dot.location.googleMapsUrl);
      }
    }

    else {
      return (this.dot.linkUrl);
    }
  },

  isListShow: function() {
    //console.log(" %%%%%%%%%%%%%%%% DESKTOP ^^^^^^^^^^^^^^")
    return (this.dot.dotType === "List" || this.dot.dotType ==="shareList");
  },

  likeCounter: function(){
    if (this.dot.totalUpvotes.length > 0) {
      return this.dot.totalUpvotes.length;
    }
  },

  isLikedByMe: function(){
    let likersArray = this.dot.totalUpvotes;
    if ( likersArray.indexOf( Meteor.userId() ) >= 0 ) {
      return true
    }
  },

  //ActionButton Helpers:
  actionButtonIcon: function() {
    if (this.dot.dotSubType === "Link") {
      return "fa-globe";
    } else if (this.dot.dotSubType === "Place") {
      return "fa-map-marker";
    } else if (this.dot.dotSubType === "Event") {
      return "fa-calendar";
    } else if (this.dot.dotSubType === "Person") {
      return "fa-user";
    } else if (this.dot.dotSubType === "Media") {
      return "fa-play";
    } else if (this.dot.dotSubType === "Product") {
      return "fa-shopping-bag";
    } else {
      return "fa-external-link";
    }
  },
  //----------------//

  //ActionButton Helpers:
  actionButtonTitle: function() {
    if (this.dot.dotSubType === "Link") {
      return "Visit";
    } else if (this.dot.dotSubType === "Place") {
      return "Navigate";
    } else if (this.dot.dotSubType === "Event") {
      return "Book";
    } else if (this.dot.dotSubType === "Person") {
      return "Contact";
    } else if (this.dot.dotSubType === "Media") {
      return "Play";
    } else if (this.dot.dotSubType === "Product") {
      return "Get";
    } else {
      return "Go";
    }
  },
  //----------------//

  userCanAutoGenerateDotz: function(){
    return ( this.dot.ownerUserId === Meteor.userId() && this.dot.quickStartListId )
  },

  thereIsNoConnectionsToThisDot: function() {
    return (this.dot.connectedDotzArray.length === 0)
  },

  isMyDot: function() {
    return (this.dot.ownerUserId === Meteor.userId())
  },

  actionDate: function(){
    return (moment(this.dot.createdAtDate).fromNow())
  },

  shortenAddress: function(){
    if (this.dot && this.dot.location && this.dot.location.address) {
      return s.prune(this.dot.location.address, 30);
    }
  },



  eventDate: function(){
    if ( this.dot && this.dot.startRepeatedDate && this.dot.endRepeatedDate ) {
      let textForMultipleEvents;
      if (this.dot.multipleEventsNote) {
        textForMultipleEvents = "Multiple Events: " + this.dot.multipleEventsNote;
      } else {
        textForMultipleEvents = "Multiple Events";
      }
      return (textForMultipleEvents + " (" + moment(this.dot.startRepeatedDate).format('dddd DD MMM')
      + " - " + moment(this.dot.endRepeatedDate).format('dddd DD MMM') + ")");
    }
    else if (this.dot && this.dot.multipleEventsNote ) {
      return ("Multiple Events (" + this.dot.multipleEventsNote + ")");
    }
    else if ( this.dot && this.dot.endRepeatedDate ) {
      return ("Multiple Events (until " + moment(this.dot.endRepeatedDate).format('dddd DD MMM') + ")");
    }
    else if ( this.dot && this.dot.startRepeatedDate ) {
      return ("Multiple Events (from " + moment(this.dot.startRepeatedDate).format('dddd DD MMM') + ")");
    }
    else if (this.dot && this.dot.startDateAndHour) {
      return ( moment(this.dot.startDateAndHour).format('DD MMMM, hh:mm A') );
    }
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
      else if (connectedDotz === 1) {
        return ("1 Dot")
      }
      else if (connectedDotz > 1) {
        return ( connectedDotz + " Dotz" );
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

  ////"show more description" session:
  //userClickOnShowMoreButton: function() {
  //  return Session.get('userClickOnShowMoreButton');
  //},
  //
  ////"show more" session:
  //userClickOnTheYesButton: function() {
  //  return Session.get('userClickOnTheYesButton');
  //},

  addDotIsAvailable: function() {
    return ( Meteor.user() && ( this.dot.isOpen || (this.dot.ownerUserId === Meteor.userId()) ) )
  },

  dataForTheQ: function() {
    return ( {
      dot: {
        _id: this.dot._id,
        connectedDotzArray: this.dot.connectedDotzArray
      }
    });
  },

  dataForCreateHere: function() {
      return ( {
        dot: {_id: this.dot._id}
      });
  },

  workingOnQuickStart: function() {
    return Session.get('workingOnQuickStart');
  },

  shareList: function(){
    return Session.get('shareListActive');
  },
  alreadyShared: function(){
    let sharedDot = Dotz.findOne(Session.get('shareListActive'));
    let alreadyAdded = false;
    let self = this;
    if (self.dot && sharedDot && sharedDot.connectedDotzArray){
      sharedDot.connectedDotzArray.forEach(function(smartRef){
        if (smartRef.dot._id === self.dot._id){
          alreadyAdded = true;
        }
      });
    }
    return alreadyAdded;
  },
  isUserAllowToConnect: function(){
    //if(Roles.userIsInRole( Meteor.userId(), 'Connector') || this.dot.ownerUserId === Meteor.userId() ){
    //  return true;
    //}
    if( this.dot.ownerUserId === Meteor.userId() || this.dot.isOpen ){
      return true;
    }
  },
  facebookDot: function(){
    return this.dot.linkAuthorUrl;
  },
  authorFbProfile: function(){
    return 'http://graph.facebook.com/'+ this.dot.facebookAuthorId + '/picture/?type=large';
  }
});

Template.desktopDotShow.events({


  'click #fixedFooter-desktopDotShow': function(){

    //Source: http://stackoverflow.com/questions/6677035/jquery-scroll-to-element
    let desktopFooterHeight = $('#fixedFooter-desktopDotShow').height();
    //$("#button").click(function() {
      $('html, body').animate({
        scrollTop: $("#placeHolder-desktop").offset().top - desktopFooterHeight
      }, 2000);
    //});
  },

  'click ._shareFacebookDialog': function(event){
    event.preventDefault();
    FB.ui({
      method: 'share',
      href: 'http://dotz.city/'+ this.dot.dotSlug
    }, function(response){});
  },

  // this session will be killed in onRendered of desktopDotShow.js
  'click #_showMore': function(){
    Session.set('userClickOnShowMoreButton', true)
  },

  'click .connect': function(){
    if(Meteor.user()) {
      Modal.show('mobileConnectDotModal', {
        data: {
          dotId: this.dot._id,
          dot: this.dot,
          connectToMyLists: true
        }
      });
    }
    else{
      Modal.show('signUpModal');
    }
  },

  'click ._report': function(event){
    event.preventDefault();
    Modal.show('reportModal');
  },

  'click ._editBtn_dot': function(){
    Modules.client.editDot_settings(this.dot);
  },

  'click ._editBtn_list': function(){
    Modules.client.editDot_settings(this.dot);
  },

  'click .like': function(event){
    event.preventDefault();

    if ( Meteor.user() ) {
      Modules.both.Dotz.likeDot(this.smartRef, Meteor.userId());
      //Modules.client.Dotz.dotCardAnalyticsEvents('Like', 'Liked: ',this.dot._id, this.dot.title, this.dot.dotType)
    }
    else{
      Modal.show('signUpModal');
      //Modules.client.Dotz.dotCardAnalyticsEvents('Like', 'Liked: ',this.dot._id, this.dot.title, this.dot.dotType);
    }

  },

  'click .unlike': function(event){
    Meteor.call('unLikePost', Meteor.userId(), this._id);
    //Modules.client.Dotz.dotCardAnalyticsEvents('Unliked', 'Unliked: ',this.dot._id, this.dot.title, this.dot.dotType);
  },

  'click .deleteShow':function(event){
      Meteor.call('deleteDot', this.dot, this.dot.inDotz[0]);
      window.history.back();
  },

  'click #addUserConnection': function(){
    if ( Meteor.user() ) {
      Modal.show('connectDotBySreachModal');
    }
    else{
      Modal.show('signUpModal');
    }
  },

  'click #_lastPathBtn': function(){
    window.history.back();
  },
  'click .closeToOpen': function(){
    Meteor.call('closeToOpen', this.dot, function(error,result){
      if (error){
        console.log(error);
      }
    });
  },
  'click .openToClose': function(){
    Meteor.call('openToClose', this.dot, function(error,result){
      if (error){
        console.log(error);
      }
    })
  },

  'click #_generateAutoDotz': function() {
    Session.set('workingOnQuickStart', true);

    let self = this;

    setTimeout(function(){

      Meteor.call('autoGenerateContentInsideList', self.dot.quickStartListId, self.dot._id, function (error) {
        if (error) {
          console.log("autoGenerateContentInsideList failed");
          Session.set('workingOnQuickStart', false)
        } else {
          Session.set('workingOnQuickStart', false)
        }
      });

    }, 3000);
    analytics.track("Auto Generate Dotz", {
      title: "Auto Generate Dotz From: " + this.dot.title
    })
  },
  'click .shareListInstant': function(event){
    event.preventDefault();
    let dotId = this.dot._id;
    if (Session.get('shareListActive')){
      let smartRef = new Modules.both.Dotz.smartRef(dotId,Meteor.userId(),Session.get('shareListActive'), CONNECT_ACTION, Meteor.userId());
      Meteor.call('addDotToConnectedDotzArray', smartRef, function (error, result) {
        if (error) {
          console.log(error);
        }
        else{
          console.log('success');
        }
      });
    }
  },
  'click .shareCurrentList': function(){
    event.preventDefault();
    let dotId = this.dot._id;
    //Normal process:
    let doc = {
      title: "Share",
      dotType: "shareList",
      createdAtDate: new Date(),
      ownerUserId: Meteor.userId(),
      inDotz: [Meteor.userId().shareDotId],
      isOpen: false,
      coverImageUrl: "https://dotz-dev-images.s3.amazonaws.com/jRZGh5cHJ3CmLqopk/SendDotzList.jpg"
    };
    Meteor.call('insertDot', doc, function (error, result) {
      if (error) {
        console.log(error);
      }
      else {
        Session.set('shareListActive', result);
        let shareDotId = result;
        let smartRef = new Modules.both.Dotz.smartRef(result, Meteor.userId(), Meteor.user().profile.shareDotId, CONNECT_ACTION, Meteor.userId());
        if (!error) {
          Meteor.call('addDotToConnectedDotzArray', smartRef, function (error, result) {
            if (error) {
              console.log(error);
            }
            else {
              Meteor.call('updateDotSlug',doc, shareDotId, (Math.random()).toString(),function(error,result){
                if (error){
                  console.log(error);
                }
                else{
                  console.log(result);
                  let smartRef = new Modules.both.Dotz.smartRef(dotId, Meteor.userId(),shareDotId, CONNECT_ACTION, Meteor.userId());
                  Meteor.call('addDotToConnectedDotzArray', smartRef, function (error, result) {
                    if (error) {
                      console.log(error);
                    }
                    else{
                    }
                  });
                }
              })
            }
          });
        }
        else {
          console.log("Error" + error);
        }
      }
    });
  }

});




