
let tagTheDot = () => {

  //TBD:
  let doc = Session.get('superTagsArray_tagTheDot');
  let dotId = doc.dot._id;
  console.log("dotId >>>>>>>>> " + dotId)
  let dotSlug = doc.dot.dotSlug;

  //let doc = {};
  let selfSuperTags = Modules.client.tagTheDot_takeInput();

  if (selfSuperTags) {
    //updateDotTags(dotId, fieldToUpdate, superTagsArray
    Meteor.call('updateDotTags', dotId, 'selfSuperTags' ,selfSuperTags  ,function(error,result){
      if (error){
        console.log("updateDot error >>> " + error)
      } else {
        Modal.hide();

        Meteor.call('pushNewDotSuperTagsToFilterConnectedDotz', dotId, selfSuperTags  ,function(error,result) {
          if (error) {
            console.log("pushNewDotSuperTagsToFilterConnectedDotz error >>> " + error)
          }
        });

        Session.set('spinnerOn', false);
        Session.set('superTagsArray_tagTheDot', undefined);

        console.log("updateDotTags result >>>  " + result);

        Meteor.call('addOrEditObjectInAlgolia', dotSlug, false);
        //analytics.track("Dot Edited", {
        //  isDotWithOutLocation: Session.equals("locationObject", undefined),
        //  dotType: dotSubType
        //});
      }
    });
  }
};

Modules.client.tagTheDot = tagTheDot;

