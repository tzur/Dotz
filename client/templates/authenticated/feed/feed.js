Template.feed.onCreated(function(){

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
  }

});

Template.feed.events({
  'click #findUsersTofollow': function(){
    Modal.show('findUsersToFollowModal');
  }
});
