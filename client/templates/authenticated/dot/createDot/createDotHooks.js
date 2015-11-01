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
      locationObject = Session.get("locationObject");
      doc.inDotz = Session.get('parentDot');
      doc.ownerUserId = Meteor.userId();
      doc.createdAtDate = new Date();
      doc.locationLatLng = locationObject.locationLatLng;
      doc.locationName = locationObject.general.name;
      doc.locationAddress = locationObject.general.formatted_address;


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



