Template.feed.onCreated(function(){
  DocHead.setTitle("Dotz: " + "Feed");
  Session.set('feedDotzNumber', 10);
});
Template.feed.onRendered(function(){
  $(window).scroll(function() {
    if (Meteor.user().profile.feedDotz.length > Session.get('feedDotzNumber')){
      if (document.body.scrollTop + (2*$(window).height()) >= $(document).height()) {
        Session.set('feedDotzNumber', Session.get('feedDotzNumber') + 10);
      }
    }
  })
});
Template.feed.helpers({
  feedDotz: function(){
    if (Meteor.user().profile && Meteor.user().profile.feedDotz){
      //Reverse the array in the fastest way according to stackOverFlow:
      let tempArray = Meteor.user().profile.feedDotz;
      let oppositeArray = [];
      let i = tempArray.length -1;
      while(i > -1){
        oppositeArray.push(tempArray[i]);
        i--;
      }
      Session.set('feedArray', oppositeArray);
      if (Session.get('feedArray')){
        return true
      }
    }
    else if (Meteor.user().profile && !Meteor.user().profile.feedDotz){
      Modal.show('findUsersToFollowModal');
    }
  },
  renderFeedDotz: function(){
    return Session.get('feedArray').slice(0, Session.get('feedDotzNumber'));
  },
  //TBD do it
  isDotValid: function(){
    let subsManager = new SubsManager({
      // maximum number of cache subscriptions
      cacheLimit: 10,
      // any subscription will be expire after 5 minute, if it's not subscribed again
      expireIn: 5
    });
    let self = this;
    subsManager.subscribe('dotCard', this.dot._id);
    subsManager.subscribe('user', this.dot.ownerUserId);

    let dot = Dotz.findOne(self.dot._id);
    if(dot){
      return true;
    }
  }
});

Template.feed.events({
  'click #findUsersTofollow': function(){
    Modal.show('findUsersToFollowModal');
  }
});
