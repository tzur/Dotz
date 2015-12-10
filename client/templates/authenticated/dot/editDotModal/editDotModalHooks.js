
let locationObject;
let editDotHooks = {
  before: {
    "method-update": function(doc){

      if(doc.$set["price"] <= 0 || !doc.$set.price ){
        doc.$set["price"] = null;
        doc.$set["currency"] = null;
      }

      let docFields = ["bodyText", "linkUrl", "tags"];
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
    let formatted = updatedDot.title
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[-]+/g, '-')
      .replace(/[^\w\x80-\xFF-]+/g,'');
    let relaventDotSlugStartIndex = updatedDot.dotSlug.lastIndexOf('/') + 1;
    let relaventDotSlugEndIndex = updatedDot.dotSlug.indexOf('-2');
    let relaventDotSlug = updatedDot.dotSlug.substring(relaventDotSlugStartIndex,relaventDotSlugEndIndex);
    if (relaventDotSlug.indexOf(formatted) != 0){
      Meteor.call('updateDotSlug', updatedDot, updatedDot._id, formatted, function(error,result){
        if (error){
          console.log(error);
        }
        else{
          Meteor.call('addOrEditObjectInAlgolia', result, false);
        }
      });
    }
  }
};

AutoForm.addHooks('editDotForm', editDotHooks);
//
//AutoForm.addHooks('editDotForm', editDotHooks);



