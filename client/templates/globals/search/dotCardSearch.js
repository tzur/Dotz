Template.dotCardSearch.onCreated(function(){
  Meteor.subscribe('user', this.data.ownerUserId);
});

Template.dotCardSearch.helpers({
  cardData: function(){
    let data = {
      dot: this,
      ownerUser: Meteor.users.findOne(this.ownerUserId)
    };
    return data;
  },
  isMyDot: function() {
    return (this.dot.ownerUserId === Meteor.userId())
  },
  personalDescriptionOrBodyText: function() {
    return s.prune(this.dot.bodyText, 100);
  },
  actionDate: function(){
    if (this.dot.createdAtDate) {
      return (moment(this.dot.createdAtDate).fromNow())
    }
  },
  isListCard: function(){
    if (this.dot.dotType === "List"){
      return true
    }
    else{
      return false;
    }
  },
  eventDate: function(){
    if (this.dot.startDateAndHour) {
      return ( moment(this.dot.startDateAndHour).fromNow());
    }
  },
  dotzNum: function() {
    let ownerDotz = 0;
    if (this.dot.dotzConnectedByOwner) {
      ownerDotz = this.dot.dotzConnectedByOwner.length;
    }

    let othersDotz = 0;
    if (this.dot.dotzConnectedByOthers) {
      othersDotz = this.dot.dotzConnectedByOthers.length;
    }

    if ((ownerDotz + othersDotz) === 0) {
      return false;
    }
    else {
      return ("+ " + (ownerDotz + othersDotz) );
    }
  },
  dotOrDotz: function() {
    let ownerDotz = 0;
    if (this.dot.dotzConnectedByOwner) {
      ownerDotz = this.dot.dotzConnectedByOwner.length;
    }

    let othersDotz = 0;
    if (this.dot.dotzConnectedByOthers) {
      othersDotz = this.dot.dotzConnectedByOthers.length;
    }

    if ( (ownerDotz+othersDotz) === 1 ) {
      return ("Dot");
    }
    else {
      return ("Dotz");
    }
  },
  connectCounter: function() {
    //check if this dot is exist (to avoid some errors during delete action)
    let counter;
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

  //likeCounter: function(){
  //  return this.smartRef.likes.length;
  //}

});

Template.dotCardSearch.events({
  'click .connect': function(){
    if(Meteor.user())
    {
      Modal.show('connectDotModal',{
        data:{
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
        'dot': this.dot,
        'actionTypeEdit': true
      }
    });
  },
  'click .delete':function(event){
    Modules.both.Dotz.deleteDot(this.dot, this.smartRef);
  },

  'click #addDotToCurrentDot': function(){
    let parentDot = Template.parentData().dot;
    let currentDot = this.dot;
    Meteor.call('checkIfUserAuthoriseForConnect', parentDot._id, function(error, result){
      if(result === true){
        Modal.show('addPersonalDescriptionModal', {
          data:{
            dot: currentDot,
            parentDot: parentDot
          }
        });
      }
      else{
        Modal.show('signUpModal');
      }
    })
  }
});

