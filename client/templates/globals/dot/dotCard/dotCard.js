Template.dotCard.onCreated(function(){
        Session.set('spinnerOn', false);
        let self = this;
        Session.set('dotInsideToListsBug', false);
        self.subs = new SubsManager({
        // maximum number of cache subscriptions
        cacheLimit: 10,
        // any subscription will be expire after 5 minute, if it's not subscribed again
        expireIn: 5
      });
        self.subs.subscribe('dotCard', self.data.dot._id);
        self.subs.subscribe('user', self.data.dot.ownerUserId);
        self.subs.subscribe('user', self.data.connection.connectedByUserId);

});


Template.dotCard.helpers({

  //subscriptionsReady: function(){
  //  return (Template.instance().dotCardReady.get() && Template.instance().ownerUserReady.get()
  //                              && Template.instance().connectedUserReady.get());
  //},
  dataCard: function(){
    if (this.dot){

      let data = {
        dot: Dotz.findOne(this.dot._id),
        smartRef: this,
        ownerUser: Meteor.users.findOne(this.dot.ownerUserId),
        connectedByUser: Meteor.users.findOne(this.connection.connectedByUserId)
      };
      let subsManager = Template.instance();
      if(!data.dot){
        subsManager.subs.subscribe('dotCard', this.dot._id);
        subsManager.subs.subscribe('user', this.dot.ownerUserId);
        subsManager.subs.subscribe('user', this.connection.connectedByUserId);
      }
      return data;
    }
  },
  //create specific SESSION!!!! TBD
  isInOpenList: function() {
    //The big if is for Feed that doesn't have these data.
    if (Template.parentData(2).username || Template.parentData(2).dot){
      if (Template.parentData(2).username) {
        return false;
      }
      else if (Template.parentData(2).dot.isOpen) {
        return true;
      }
    }

  },

  isInClosedList: function() {
    // We are at parent USER: so it's close list.
    if (Template.parentData(2).username || Template.parentData(2).dot) {
      if (Template.parentData(2).username) {
        return true;
      }
      //NEED TO FIX IT FOR DOT SHOW
      else if (!Template.parentData(2).dot.isOpen) {
        return true;
      }
    }
  },
  isListCard: function() {
    return (this.dot && this.dot.dotType === "List" || this.dot && this.dot.dotType === "shareList");
  },

  isMyDot: function() {
    return (this.dot && this.dot.ownerUserId === Meteor.userId())
  },

  //Works for dotzConnectedByOwner, TBD for dotzConnectedByOthers:
  sortIsAvailable: function() {
    let parentDotOwnerId = Dotz.findOne(this.smartRef.connection.toParentDotId).ownerUserId;
    return ( parentDotOwnerId === Meteor.userId() )
  },

  actionDate: function(){
    if (this.dot && this.dot.createdAtDate) {
      return (moment(this.dot.createdAtDate).fromNow())
    }
  },

  eventDate: function(){
    if (this.dot && this.dot.startDateAndHour) {
      return ( moment(this.dot.startDateAndHour).fromNow());
    }
  },

  shortenAdress: function(){
    if (this.dot && this.dot.location && this.dot.location.address) {
      return s.prune(this.dot.location.address, 30);
    }
  },

  userIsTheDotCreator: function() {
    if (this.ownerUser && this.connectedByUser){
      return (this.ownerUser.username === this.connectedByUser.username)
    }
  },

  personalDescriptionOrBodyText: function() {
    if (this.dot){
      if (this.smartRef.connection.personalDescription) {
        return ( ' " ' + s.prune(this.smartRef.connection.personalDescription, 100) + ' " ');
      }
      else {
        return s.prune(this.dot.bodyText, 100);
      }
    }
  },

  title: function() {
    if (this.dot){
        return s.prune(this.dot.title, 45);
    }
  },

  dotzNum: function() {
    let connectedDotz = 0;
    if (this.dot && this.dot.connectedDotzArray) {
      connectedDotz = this.dot.connectedDotzArray.length;
    }
    if (connectedDotz == 0){
      return false;
    }
    else{
      return (connectedDotz );
    }


  },

  dotOrDotz: function() {
    let connectedDotz = 0;
    if (this.dot && this.dot.connectedDotzArray) {
      connectedDotz = this.dot.connectedDotzArray.length;
    }

    if ( connectedDotz === 1 ) {
      return ("Dot");
    }
    else {
      return ("Dotz");
    }
  },

  isConnected: function() {
    return ( this.smartRef.connection.connectedByUserId === Meteor.userId() )
  },

  connectCounter: function() {
    //check if this dot is exist (to avoid some errors during delete action)
    let counter;
    if (this.dot) {
      let dot = Dotz.findOne(this.dot._id);
      if (dot) {
        counter = dot.inDotz.length + dot.totalUpvotes.length;
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

  likeCounter: function(){
    if (this.smartRef.connection.likes.length > 0) {
      return this.smartRef.connection.likes.length;
    }
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
  }
});
Template.dotCard.onDestroyed(function(){
  $('.disConnect').removeClass('active');
  $('.fa').removeClass('transparent');
});
Template.dotCard.events({

  'click .like': function(event){
    event.preventDefault();
    if ( Meteor.user() ) {
      Modules.both.Dotz.likeDot(this.smartRef, Meteor.userId());
    }
    else{
      Modal.show('signUpModal');
    }
  },

  'click .unlike': function(event){
    Meteor.call('unLikePost', Meteor.userId(), this._id);
  },
  //'click .h2Title': function(event){
  //  Session.set('dotSlug', this.dot.dotSlug);
  //},
  //'click ._setCurrentPath': function(){
  //  if(parentDot = Template.parentData().dot){
  //    let parentDot = Template.parentData().dot;
  //    let parentInfo = {slug: FlowRouter.current().path, title: parentDot.title, coverImage: parentDot.coverImageUrl};
  //    Session.set('lastPath', parentInfo);
  //  }
  //  else{
  //    let parentUser = Template.parentData();
  //    let parentInfo = {slug: FlowRouter.current().path, title: parentUser.username, coverImage: parentUser.profile.coverImage};
  //    Session.set('lastPath', parentInfo);
  //  }
  //},
  'click .connect': function(){
    if(Meteor.user())
    {
      Modal.show('connectDotModal',{
        data:{
          dot: this.dot,
          connectToMyLists: true
        }
      });
      analytics.track( 'Viewed Connect Modal to connect' + this.dot.title, {
        title: 'Connect Modal Page'
      });
    }
    else{
      Modal.show('signUpModal');
      analytics.track( 'Tried to Connect' + this.dot.title+  'while not connected', {
        title: 'Connect Modal Page'
      });
    }

  },

  'click .disConnect': function(event){
    $(event.currentTarget).toggleClass('active');
    $(event.currentTarget.childNodes[1]).toggleClass('transparent');
    $(event.currentTarget).css("outline", "none");
    Modules.both.Dotz.disConnectDot(this.smartRef);
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

  'click .editBtn': function(){
    Modal.show('editDotModal', {
      data:{
        'dot': this.dot,
        'actionTypeEdit': true
      }
    });
  },

  'click .delete':function(event){
    event.preventDefault();
    Modules.both.Dotz.deleteDot(this.dot, this.smartRef.connection.toParentDotId);
  },

  //TBD - reset the search in page result in other way
  'click ._setCurrentPath': function(){
    Session.set('searchInput',undefined);
    $('#searchBoxInput').val("")
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
  'click .shareList': function(event) {
    event.preventDefault();
    let dotId = this.dot._id;
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
                      Session.set('shareListActive', shareDotId);
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
