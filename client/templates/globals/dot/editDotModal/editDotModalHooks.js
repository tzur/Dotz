/**
 * Created by avivhatzir on 10/11/2015.
 */
/**
 * Created by avivhatzir on 27/10/2015.
 */
let locationObject;
let editDotHooks = {
  before: {
    method: function(doc){
      doc.createdAtDate = new Date()
      return doc
    }

  },

  onSuccess: function(update, result){
    //Router.go("/post/"+ result);
    Session.set("coverImageUrl", undefined);
    Session.set("locationObject", undefined);
    //Modal.hide('createDotModal');
  }
};

AutoForm.addHooks('editDotForm', editDotHooks);



