
Meteor.methods({
  closeToOpen(dot){
    check(dot, Object);
    if (dot.isOpen){
      throw new Meteor.Error("close-to-open", "trying to send an open to be re-opened...");
    }
    let positionArray = [];
    if (dot.connectedDotzArray){
      dot.connectedDotzArray.sort(function(smartRefA, smartRefB){
        return  smartRefB.connection.likes.length - smartRefA.connection.likes.length;
      });
    }
    Dotz.update({ _id: dot._id}, {
      $set: {connectedDotzArray: dot.connectedDotzArray, isOpen: true}
    });
  },
  openToClose(dot){
    check(dot, Object);
    if (!dot.isOpen){
      throw new Meteor.Error("open-to-close", "trying to send an close to be re-closed...");
    }
    Dotz.update({ _id: dot._id}, {
      $set: {isOpen: false}
    });
  }


});

