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
      }
      else{
        doc.inDotz = [Meteor.user().profile.profileDotId]
      }

      doc.ownerUserId = Meteor.userId();
      doc.createdAtDate = new Date();



      return doc;
    }

  },

  onSuccess: function(update, result){
    //Router.go("/post/"+ result);
    Session.set("coverImageUrl", undefined);
    Session.set("locationObject", undefined);
    Modal.hide('createDotModal');
    Bert.alert( 'Created :)', 'success', 'growl-bottom-left' );
  }
};

AutoForm.addHooks('InsertDotForm', dotHooks);



