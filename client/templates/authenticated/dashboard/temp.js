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
  var embedlyScript = 'http://cdn.embed.ly/jquery.embedly-3.0.5.min.js';
  DocHead.loadScript(embedlyScript);

  var embedlyPreviewScript = 'http://cdn.embed.ly/jquery.preview-0.3.2.min.js';
  DocHead.loadScript(embedlyPreviewScript, function(){
    $('#url').on('loading', function(){
      Modules.client.createDotClearForm();
      Modules.client.createDotLoading();
    });
    $('#url').preview({
      key:'ac95ba6487c94c12a42edafe22cff281',
      success: function(){
        Session.set("embedlyObj", $('#url').data('preview') );
        let data = $('#url').data('preview');
        Modules.client.updateCreateDotFields(data.title, data.description, data.thumbnail_url);
      },
      error: function(obj){
        //FACEBOOK SECTION
        Session.set("embedlyObj", undefined );
        if (obj.provider_url.indexOf('https://www.facebook.com') > -1){
          Modules.client.facebook.getPostData(function(error,data){
            if (error){
              Bert.alert(error.message, 'danger');
              Modules.client.createDotFinishedLoading();
            }else{
              Modules.client.updateCreateDotFields(undefined,data.message,undefined);
              Session.set('fbPostAuthorData', data.from); //TODO MOVE IT TO UPDATE CREATE DOT FIELDS.
            }
          });
        }
      }
    });
  });

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
