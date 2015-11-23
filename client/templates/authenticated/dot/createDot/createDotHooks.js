/**
 * Created by avivhatzir on 27/10/2015.
 */
let locationObject;
let dotHooks = {
  before: {
    method: function (doc){
      if(Session.get("coverImageUrl")){
        doc.coverImageUrl = Session.get("coverImageUrl");
      }
      if(locationObject = Session.get("locationObject")){
        let locationSchemaObject = {};
        locationSchemaObject = {
          latLng: locationObject.locationLatLng,
          name: locationObject.general.name,
          address: locationObject.general.formatted_address,
          googleMapsUrl: locationObject.general.url,
          placeId: locationObject.general.place_id,
          placePhoneNumber: locationObject.general.formatted_phone_number
        };
        doc.location = locationSchemaObject;
      }

      if(Session.get('parentDot')){
        doc.inDotz = [Session.get('parentDot')];
        let parentDot = Dotz.findOne(doc.inDotz[0])
        Session.set('redirectAfterCreate', parentDot.dotSlug )
      }
      else{
        doc.inDotz = [Meteor.user().profile.profileDotId];
        Session.set('redirectAfterCreate', Meteor.user().profile.userSlug )
      }

      doc.ownerUserId = Meteor.userId();
      doc.createdAtDate = new Date();
      doc.dotType = Session.get("dotType");
      //if (!doc.isOpen){
      //  doc.isOpen = true
      //}

      return doc;
    }

  },

  onSuccess: function(update, result){
    Session.set("parentDot", undefined);
    Session.set("locationObject", undefined);
    Session.set("dotType", undefined);
    Modal.hide("createDotModal");
    Bert.alert( 'Created :)', 'success', 'growl-bottom-left' );
    console.log("############# THIS is " + this.currentDoc);
    Meteor.call('addOrEditObjectInAlgolia', result, false);
    FlowRouter.go('/' + (Session.get('redirectAfterCreate')));
    setTimeout(function(){
      var n = $(document).height();
      $('html, body').animate({ scrollTop: n }, 1000);
    }, 1000);
    Session.set('redirectAfterCreate', undefined )
  }
};

AutoForm.addHooks('InsertDotForm', dotHooks);



