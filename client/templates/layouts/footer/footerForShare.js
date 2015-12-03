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
    Session.set('shareDotSlug', undefined);
});
Template.footerForShare.helpers({
  amountOfDotzToShare: function(){
    let shareDot = Dotz.findOne(Session.get('shareListActive'));
    if (shareDot){
      Session.set('shareDotSlug', shareDot.dotSlug);
      return shareDot.connectedDotzArray.length;
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
    Meteor.call("sendEmail",event.currentTarget[0].value, Session.get('shareDotSlug'), Meteor.user().username,
                      event.currentTarget[1].value ,function(error, result){
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

  },
  'click .exit':function(event){
    event.preventDefault();
    Session.set('shareListActive', false);
  }
});
