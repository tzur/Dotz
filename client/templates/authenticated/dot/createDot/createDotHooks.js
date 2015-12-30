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

      if(doc.price <= 0 ){
        doc.price = null;
        doc.currency = null;
      }

      doc.ownerUserId = Meteor.userId();
      doc.createdAtDate = new Date();
      doc.dotType = Session.get("dotType");
      if(Session.get("embedlyObj")){
        doc.embedlyObj = Session.get("embedlyObj")
      }
      doc.category = Meteor.user().roles.firstGroup;

      //Open Dotz:
      if (doc.dotType === "Dot") {
        doc.isOpen = true;
      }
      //if (!doc.isOpen){
      //  doc.isOpen = true
      //}

      return doc;
    }

  },

  onError: function(method, error){
    if(error){
      Session.set('parentDot', undefined)
    }
    Session.set('spinnerOn', false);
  },

  onSuccess: function(update, result){
    Session.set('searchInput', undefined)
    Session.set("parentDot", undefined);
    Session.set("locationObject", undefined);
    Session.set("dotType", undefined);
    Session.set('spinnerOn', false);
    Meteor.call('addOrEditObjectInAlgolia', result, false);
    Session.set('redirectAfterCreate', undefined );
    analytics.track("Dot Created", {
      isDotWithOutLocation: Session.equals("locationObject", undefined),
      dotType: Session.get("dotType")
    });
  }
};

AutoForm.addHooks('InsertDotForm', dotHooks);



