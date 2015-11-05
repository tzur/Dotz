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
        doc.locationLatLng = locationObject.locationLatLng;
        doc.locationName = locationObject.general.name;
        doc.locationAddress = locationObject.general.formatted_address;
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
    Session.set("locationObject", undefined)
    Bert.alert( 'Created :)', 'success', 'growl-bottom-left' );
  }
};

AutoForm.addHooks('InsertDotForm', dotHooks);



