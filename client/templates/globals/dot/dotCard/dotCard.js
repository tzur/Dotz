Template.dotCard.onCreated(function(){
         let self = this;
        self.subs = new SubsManager({
        // maximum number of cache subscriptions
        cacheLimit: 10,
        // any subscription will be expire after 5 minute, if it's not subscribed again
        expireIn: 5
      });
       self.subs.subscribe('dotCard', this.data.dot._id);
       self.subs.subscribe('user', this.data.dot.ownerUserId);
       self.subs.subscribe('user', this.data.connection.connectedByUserId);
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
    return (this.dot && this.dot.dotType === "List")
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
      return s.prune(this.dot.location.address, 40);
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

  dotzNum: function() {
    let connectedDotz = 0;
    if (this.dot && this.dot.connectedDotzArray) {
      connectedDotz = this.dot.connectedDotzArray.length;
    }
    if (connectedDotz == 0){
      return false;
    }
    else{
      return ("+ " + connectedDotz );
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
      console.log("IM HERE");

      let dot = Dotz.findOne(this.dot._id);
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

  likeCounter: function(){
    if (this.smartRef.connection.likes.length > 0) {
      return this.smartRef.connection.likes.length;
    }
  }

});

Template.dotCard.events({

  'click .like': function(event){
    event.preventDefault();
    Modules.both.Dotz.likeDot(this.smartRef, Meteor.userId());
  },

  'click .unlike': function(event){
    Meteor.call('unLikePost', Meteor.userId(), this._id);
  },
  //'click .h2Title': function(event){
  //  Session.set('dotSlug', this.dot.dotSlug);
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
    }
    else{
      Modal.show('signUpModal');
    }

  },

  'click .disConnect': function(){
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
    Modules.both.Dotz.deleteDot(this.dot, this.smartRef.connection.toParentDotId);
  }

});
