Template.feed.onCreated(function(){
  DocHead.setTitle("Dotz: " + "Feed");

});
Template.feed.helpers({
  feedDotz: function(){
    if (Meteor.user().profile.feedDotz){
      //Reverse the array in the fastest way according to stackOverFlow:
      let tempArray = Meteor.user().profile.feedDotz;
      let oppositeArray = [];
      let i = tempArray.length -1;
      while(i > -1){
        oppositeArray.push(tempArray[i]);
        i--;
      }
      return oppositeArray;
    }
    else{
      Modal.show('findUsersToFollowModal');
    }
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
