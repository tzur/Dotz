/**
 * Created by avivhatzir on 27/10/2015.
 */

let dotHooks = {
  before: {
    method: function (doc){
      if(Session.get("coverImageUrl")){
        doc.coverImageUrl = Session.get("coverImageUrl");
      }
      doc.inDotz = Session.get('parentDot');
      doc.ownerUserId = Meteor.userId();
      doc.createdAtDate = new Date();

      return doc;
    }

  },

  onSuccess: function(update, result){
    //Router.go("/post/"+ result);
    Session.set("coverImageUrl", undefined);
    Bert.alert( 'Created :)', 'success', 'growl-bottom-left' );
  }
};

AutoForm.addHooks('InsertDotForm', dotHooks);



