Template.tempModal.onCreated(function() {
  Session.set('link', true);
  Session.set('place', false);
  Session.set('event', false);
  Session.set('person', false);
  Session.set('product', false);
  Session.set('media', false);
  Session.set('locationObj', undefined);
  Session.set('dotCoverImg', undefined);
});
Template.tempModal.onDestroyed(function(){
  _clearSessions();
});
Template.tempModal.onRendered(function(){
  if (!this.data.parentDotId){
    window.alert('MAN YOU MUST BRING PARENT DOT ID TO THIS MODAL BIATCH.')
  }
  //Check if we have initial data to set on the fields. e.g: google card.
  if (this.data.initialDataForFormFields){
    Modules.client.createDotLoading(); //Start to loading.
    Modules.client.updateCreateDotFields(this.data.initialDataForFormFields.title,
            this.data.initialDataForFormFields.description, this.data.initialDataForFormFields.img, this.data.initialDataForFormFields.linkUrl);
  }
  //Embedly + facebook integration for links:
});
Template.tempModal.helpers({

  link: function(){
    return Session.get('link');
  },
  place: function(){
    return Session.get('place');
  },
  person: function(){
    return Session.get('person')
  },
  product: function(){
    return Session.get('product');
  },
  media: function(){
    return Session.get('media');
  },
  event: function(){
    return Session.get('event')
  }
});
Template.tempModal.events({
  'click #link': function(){
    _clearSessions();
    Session.set('link', true);
  },
  'click #place': function(){
    _clearSessions();
    Session.set('place', true);
  },
  'click #event': function(){
    _clearSessions();
    Session.set('event', true);
  },
  'click #person': function(){
    _clearSessions();
    Session.set('person', true);
  },
  'click #media': function(){
    _clearSessions();
    Session.set('media', true);
  },
  'click #product': function(){
    _clearSessions();
    Session.set('product', true);
  },
  'click #exitBtn': function(){
    Modal.hide('tempModal');
  },
  'submit #createDotForm': function(e){
    e.preventDefault();
    var self = this;
    Modules.client.handleCreateSubmit(self.parentDotId, Session.get('dotCoverImg'), Session.get('locationObject'))
  }
});
function _clearSessions(){
  Session.set('place', false);
  Session.set('link', false);
  Session.set('event', false);
  Session.set('person', false);
  Session.set('product', false);
  Session.set('media', false);
  Session.set('locationObj', undefined);
  Session.set('dotCoverImg', undefined);
}
