
let locationObject;
let editDotHooks = {
  before: {
    "method-update": function(doc){
      let docFields = ["bodyText", "linkUrl", "price", "tags"];
      docFields.forEach(function(fieldName){
        if(!doc.$set[fieldName]){
          doc.$set[fieldName] = null
        }
      });

      if(Session.get('coverImageUrl')){
        doc.$set.coverImageUrl = Session.get('coverImageUrl');
      }
      if(Session.get('locationObject')) {
        doc.$set.location = Modules.client.Dotz.createLocationObject(Session.get('locationObject'))
      }
      return (doc);
    }
  },


  onSuccess: function(update, result){
    //Router.go("/post/"+ result);
    Session.set("coverImageUrl", undefined);
    Session.set("locationObject", undefined);
    Modal.hide('editDotModal');
    let updatedDot = Dotz.findOne(this.currentDoc._id);
    if(updatedDot.location && updatedDot.location.latLng){
      updatedDot._geoloc = {"lat":updatedDot.location.latLng[0], "lng":updatedDot.location.latLng[1]};
    }
    Meteor.call('addOrEditObjectInAlgolia', updatedDot.dotSlug, false);
    //Modal.hide('createDotModal');
  }
};

AutoForm.addHooks('editDotForm', editDotHooks);
//
//AutoForm.addHooks('editDotForm', editDotHooks);



