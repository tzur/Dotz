
let locationObject;
let editDotHooks = {
  before: {
    "method-update": function(doc){
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
    Meteor.call('addOrEditObjectInAlgolia', updatedDot._id, false);
    //Modal.hide('createDotModal');
  }
};

AutoForm.addHooks('editDotForm', editDotHooks);
//
//AutoForm.addHooks('editDotForm', editDotHooks);



