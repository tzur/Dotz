/**
 * Created by yoav on 22/02/2016.
 */

Template.createTheDot_form.onDestroyed(function(){
  _clearSessions();
  Session.set('locationObj', undefined);
  Session.set('dotCoverImg', undefined);
  Session.set('editAction_dot', undefined);
  Session.set('editAction_docToEdit', undefined);
});

Template.createTheDot_form.onRendered(function(){
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
    //Session.set('link', "active");
    //Session.set('selectedType', "Link");

    Session.set('link', false);
    Session.set('place', false);
    Session.set('event', false);
    Session.set('person', false);
    Session.set('product', false);
    Session.set('media', false);
    Session.set('image', false);
    Session.set('locationObj', undefined);
    Session.set('dotCoverImg', undefined);
  }
  //Embedly + facebook integration for links:

  //prevent send by enter (exclude the textarea):
  Modules.client.preventEnterByElementId('#createDotForm');

});

Template.createTheDot_form.helpers({

  isEditMod: function(){
    return Session.get('editAction_dot');
  },

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
  image: function(){
    return Session.get('image');
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
  },

  lists_DOTZ_Algolia: function(){
    return Session.get('lists_DOTZ');
  }

});
Template.createTheDot_form.events({

  'click #personalDescription': function(){
    $('#typesAndSearch-div').removeClass('hidden');
    $('#footer-createNewDot').removeClass('hidden');
  },

  'click #createTypeButtons': function(){
    $('#searchResultsDiv').addClass('hidden');
    $('#main-createNewDot').removeClass('hidden');
    $('#connectTheDot-Box').addClass('boxToModal');
    $('#dotShowFooter-inListShow').addClass('background-fa');
    //$('body').addClass('noScroll');
    $('#closeBtnModal').removeClass('hidden');
  },


  'click #_searchBoxInput': function(){
    $('#main-createNewDot').addClass('hidden');
    $('#searchResultsDiv').removeClass('hidden');
    $('#footer-createNewDot').addClass('hidden');
  },


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

  //if image is chosen than its a start dot
  'click #image': function(){
    _clearSessions();
    Session.set('image', "active");
    //Session.set('selectedType', "StartDot");
  },
  'click #product': function(){
    _clearSessions();
    Session.set('product', "active");
    Session.set('selectedType', "Product");
  },

  'submit #createDotForm': function(e){
    e.preventDefault();
    var self = this;
    console.log("self.parentDotId is   ----->  " + self.parentDotId);
    Modules.client.handleCreateSubmit(self.parentDotId, Session.get('dotCoverImg'), Session.get('locationObject'));
    $('#main-createNewDot').addClass('hidden');

    Modules.client.createDotClearForm(); //close the forms and clear the fields is in the modules
  },

  'click #_searchToReconnect': function(e){
    e.preventDefault();
    let inputToSearch = $('#personalDescription').val();
    if (inputToSearch === "") {
      Bert.alert("It's hard to search ''nothing'', try to type a bit :)", 'warning', 'fixed-bottom');
      return false;
    }

    //TODO: we need to check this operation on mobile devices.. @otni
    Modules.client.searchByAlgolia("lists_DOTZ", inputToSearch , function(error, content) {
      if(content){
        Session.set("lists_DOTZ", content.hits);
      }
      else {
        console.log("Error, on index: " + index + " >>>> search failed : " + error)
      }
    });

  }

});

function _clearSessions(){
  Session.set('place', false);
  Session.set('link', false);
  Session.set('event', false);
  Session.set('person', false);
  Session.set('product', false);
  Session.set('media', false);
  Session.set('image', false);
  //Session.set('locationObj', undefined);
  //Session.set('dotCoverImg', undefined);
  Session.set('selectedType', undefined);
}
