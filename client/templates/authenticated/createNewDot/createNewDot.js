Template.createNewDot.onCreated(function() {
  //Session.set('link', true);
  //Session.set('selectedType', "Link");
  //
  //Session.set('place', false);
  //Session.set('event', false);
  //Session.set('person', false);
  //Session.set('product', false);
  //Session.set('media', false);
  //Session.set('locationObj', undefined);
  //Session.set('dotCoverImg', undefined);
});

Template.createNewDot.onDestroyed(function(){
  _clearSessions();
  Session.set('locationObj', undefined);
  Session.set('dotCoverImg', undefined);
  Session.set('editAction_dot', undefined);
});

Template.createNewDot.onRendered(function(){
  //Check if we have initial data to set on the fields. e.g: google card.
  if (this.data.initialDataForFormFields){
    Modules.client.createDotLoading(); //Start to loading.
    Modules.client.updateCreateDotFields(
      this.data.initialDataForFormFields.id,
      this.data.initialDataForFormFields.title,
      this.data.initialDataForFormFields.description,
      this.data.initialDataForFormFields.img,
      this.data.initialDataForFormFields.linkUrl);
  } else {
    Session.set('link', "active");
    Session.set('selectedType', "Link");

    Session.set('place', false);
    Session.set('event', false);
    Session.set('person', false);
    Session.set('product', false);
    Session.set('media', false);
    Session.set('locationObj', undefined);
    Session.set('dotCoverImg', undefined);
  }
  //Embedly + facebook integration for links:

  //prevent send by enter:
  Modules.client.preventEnterByElementId('#createDotForm');

});

Template.createNewDot.helpers({

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
    return Session.get('event');
  },
  selectedType: function(){
    return Session.get('selectedType');
  },
  linkOrMedia: function(){
    if (Session.get('link') || Session.get('media')) {
      return true;
    }
  }

});
Template.createNewDot.events({
  'click #link': function(){
    _clearSessions();
    Session.set('link', "active");
    Session.set('selectedType', "Link");
  },
  'click #place': function(){
    _clearSessions();
    Session.set('place', "active");
    Session.set('selectedType', "Place");
  },
  'click #event': function(){
    _clearSessions();
    Session.set('event', "active");
    Session.set('selectedType', "Event");
  },
  'click #person': function(){
    _clearSessions();
    Session.set('person', "active");
    Session.set('selectedType', "Person");
  },
  'click #media': function(){
    _clearSessions();
    Session.set('media', "active");
    Session.set('selectedType', "Media");
  },
  'click #product': function(){
    _clearSessions();
    Session.set('product', "active");
    Session.set('selectedType', "Product");
  },

  'submit #createDotForm': function(e){
    e.preventDefault();
    var self = this;
    //console.log("self.parentDotId is   ----->  " + self.parentDotId)
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
  //Session.set('locationObj', undefined);
  //Session.set('dotCoverImg', undefined);
  Session.set('selectedType', undefined);
}
