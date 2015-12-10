Template.footerForShare.onCreated(function(){
  let self = this;
  self.subs = new SubsManager({
    // maximum number of cache subscriptions
    cacheLimit: 10,
    // any subscription will be expire after 5 minute, if it's not subscribed again
    expireIn: 5
  });
  self.subs.subscribe('dotCard',Session.get('shareListActive'));
});
Template.footerForShare.onDestroyed(function(){
    Session.set('shareDot', undefined);
});
Template.footerForShare.helpers({
  amountOfDotzToShare: function(){
    let shareDot = Dotz.findOne(Session.get('shareListActive'));
    if (shareDot){
      Session.set('shareDot', shareDot);
      if (shareDot.connectedDotzArray.length === 0){
        return ("...");
      }
      else{
        return shareDot.connectedDotzArray.length;
      }
    }
    else{
      return("...");
    }
  },
  isSpinnerOn: function(){
    return Session.get('spinnerOn');
  }
});

Template.footerForShare.events({
  'submit #email-form': function(event){
    event.preventDefault();
    Session.set('spinnerOn', true);
    let touristName = event.currentTarget[0].value;
    let emailAddress = event.currentTarget[1].value;
    //console.log("emailAddress is " + emailAddress);
    if (touristName === ""){
      let userNameIndex = emailAddress.indexOf('@');
      touristName = emailAddress.substring(0, userNameIndex);
    }
    let updateOptions= {
      $set: {title: touristName + "'s List"}
    };
    Meteor.call('updateDot',  updateOptions, Session.get('shareDot')._id, function(error, result){
      if (error){
        console.log(error);
      }
    });
    Meteor.call('updateDotSlug', Session.get('shareDot'),Session.get('shareDot')._id, touristName + "'s List", function(error, result){
      if (!error){
        let dotSlug = result;
        Meteor.call("sendEmail",emailAddress, dotSlug, Meteor.user().username,
          touristName ,function(error, result){
            if (error){
              Bert.alert('Something went wrong, please try again', 'danger');
              Session.set('spinnerOn', false);
            }
            else{
              Bert.alert('Email-was Sent','success');
              Session.set('shareListActive', false);
              Session.set('spinnerOn', false);
            }
          });
      }
      else{
        console.log(error);
      }
    });
  },
  'click .exit':function(event){
    event.preventDefault();
    Session.set('shareListActive', false);
  }
});




