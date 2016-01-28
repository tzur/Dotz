
Template.lastDotCardMobileDotShow.onCreated(function() {
});


Template.lastDotCardMobileDotShow.onRendered(function() {
});


Template.lastDotCardMobileDotShow.onDestroyed(function() {
});



Template.lastDotCardMobileDotShow.helpers( {

  dataCard: function(){
    if (this.dot){
      //console.log("dot title is " + this.dot.title);
      let data = {
        dot: Dotz.findOne(this.dot._id),
        smartRef: this,
        ownerUser: Meteor.users.findOne(this.dot.ownerUserId),
        connectedByUser: Meteor.users.findOne(this.connection.connectedByUserId)
      };
      let subsManager = Template.instance();
      if(!data.dot){
        subsManager.subs.subscribe('mobileDotCard', this.dot._id, this.dot.ownerUserId, this.connection.connectedByUserId);
        //subsManager.subs.subscribe('dotCard', this.dot._id);
        //subsManager.subs.subscribe('user', this.dot.ownerUserId);
        //subsManager.subs.subscribe('user', this.connection.connectedByUserId);
      }
      return data;
    }
  },

  shortenTitle: function() {
    if (this.dot){
      return s.truncate(this.dot.title, 20);
    }
  },

});



Template.lastDotCardMobileDotShow.events( {

  'click #_yesButton': function(){
    Session.set('userClickOnTheYesButton', true)
  }

});
