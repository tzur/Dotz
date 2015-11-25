Template.feed.onCreated(function(){
  DocHead.setTitle("Dotz: " + "Feed");
  Session.set('feedDotzNumber', 10);

});
Template.feed.onRendered(function(){
  let currentScrollVar = 1000;
  $(window).scroll(function() {
    if (document.body.scrollTop > currentScrollVar ) {
      currentScrollVar += 1000;
      Session.set('feedDotzNumber', Session.get('feedDotzNumber') + 10);
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
    else{
      Modal.show('findUsersToFollowModal');
    }
  },
  renderFeedDotz: function(){
    return Session.get('feedArray').slice(0, Session.get('feedDotzNumber'));
  },
  //TBD do it
  isDotValid: function(){
    let self = this;
    self.subs = new SubsManager({
      // maximum number of cache subscriptions
      cacheLimit: 10,
      // any subscription will be expire after 5 minute, if it's not subscribed again
      expireIn: 5
    });
    self.subs.subscribe('dotCard', this.dot._id);
    self.subs.subscribe('user', this.dot.ownerUserId);
    let dot = Dotz.findOne(this.dot._id);
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
