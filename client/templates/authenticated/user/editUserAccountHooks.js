/**
 * Created by avivhatzir on 12/11/2015.
 */
/**
 * Created by avivhatzir on 10/11/2015.
 */
/**
 * Created by avivhatzir on 27/10/2015.
 */
let editUserHooks = {
  before: {
    "method-update": function(doc){
      //doc.$set.profile = {
      //  coverImage: Session.get('userCoverImageUrl'),
      //  profileImage: Session.get('userProfileImageUrl'),
      //  location: Session.get('locationObject')
      //};

      if(Session.get('userCoverImageUrl')){
        doc.$set["profile.coverImage"]= Session.get('userCoverImageUrl');
      }
      if(Session.get('userProfileImageUrl')) {
        doc.$set["profile.profileImage"]= Session.get('userProfileImageUrl');
      }
      if(Session.get('locationObject')){
        doc.$set["profile.location"]= Modules.client.Dotz.createLocationObject(Session.get('locationObject'));

      }

      return (doc);
    }
  },


  onSuccess: function(update, result){
    Session.set("userCoverImageUrl", undefined);
    Session.set("userProfileImageUrl", undefined);
    Session.set("locationObject", undefined);
    Modal.hide('editUserAccountModal');
    Meteor.call('addOrEditObjectInAlgolia', Meteor.user().profile.userSlug, true);

  }
};

AutoForm.addHooks('editUserAccountForm', editUserHooks);
//
//AutoForm.addHooks('editDotForm', editDotHooks);



